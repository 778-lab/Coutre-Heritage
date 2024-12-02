function validarFormulario() {
    // Obtendo o valor do campo de email
    var email = document.getElementById('email').value;

    // Regex para validação do email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Verificando se o email é válido
    if (!email || !emailPattern.test(email)) {
        alert("Por favor, insira um email válido.");
        return false; // Impede o redirecionamento
    }

    // Se a validação for bem-sucedida, redireciona para a próxima página
    window.location.href = "http://127.0.0.1:5500/4%C2%B0recupera%C3%A7%C3%A3odeconta.html"; // Substitua com a URL correta

    return true; // Permite o redirecionamento
}
