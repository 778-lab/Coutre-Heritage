const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    })
})

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


function showFreightOptions() {
    const destinationCep = document.getElementById("destinationCep").value;
    const shippingOptionsDiv = document.getElementById("shippingOptions");
    const resultDiv = document.getElementById("result");

    // Verifica se o CEP de destino foi preenchido
    if (!destinationCep) {
        resultDiv.innerHTML = "<p>Por favor, insira o CEP de destino.</p>";
        return;
    }

    // Exibe as opções de frete
    shippingOptionsDiv.style.display = "block";
    resultDiv.innerHTML = "<p>Consultando as opções de frete para o CEP de destino: " + destinationCep + "...</p>";
}

function selectOnlyOne(checkbox) {
    const checkboxes = document.querySelectorAll('input[name="freightType"]');

    // Se o checkbox foi marcado, desmarque os outros
    checkboxes.forEach(function (item) {
        if (item !== checkbox) {
            item.checked = false;
        }
    });

    updateTotal();
}

