const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://db_user_platzi:yCz8z7F9GS8DG9gQ@cluster0.oaij7.mongodb.net/telegram?retryWrites=true&w=majority',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    filesRoutes: process.env.FILES_ROUTE || 'files'
}

module.exports = config