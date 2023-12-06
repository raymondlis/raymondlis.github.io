
document.addEventListener("DOMContentLoaded", function() {

    var botaoGluten = document.getElementById("botaoGluten");

    botaoGluten.addEventListener("click", function() {
        if (botaoGluten.classList.contains("botaogluten")) {
            botaoGluten.classList.remove("botaogluten");
        } else {
            botaoGluten.classList.add("botaogluten");
        }
    });
});