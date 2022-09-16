
function copiarTexto() {
    let textoCopiado = document.querySelector(".mensagem");
    textoCopiado.select();
    navigator.clipboard.writeText(textoCopiado.value);
    textoCopiado.value = inputTexto.value;
    alert("Texto copiado: " + textoCopiado.value);
    inputTexto.value = textoCopiado.value;
    textoCopiado.value = "";
    window.location.reload();
}
