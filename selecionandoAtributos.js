//const element7 = document.querySelector('input')
//console.log(element7.attributes)

const element8 = document.querySelector('img')
console.log(element8.attributes)

const element9 = document.querySelector('img')
console.log(element9.src)

const element10 = document.querySelector('h1')
element10.innerText = "Hello" //innerText => muda o texto


//innerHTML => insere um paragrafo
const element11 = document.querySelector('h1')
element11.innerHTML = "Hello guy <p>novoparagrafo</p>"
console.log(element11)
element11.style.color = 'red'

const element12 = document.querySelector('button')
//const myFunction = () => {alert('Fui pressionado')}
//outra maneira
//element12.onclick = () => {alert('Fui pressionado')} 

const element13 = document.querySelector('input')
//button no html =>=>  <button onclick="myFunction()">Aperte aqui</button>
//const myFunction = () => {alert('Fui pressionado')}
//outra maneira
element13.onkeypress = () => {console.log('Pressionei uma tecla')} 

