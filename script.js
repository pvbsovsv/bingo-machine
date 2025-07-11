const express = req('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  
    res.send(console.log("works!"))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
