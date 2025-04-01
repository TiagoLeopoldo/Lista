
import { criarItemDaLista } from "./criarItemDaLista.js";

const botaoAdicionar = document.getElementById('adicionar_Button');
const lista = document.getElementById('lista')

botaoAdicionar.addEventListener('click', (evento) => {
  evento.preventDefault();
  const itemLista = criarItemDaLista();
  lista.appendChild(itemLista);

});