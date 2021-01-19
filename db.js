const db = require('mongoose')

db.Promise = global.Promise

// mongodb+srv://db_user_platzi:yCz8z7F9GS8DG9gQ@cluster0.oaij7.mongodb.net/telegram?retryWrites=true&w=majority

async function connect(url) {
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log('[db] Conectada con éxito')
}

module.exports = connect