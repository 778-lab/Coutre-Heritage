const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn-text");

// Alternar menu de seleção
selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

// Atualizar preço unitário ao selecionar uma opção
options.forEach(option => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        let selectedPrice = option.getAttribute("data-price"); // Obter preço

        sBtn_text.innerText = selectedOption;
        document.getElementById("currentPrice").innerText = selectedPrice; // Atualizar preço unitário
        optionMenu.classList.remove("active");

        updateTotal(); // Recalcular o total
    });
});

// Mostrar opções de frete
function showFreightOptions() {
    const destinationCep = document.getElementById("destinationCep").value;
    const shippingOptionsDiv = document.getElementById("shippingOptions");
    const resultDiv = document.getElementById("result");

    if (!destinationCep) {
        resultDiv.innerHTML = "<p>Por favor, insira o CEP de destino.</p>";
        return;
    }

    shippingOptionsDiv.style.display = "block";
    resultDiv.innerHTML = "<p>Consultando opções de frete...</p>";
}

// Selecionar apenas uma opção de frete
function selectOnlyOne(checkbox) {
    const checkboxes = document.querySelectorAll('input[name="freightType"]');
    let freightPrice = 0;

    checkboxes.forEach(item => {
        if (item !== checkbox) {
            item.checked = false;
        } else if (item.checked) {
            freightPrice = parseInt(item.nextElementSibling.innerText.match(/\d+/)[0]); // Extrair valor do frete
        }
    });

    updateTotal(freightPrice); // Atualizar o total com o preço do frete
}

// Calcular o total
function updateTotal(freightPrice = 0) {
    const unitPrice = parseInt(document.getElementById("currentPrice").innerText) || 0;

    // Calcular e exibir o total
    const totalPrice = unitPrice + freightPrice;
    document.getElementById("result").innerHTML = `<p>Total: R$ ${totalPrice},00</p>`;
}
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


