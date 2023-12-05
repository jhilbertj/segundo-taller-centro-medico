// Archivo de configuración para la base de datos

// Importar el módulo mysql
const mysql = require('mysql')

// Creando la conexión con mysql
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'hospital'
})

conexion.connect(function (error) {
    if (error) {
        console.log('Ocurrió un error en la conexión ${error}')
        return;
    } else {
        console.log('Conexión exitosa')
    }
})

module.exports = { conexion }