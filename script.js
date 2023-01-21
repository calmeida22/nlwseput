const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  hoje = confirm(
    "Inserir data de hoje?\nOK para inserir automaticamente. \nCANCELAR: para inserir manualmente."
  )
  if (hoje) {
    const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) {
      alert("Dia já incluso!!!")
      return
    }
    alert("Dia adicionado com sucesso!")
    nlwSetup.addDay(today)
  } else {
    alert("Inserir data manualmente!")
    novaData = prompt("Digite nova data DD/MM:")

    const today = novaData
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) {
      alert("Dia já incluso!!!")
      return
    }
    alert("Dia adicionado com sucesso!")
    nlwSetup.addDay(today)
  }
}
function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

nlwSetup.setData(data)
nlwSetup.load()
