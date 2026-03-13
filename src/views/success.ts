import logoUrl from "../images/logo.jpg";

export function renderSuccess(
  container: HTMLElement,
  imageUrl: string,
  onBack: () => void
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

      <div class="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center">
        <div class="mb-4">
          <svg class="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h1 class="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Upload realizado com sucesso</h1>

        <img
          id="uploaded-image"
          src="${imageUrl}"
          alt="Imagem enviada"
          class="w-full rounded-lg object-cover max-h-64 mb-6"
        />

        <button
          id="back-btn"
          class="w-full bg-orange-500 text-white font-medium py-2.5 rounded-lg hover:bg-orange-600 active:bg-orange-700 transition cursor-pointer"
        >
          Enviar outra foto
        </button>
      </div>
    </div>
  `;

  container.querySelector<HTMLButtonElement>("#back-btn")!.addEventListener("click", onBack);
}
