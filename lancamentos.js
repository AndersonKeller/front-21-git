import { baseUrl } from "./api.js";

console.log(baseUrl);
export async function getLancamentos() {
  const res = await fetch(`${baseUrl}/lancamentos`);
  const resJson = await res.json();
  console.log(resJson);
  return resJson;
}
export async function getSaidas() {
  const res = await fetch(`${baseUrl}/lancamentos?tipo=saida`);
  const resJson = await res.json();
  console.log(resJson);
  return resJson;
}
export async function getEntradas() {
  const res = await fetch(`${baseUrl}/lancamentos?tipo=entrada`);
  const resJson = await res.json();
  console.log(resJson);
  return resJson;
}
