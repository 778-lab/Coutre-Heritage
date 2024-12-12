// Função para alternar a visibilidade do formulário de cartão
function toggleCartaoForm(showForm) {
    var cartaoForm = document.getElementById("cartao-form");

    if (showForm) {
        cartaoForm.classList.remove("collapsed");  // Exibe o formulário
    } else {
        cartaoForm.classList.add("collapsed");  // Esconde o formulário
    }
}

// Função de inicialização para adicionar eventos aos rádios
window.onload = function() {
    const radioButtons = document.getElementsByName("cartao");
    radioButtons.forEach(function(radio) {
        radio.addEventListener("change", function() {
            const showForm = radio.value === "Adicionar novo Cartao";
            toggleCartaoForm(showForm);

            // Verifica qual opção foi selecionada e valida o formulário conforme necessário
            if (radio.value === "Adicionar novo Cartao") {
                document.getElementById("formularioValido").value = "true"; 
            } else {
                document.getElementById("formularioValido").value = "false";
            }
        });
    });
}

// Função para permitir somente números e limitar a quantidade de caracteres
function validarNumero(event, maxLength) {
    const input = event.target;
    input.value = input.value.replace(/\D/g, ''); // Remove tudo que não for número

    if (maxLength && input.value.length > maxLength) {
        input.value = input.value.slice(0, maxLength);  // Limita o comprimento
    }
}

// Função para validar o formulário
function validarFormulario(event) {
    event.preventDefault();  // Previne o envio do formulário até a validação

    // Verifica se a opção "Adicionar novo Cartão" foi selecionada
    const formularioValido = document.getElementById("formularioValido").value === "true";

    if (!formularioValido) {
        // Se o formulário "MasterCard 1" foi selecionado)
        alert("Pagamento realizado com sucesso!");
        window.location.href = "4--PagamentoConcluido.html"; 
        return;
    }

    // Obter valores dos campos
    const nomeCompleto = document.getElementById("nomeCompleto").value;
    const cpf = document.getElementById("cpf").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const parcelas = document.getElementById("parcelas").value;

    // Verificação de campos obrigatórios
    if (!nomeCompleto || !cpf || !dataNascimento || !email || !telefone || !parcelas) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // Verificação do formato de e-mail
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexEmail.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Se tudo estiver ok, redireciona para a página de pagamento concluído
    alert("Pagamento realizado com sucesso!");
    window.location.href = "4--PagamentoConcluido.html";  
}
