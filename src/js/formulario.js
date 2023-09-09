const form = document.querySelector("#form")
const trocarBorda = document.querySelectorAll(".info, .mensagem");
const btnEnviar = document.querySelector(".botao");

form.addEventListener("submit", (event) => {
    event.preventDefault()

    trocarBorda.forEach(info => {
        if (info.value) {
            info.classList.remove("bordaVermelha");
            info.classList.add("bordaVerde");
            info.style.display = "none";
        } else {
            info.classList.remove("bordaVerde");
            info.classList.add("bordaVermelha");
            info.style.display = "block"; 
        }
    });
    
    form.submit();
});