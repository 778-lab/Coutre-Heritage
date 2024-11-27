const navBar = document.querySelector("nav"),
        menubutoes = document.querySelectorAll(".menu-icone"),
        overlay = document.querySelector(".overlay");
              
      console.log(navBar, menubutoes,overlay)
        menubutoes.forEach(menubtn => {
            menubtn.addEventListener("click",() => {
                navBar.classList.toggle("open");
            });
        });    
        
        overlay.addEventListener("click", () =>{
            navBar.classList.remove("open")
})

function showSidebar(){
    const menudireito = document.querySelector('.menudireito')
    menudireito.style.display = 'flex'
  }
  function hideSidebar(){
    const menudireito = document.querySelector('.menudireito')
    menudireito.style.display = 'none'
}


function mostreSidebar(){
    const meucarrinho = document.querySelector('.meucarrinho')
    meucarrinho.style.display = 'flex'
  }
  function escondaSidebar(){
    const meucarrinho = document.querySelector('.meucarrinho')
    meucarrinho.style.display = 'none'
}