const input = document.querySelector('input')
const select = document.querySelector('select')
const button = document.querySelector('button')


//input.onkeypress = (event) => {console.log(event)} //no clicar mostra o evento


input.addEventListener("focus",() => {console.log("Dei um foco")}) //adiciona um ouvidor no inspect
select.addEventListener("change",() => {console.log(select.value)}) //adiciona um ouvidor no inspect
button.addEventListener("click",() => {console.log("O botão foi clicado")}) //adiciona um ouvidor no inspect

button.addEventListener("click",() => {alert("O alert foi ligado")}) //adiciona um ouvidor no inspect

//agora acessando
const clickButton = () => {alert("O alert foi ligado por função")}
button.addEventListener("click",clickButton)