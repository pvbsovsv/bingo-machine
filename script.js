
// fetch frases do servidor


let frasesArray = []

fetch('https://bingo-servidor.onrender.com/frases')
  .then(res => res.json())
  .then(frases => {
    frases.forEach(frase => {
      frasesArray.push(frase) // test
    })

    console.log(frasesArray)
  })
  .catch(error => {
    console.error('Error fetching frases:', error)
  })
