const express = require('express')
const app = express()
const path = require('path')


app.use(express.static('public'))

app.get('/notes',(req,res)=>{
    console.log(req)
    // res.send('<h1>This is a test<h1>')
    console.log(path.join(__dirname + '/notes.html'))
    res.sendFile(path.join(__dirname + '/notes.html'))
})

app.all('*',(req,res)=>{
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(3000)
console.log('The server is listening to port 3000')