
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
  /* generamos container para cada frase */
 
  let numFrases = parseInt(prompt("Cuantas frases quieres esta semana?"), 10);

  // Check: avoid requesting more phrases than exist
  if (numFrases > frasesArray.length) {
    alert("No hay suficientes frases. Pide menos");
    return;
  }

  // Shuffle the array (Fisher-Yates shuffle)
  const shuffledFrases = [...frasesArray];
  for (let i = shuffledFrases.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledFrases[i], shuffledFrases[j]] = [shuffledFrases[j], shuffledFrases[i]];
  }

  const formContainer = document.createElement("form");
  bingoSection.append(formContainer); // Only once, outside the loop

  for (let i = 0; i < numFrases; i++) {
    const inputContainer = document.createElement("div");
    let fraseCliente = document.createElement("label");
    const tickbox = document.createElement("input");
    tickbox.setAttribute("type", "checkbox");

    fraseCliente.innerHTML = shuffledFrases[i];

    inputContainer.append(fraseCliente);
    inputContainer.append(tickbox);
    inputContainer.classList.add("input-container");

    formContainer.append(inputContainer);
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


// Add new sentence Section --------------------------


function addNewSentence() {

  let newFrase = prompt("Escribe la frase que quieres adicionar")

  fetch('https://bingo-servidor.onrender.com/frases', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      frase: newFrase  // <- this is the key name the server expects
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("No se pudo enviar la frase.");
    }
    return response.json();
  })
  .then(data => {
    console.log("Frase añadida con éxito:", data);
    alert("✅ Frase añadida con éxito");
  })
  .catch(error => {
    console.error("Error al enviar la frase:", error);
    alert("❌ Hubo un error al enviar la frase.");
  });
}


const buttonAdd = document.getElementById("buttonAdd"); 

buttonAdd.addEventListener("click", () => {

  addNewSentence()

})



