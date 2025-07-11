
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
let bingoSection = document.getElementById("bingo-section")

function newBingo() {
  
  console.log(frasesArray[getRandomInt(frasesArray.length)])
  let numFrases = prompt("Cuantas frases quieres esta semana?")

  /* iteracion para generar las secciones */
  
  for (let i = 0; i <= numFrases-1; i++) {
    let fraseContainer = document.createElement("div")
    let fraseCliente = document.createElement("p")
    let tickbox = document.createElement("button")
      /* generamos container para cada frase */
      
      bingoSection.append(fraseContainer)
      
      /* frase de cliente y tick appended al container */
      fraseContainer.append(fraseCliente)
      fraseContainer.append(tickbox)

      /* juntamos frase aleatoria del array */

      fraseCliente.innerHTML = frasesArray[getRandomInt(frasesArray.length)]
      
      /* adicionamos clases  a elementos nuevos */
      tickbox.classList.add("base-tickbox")
      fraseCliente.classList.add("frase-cliente")
      fraseContainer.classList.add("frase-container")
    }

    

}

/* button link */
const buttonBingo =  document.getElementById("buttonBingo")

/* button listener */

buttonBingo.addEventListener("click", () => {

/* bingoSection.innerHTML = "" */

newBingo()

})
