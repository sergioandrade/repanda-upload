import { uploadToCloudinary } from "../upload";
import { formatPhoneMask } from "../utils/date";
import logoUrl from "../images/logo.jpg";

export function renderForm(
  container: HTMLElement,
  onSuccess: (imageUrl: string) => void
): void {
  container.innerHTML = `
    <div class="w-full max-w-sm mx-auto">
      <div class="flex justify-center mb-6">
        <img
          src="${logoUrl}"
          alt="Logo"
          class="w-24 h-24 rounded-full object-cover shadow-md ring-4 ring-white"
        />
      </div>

      <div class="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <h1 class="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-6">Enviar Foto</h1>

        <form id="upload-form" class="space-y-4">
          <div>
            <label for="name-input" class="block text-sm font-medium text-gray-700 mb-1">Nome</label>
            <input
              type="text"
              id="name-input"
              required
              placeholder="Seu nome"
              class="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <label for="phone-input" class="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
            <input
              type="tel"
              id="phone-input"
              required
              placeholder="(11) 99999-9999"
              class="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <label for="photo-input" class="block text-sm font-medium text-gray-700 mb-1">Escolher foto</label>
            <input
              type="file"
              id="photo-input"
              accept="image/*"
              required
              class="w-full text-sm text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 file:cursor-pointer file:transition"
            />
          </div>

          <div id="preview-container" class="hidden">
            <div class="relative">
              <img id="preview-image" class="w-full rounded-lg object-cover max-h-56" alt="Preview" />
              <button
                type="button"
                id="discard-btn"
                class="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white rounded-full w-8 h-8 flex items-center justify-center transition cursor-pointer"
                title="Descartar foto"
              >
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div id="error-message" class="hidden text-red-600 text-sm text-center bg-red-50 rounded-lg p-3"></div>

          <button
            type="submit"
            id="submit-btn"
            class="w-full bg-orange-500 text-white font-medium py-2.5 rounded-lg hover:bg-orange-600 active:bg-orange-700 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Enviar Foto
          </button>
        </form>
      </div>
    </div>
  `;

  const form = container.querySelector<HTMLFormElement>("#upload-form")!;
  const nameInput = container.querySelector<HTMLInputElement>("#name-input")!;
  const phoneInput = container.querySelector<HTMLInputElement>("#phone-input")!;
  const photoInput = container.querySelector<HTMLInputElement>("#photo-input")!;
  const previewContainer = container.querySelector<HTMLDivElement>("#preview-container")!;
  const previewImage = container.querySelector<HTMLImageElement>("#preview-image")!;
  const discardBtn = container.querySelector<HTMLButtonElement>("#discard-btn")!;
  const errorMessage = container.querySelector<HTMLDivElement>("#error-message")!;
  const submitBtn = container.querySelector<HTMLButtonElement>("#submit-btn")!;

  function showPreview(file: File): void {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.src = e.target?.result as string;
      previewContainer.classList.remove("hidden");
    };
    reader.readAsDataURL(file);
  }

  function clearPhoto(): void {
    photoInput.value = "";
    previewContainer.classList.add("hidden");
    previewImage.src = "";
  }

  photoInput.addEventListener("change", () => {
    const file = photoInput.files?.[0];
    if (file) {
      showPreview(file);
    } else {
      clearPhoto();
    }
  });

  phoneInput.addEventListener("input", () => {
    phoneInput.value = formatPhoneMask(phoneInput.value);
  });

  discardBtn.addEventListener("click", clearPhoto);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorMessage.classList.add("hidden");

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const file = photoInput.files?.[0];

    if (!name || !phone || !file) return;

    submitBtn.disabled = true;
    submitBtn.textContent = "Enviando...";

    try {
      const result = await uploadToCloudinary(file, name, phone);
      onSuccess(result.secure_url);
    } catch (err) {
      errorMessage.textContent =
        err instanceof Error ? err.message : "Erro ao enviar a imagem";
      errorMessage.classList.remove("hidden");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Enviar Foto";
    }
  });
}
