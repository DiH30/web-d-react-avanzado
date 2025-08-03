// 1. Importar express CommonJS
/* const express = require('express')
require('dotenv').config() */

// Importar express y dotenv con ESModules
import express from 'express'
import dotenv from 'dotenv'
import fs from 'fs'

dotenv.config()
// 2. Crear la aplicación de express
const app = express()
const PORT = process.env.PORT

// Función que lee la info de db.json
// Lee el archivo y lo retorna
const readData = () => {
  try {
    const data = fs.readFileSync('./src/db.json')
    return JSON.parse(data)
  } catch (error) {
    console.error(error)
  }
}

// Función que escribe dentro de db.json
const writeData = (data) => {
  try {
    fs.writeFileSync('./src/db.json', JSON.stringify(data)) // Para que se recozca como un objeto.
  } catch (error) {
    console.error(error)
  }
  // return JSON.stringify(data)
}

app.get('/', (req, res) => {
  res.send('Hola mundo')
})

app.get('/peliculas', (req, res) => {
  const data = readData()
  res.json(data) // Para que lo interprete y lo muestre como el formato original, json.
})

app.get('/peliculas/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const result = readData().accion.find(pelicula => pelicula.id === id)
  res.json(result)
})

// Para una correcta interpretación.
app.use(express.json()) // La forma en la que se va a recibir la información y en la que va a comunicar, tiene que interpretarse en formato json.

app.post('/peliculas', (req, res) => {
  const data = readData()
  const body = req.body
  const newMovie = {
    id: data.accion.length + 1,
    ...body
  }
  data.accion.push(newMovie)
  writeData(data)
  res.json(newMovie) // Respuesta al usuario final, el nuevo objeto que se ha añadido.
})

app.listen(PORT, () => {
  console.log('Servidor corriendo en puerto', PORT)
})
