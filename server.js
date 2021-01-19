const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')
const router = require('./network/routes')

db('mongodb+srv://db_user_platzi:yCz8z7F9GS8DG9gQ@cluster0.oaij7.mongodb.net/telegram?retryWrites=true&w=majority')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
// app.use(router)
router(app)

app.use('/app', express.static('public'))

app.listen(3000)

console.log('La aplicación esta escuchando en http://localhost:3000')