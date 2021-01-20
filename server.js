const express = require('express')
const app = express()
const server = require('http').Server(app)

const cors = require('cors')
const bodyParser = require('body-parser')
const socket = require('./socket')
const db = require('./db')
const router = require('./network/routes')

db('mongodb+srv://db_user_platzi:yCz8z7F9GS8DG9gQ@cluster0.oaij7.mongodb.net/telegram?retryWrites=true&w=majority')

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

socket.connect(server)

router(app)

app.use('/app', express.static('public'))

server.listen(3000, () => {
    console.log('La aplicación esta escuchando en http://localhost:3000')
})
