import "./style.css";
import { renderForm } from "./views/form";
import { renderSuccess } from "./views/success";

const app = document.getElementById("app")!;

function showForm(): void {
  renderForm(app, (imageUrl) => {
    showSuccess(imageUrl);
  });
}

function showSuccess(imageUrl: string): void {
  renderSuccess(app, imageUrl, () => {
    showForm();
  });
}

showForm();
