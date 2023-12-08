import { login } from "./api.js";

const form = document.querySelector("form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.querySelector("#user");
  const pass = document.querySelector("#password");
  const response = await login(email.value, pass.value);
  if (response) {
    window.location.href = "/home";
  }
});
