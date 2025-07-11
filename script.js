
// fetch frases do servidor

fetch('https://bingo-servidor.onrender.com/frases')
  .then(res => res.json())
  .then(frases => {
    frases.forEach(frase => {
      console.log(frase) // test
    })
  })
  .catch(error => {
    console.error('Error fetching frases:', error)
  })
