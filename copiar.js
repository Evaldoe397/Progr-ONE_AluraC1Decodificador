
function copiarTexto() {
    let textoCopiado = document.querySelector(".mensagem");
    textoCopiado.select();
    navigator.clipboard.writeText(textoCopiado.value);
    textoCopiado.value = inputTexto.value;
    alert("O texto é: " + textoCopiado.value);
    inputTexto.value = textoCopiado.value;
    textoCopiado.value = "";
    window.location.reload();
}
