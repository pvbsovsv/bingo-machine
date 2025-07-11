const express = req('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  
    
    fetch('https://bingo-servidor.onrender.com/')
    
    
    res.send(console.log("server online"))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
