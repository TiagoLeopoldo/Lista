const inputItem = document.getElementById('input_item');

export function criarItemDaLista() {
  if (inputItem.value === '') {
    alert('Por favor, preencha o campo.');
    return;
  }

  const itemLista = document.createElement('li');
  const label = document.createElement('label');
  label.style.width = '100%';
  label.style.padding = '15px';
  label.style.display = "flex";
  label.style.justifyContent = "space-between";
  label.style.alignItems = "center";
  label.style.gap = "15px";
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const item = document.createElement('p');
  item.innerText = inputItem.value
  const botaoExcluir = document.createElement('button');
  botaoExcluir.classList.add('excluir');
  botaoExcluir.innerText = 'Excluir'

  checkbox.addEventListener('click', () => {
    atualizarEstilo(label, item);
  }
  );

  function atualizarEstilo(label, item) {
    if (checkbox.checked) {
      label.classList.add('mudar_cor_de_fundo', 'borda');
      item.classList.add('decoracao_texto')
    } else {
      label.classList.remove('mudar_cor_de_fundo', 'borda');
      item.classList.remove('decoracao_texto');
    }
  }


  botaoExcluir.addEventListener('click', () => {
    lista.removeChild(itemLista);
  });



  itemLista.appendChild(label);
  label.appendChild(checkbox);
  label.appendChild(item);
  label.appendChild(botaoExcluir);

  inputItem.value = '';

  return itemLista;
}