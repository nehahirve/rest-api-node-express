//SHIPPED DEPENDENCIES
const http = require('http')
// LOCAL DEPENDENCIES
const app = require('./app')

const server = http.createServer(app)

server.listen(process.env.PORT || 8080)
