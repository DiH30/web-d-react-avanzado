const http = require('http') // Llamar al modulo nativo.
// Crear el server.
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hola mundo desde Node.js')
})

const PORT = 3000
// Ejecutar el metódo listen, corre el servidor en un puerto que establecemos.
server.listen(PORT, () => {
  console.log('Servidor ejecutandose en el port http://localhost:3000')
})
