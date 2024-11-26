 // Função para permitir apenas letras e espaços no campo de nome
 function validarNome(event) {
    const input = event.target;
    input.value = input.value.replace(/[^A-Za-zÀ-ÿ\s]/g, ''); // Remove qualquer coisa que não seja letra ou espaço
}

// Função para permitir apenas números e formatar o CPF no formato ###.###.###-##
function validarCPF(event) {
    const input = event.target;
    let cpf = input.value.replace(/\D/g, ''); // Remove qualquer coisa que não seja número

    if (cpf.length <= 3) {
        input.value = cpf; // Exibe os 3 primeiros números
    } else if (cpf.length <= 6) {
        input.value = cpf.replace(/(\d{3})(\d{1,})/, '$1.$2'); // Formata como xxx.xxx
    } else if (cpf.length <= 9) {
        input.value = cpf.replace(/(\d{3})(\d{3})(\d{1,})/, '$1.$2.$3'); // Formata como xxx.xxx.xxx
    } else if (cpf.length <= 11) {
        input.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,})/, '$1.$2.$3-$4'); // Formata como xxx.xxx.xxx-xx
    }

    // Limita o CPF a 11 números
    if (cpf.length > 11) {
        input.value = input.value.slice(0, 14); // Garante que não ultrapasse 11 dígitos
    }
}