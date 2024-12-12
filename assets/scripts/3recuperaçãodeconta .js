
function validarFormulario() {
    var email = document.getElementById('email').value;
  

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um email válido.");
        return false; 
    }


    // Redirecionamento após validação bem-sucedida
    window.location.href = "http://127.0.0.1:5501/4%C2%B0recupera%C3%A7%C3%A3odeconta.html"; 

    return true;
}
