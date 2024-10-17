function toggleMode() {
    var element = document.body;
    var botao = document.getElementById("noturno");
    var textoD = "Dark Mode";
    var textL = "Light Mode";

    element.classList.toggle("dark-mode");

    if (botao.innerHTML == textoD) {
        botao.innerHTML = textL;
    } else {
        botao.innerHTML = textoD;
    }
}
