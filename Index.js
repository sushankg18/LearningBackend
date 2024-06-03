require('dotenv').config()
const express = require("express")
// const PORT = 3000
const app = express();

app.get('/' , (req, res)=>{
    res.send("<h1>HELLO IT'S ME HOME PAGE</h1>")
})

app.get('/about' , (req, res)=>{
    res.send("<h1>HELLO IT'S ME ABOUT PAGE</h1>")
})
app.listen(process.env.PORT , ()=>{
    console.log(`SERVER IS WORKING ON http://localhost:${process.env.PORT}`)
})