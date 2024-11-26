document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
});

function checkLoginStatus() {
    // Verifica o estado de login
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (!isLoggedIn) {
        // Se não estiver logado, mostra a mensagem de login
        document.getElementById('login-prompt').style.display = 'block';
    } else {
        // Se estiver logado, executa outras ações
        console.log('Usuário está logado');
    }
}

function login() {
    // Função de login (exemplo simplificado)
    localStorage.setItem('isLoggedIn', 'true');
    document.getElementById('login-prompt').style.display = 'none';
    console.log('Usuário fez login');
}








document.getElementById("collectionButton").addEventListener("click", function() {
    alert("Bem-vindo à nossa coleção!");
});

document.getElementById("watchImage").addEventListener("mouseover", function() {
    this.style.transform = "scale(1.1)";
});

document.getElementById("watchImage").addEventListener("mouseout", function() {
    this.style.transform = "scale(1)";
});
