const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn-text");


selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));


options.forEach(option => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        let selectedPrice = option.getAttribute("data-price"); 

        sBtn_text.innerText = selectedOption;
        document.getElementById("currentPrice").innerText = selectedPrice; 
        optionMenu.classList.remove("active");

        updateTotal(); 
    });
});

 
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
            freightPrice = parseInt(item.nextElementSibling.innerText.match(/\d+/)[0]); 
        }
    });

    updateTotal(freightPrice); 
}


function updateTotal(freightPrice = 0) {
    const unitPrice = parseInt(document.getElementById("currentPrice").innerText) || 0;

    
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


function updateTotal() {
    
    const unitPrice = parseFloat(document.getElementById("currentPrice").innerText.replace("R$ ", "").replace(/\./g, "").replace(",", ".")) || 0;
    const deliveryPrice = parseFloat(document.getElementById("deliveryPrice").innerText.replace("R$ ", "").replace(/\./g, "").replace(",", ".")) || 0;

    
    const totalPrice = unitPrice + deliveryPrice;

    
    document.getElementById("current").innerText = formatCurrency(totalPrice);
}


function formatCurrency(amount) {
    return `R$ ${amount.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}


function selectOnlyOne(checkbox) {
    const checkboxes = document.querySelectorAll('input[name="freightType"]');
    let freightPrice = 0;

    checkboxes.forEach(item => {
        if (item !== checkbox) {
            item.checked = false;
        } else if (item.checked) {
            
            freightPrice = parseFloat(item.nextElementSibling.innerText.match(/R\$ (\d+[\.,]?\d*)/)[1].replace(",", "."));
        }
    });

    
    document.getElementById("deliveryPrice").innerText = formatCurrency(freightPrice);

    updateTotal(); 
}


