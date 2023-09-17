const dadosForm = document.querySelectorAll(".dados");
const botaoForm = document.querySelector(".botao");
const alertaForm = document.querySelectorAll(".alerta")

botaoForm.addEventListener("click", (event) => {
  event.preventDefault();

  dadosForm.forEach((input) => {
    if (input.value) {
      input.classList.add("aceito");
      input.classList.remove("recusado");
      input.nextElementSibling.classList.add("alertaOculto");
    } else {
      input.classList.remove("aceito");
      input.classList.add("recusado");
      input.nextElementSibling.classList.remove("alertaOculto");
    }
  });
});
