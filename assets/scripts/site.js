const imagens = ["assets/images/sapato.jpg", "assets/images/sapato2.jpg", "assets/images/sapato3.jpg"];
let indiceAtual = 0;

function trocarImagem() {
  
  indiceAtual++;
  if (indiceAtual >= imagens.length){
    indiceAtual = 0;
  }

  const imgProduto = document.getElementById("imagemProduto");
  imgProduto.src = imagens[indiceAtual];
}

document.addEventListener('DOMContentLoaded', () => {
  const selectMenu = document.querySelector('.select-menu');
  const selectBtn = selectMenu.querySelector('.select-btn');
  const options = selectMenu.querySelectorAll('.option');
  const selectText = selectBtn.querySelector('.sBtn-text');

  // Alternar o menu ativo
  selectBtn.addEventListener('click', (event) => {
      event.stopPropagation(); // Impede que o clique no botão feche o menu
      selectMenu.classList.toggle('active');
  });

  // Atualizar o texto selecionado
  options.forEach(option => {
      option.addEventListener('click', () => {
          const selectedText = option.querySelector('.option-text').innerText;
          selectText.innerText = selectedText; // Substitui o texto do botão
          selectMenu.classList.remove('active'); // Fecha o menu após a seleção
      });
  });

  // Fechar o menu ao clicar fora
  document.addEventListener('click', (event) => {
      if (!selectMenu.contains(event.target)) {
          selectMenu.classList.remove('active');
      }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const selectMenu = document.querySelector('.select-menu1');
  const selectBtn = selectMenu.querySelector('.select-btn1');
  const options = selectMenu.querySelectorAll('.option1');
  const selectText = selectBtn.querySelector('.sBtn-text1');

  // Alternar o menu ativo
  selectBtn.addEventListener('click', (event) => {
      event.stopPropagation(); // Impede que o clique no botão feche o menu
      selectMenu.classList.toggle('active');
  });

  // Fechar o menu ao clicar fora
  document.addEventListener('click', (event) => {
      if (!selectMenu.contains(event.target)) {
          selectMenu.classList.remove('active');
      }
  });
});