// Importa el módulo 'mongoose' para trabajar con MongoDB
const mongoose = require('mongoose');

// Define el esquema de la colección 'notasconnombres' utilizando el objeto Schema de mongoose
const notasSchema = new mongoose.Schema({
    nombre: String, // Campo para el nombre del usuario
    nota: String    // Campo para la nota del usuario
});

// Crea el modelo 'notas' utilizando el esquema definido anteriormente
const notas = mongoose.model('notasconnombres', notasSchema);

// Exporta el modelo 'notas' para que pueda ser utilizado en otros archivos del proyecto
module.exports = notas;
