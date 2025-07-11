const app = express()
const port = 4000

app.get('/', (req, res) => {
  
    
    fetch('https://bingo-servidor.onrender.com/frases')
    .then(res = res.json())
    .then(frases => {

        frases.forEach(frase => {

            console.log(frase)

        })

    })
    
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
