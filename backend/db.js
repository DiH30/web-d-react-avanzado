import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import { join } from 'path'
import { fileURLToPath } from 'url'

// Rutas
const __filename = fileURLToPath(import.meta.url)
const __dirname = join(__filename, '..') // dirname: nos permite obtener el directorio padre.
const file = join(__dirname, 'db.json') // file: archivo que se va autilizar como base de datos, db.json: archivo que va a alojar toda la información.
const adapter = new JSONFile(file) // adapter: hace uso del JSONFile para leer y escribir datos.
const defaulData = { messages: [] } // defaulData: Data por defecto.

const db = new Low(adapter, defaulData)

await db.read()

await db.write()

/* console.log('Ruta:', __filename)
console.log('Ruta:', import.meta.url) */
export default db
