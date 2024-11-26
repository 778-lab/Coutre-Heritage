function copiarCodigo() {
    // Obtém o elemento que contém o código Pix
    var codigoPix = document.getElementById("codigo-pix");

    // Cria um campo de input temporário
    var inputTemp = document.createElement("input");
    inputTemp.value = codigoPix.textContent; // Define o valor do input como o código Pix
    document.body.appendChild(inputTemp); // Adiciona o input ao DOM
    
    // Seleciona o conteúdo do input
    inputTemp.select();
    inputTemp.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Executa o comando para copiar para a área de transferência
    document.execCommand("copy");

    // Remove o input temporário do DOM
    document.body.removeChild(inputTemp);

    // Exibe a mensagem "Texto copiado!"
    var msg = document.getElementById("copiado-msg");
    msg.style.display = "block";

    // Esconde a mensagem após 2 segundos
    setTimeout(function() {
        msg.style.display = "none";
    }, 2000);
}
