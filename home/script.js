import { getEntradas, getSaidas } from "../lancamentos.js";

async function renderEntradas() {
  const list = await getEntradas();

  const total = list.reduce((prev, next) => {
    return prev + parseInt(next.valor);
  }, 0);

  mountList(list, ".entrada", total);
}
renderEntradas();
async function renderSaidas() {
  const list = await getSaidas();
  const total = list.reduce((prev, next) => {
    return prev + parseInt(next.valor);
  }, 0);
  mountList(list, ".saida", total);
}
renderSaidas();

function mountList(list = [], query, total) {
  const ul = document.querySelector(query);
  list.forEach((item) => {
    ul.insertAdjacentHTML(
      "beforeend",
      `
        <li>
            <p>R$ ${item.valor}</p>
        </li>
    `
    );
  });
  ul.insertAdjacentHTML(
    "beforeend",
    `
    <p>Total: R$ ${total}</p>
  `
  );
}
