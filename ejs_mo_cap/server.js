const express = require('express')
const app = express()
let ejs = require('ejs')
const port = 8080

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.render('index')
})

// app.get('/')

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
