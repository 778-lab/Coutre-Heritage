
    function validarFormulario() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert("Por favor, insira um email válido.");
            return false; 
        }

        if (password.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres.");
            return false;
        }

        // Redirecionamento após validação bem-sucedida
        window.location.href = "http://127.0.0.1:5501/2%20carrinho.html"; // Use o caminho relativo correto aqui.
        return true;
    }
