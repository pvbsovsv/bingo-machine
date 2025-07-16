
// fetch frases do servidor


 const frasesArray = []

fetch('https://bingo-servidor.onrender.com/frases')
  .then(res => res.json())
  .then(frases => {
    frases.forEach(frase => {
      frasesArray.push(frase) 
    })

    console.log(frasesArray)
  })
  .catch(error => {
    console.error('Error fetching frases:', error)
  })

/* random interger */

  function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/* bingo function */
let bingoSection = document.querySelector("#bingo-section")

function newBingo() {
  
  console.log(frasesArray[getRandomInt(frasesArray.length)])
  let numFrases = prompt("Cuantas frases quieres esta semana?")

  /* iteracion para generar las secciones */
  
  /* generamos container para cada frase */
  const formContainer = document.createElement("form")
  
  for (let i = 0; i <= numFrases-1; i++) {
    const inputContainer = document.createElement("div")
    let fraseCliente = document.createElement("label")
    const tickbox = document.createElement("input")
    tickbox.setAttribute("type", "checkbox")

   
      
      bingoSection.append(formContainer)
      
      /* frase de cliente y tick appended al container */
      formContainer.append(inputContainer)
      inputContainer.append(fraseCliente)
      inputContainer.append(tickbox)
      inputContainer.classList.add("input-container")

      /* juntamos frase aleatoria del array */

      fraseCliente.innerHTML = frasesArray[getRandomInt(frasesArray.length)]
      /* adicionamos clases  a elementos nuevos */
      tickbox.classList.add("tickbox")
      fraseCliente.classList.add("frase-cliente")
      formContainer.classList.add("form-container")
    }

    

}

/* button link */
const buttonBingo =  document.getElementById("buttonBingo")

/* button listener */

buttonBingo.addEventListener("click", () => {

bingoSection.innerHTML = ""

newBingo()

})
