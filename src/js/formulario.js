const formulario = document.getElementById("form")
const dadosUsuario = document.querySelectorAll(".dados")

formulario.addEventListener("submit", function (event) {
  event.preventDefault()

  let camposPreenchidos = 0

  dadosUsuario.forEach(function (item) {
    if (item.value.trim() === "") {
      item.classList.add("borda-vermelha")
      item.nextElementSibling.classList.add("ativo")
    } else {
      item.classList.remove("borda-vermelha")
      item.classList.add("borda-verde")
      item.nextElementSibling.classList.remove("ativo")
      camposPreenchidos++
    }
  })

  if (camposPreenchidos === dadosUsuario.length) {
    formulario.submit()
  }
})
