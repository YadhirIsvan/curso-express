require('dotenv').config()
const express = require('express')
const bodypaser = require('body-parser')

const app = express()
app.use(bodypaser.json())
app.use(bodypaser.urlencoded({extended : true}))

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send(`
        <h1>Curso Express.js v3 </h1>
        <p>Esto es una aplicación Node.js con Express.js</p>
        <p>Corre en el puerto ${PORT}</p>
    `)
})

app.get("/users/:id", (req, res)=>{
    const id = req.params.id

    res.send(`el id del usuario Yadhir Isvan es : ${id}`)

})



app.get("/search", (req, res)=>{
    const terms = req.query.terms
    const category = req.query.category


    res.send(` la temperatura es ${terms} y la altura es ${category}`)

})
//=>

app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT} `);
})