import { register } from "../api.js";

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#user");
  const pass = document.querySelector("#password");
  register(email.value, pass.value);
});
