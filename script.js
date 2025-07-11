
app.get('/', (req, res) => {
  
    
    fetch('https://bingo-servidor.onrender.com/frases')
    .then(res = res.json())
    .then(frases => {

        frases.forEach(frase => {

            console.log(frase)

        })

    })
    
    
})

