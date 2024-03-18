const mongoose = require('mongoose');

const notasSchema = new mongoose.Schema ({
    nombre : String,
    nota : String
})

const notas = mongoose.model('notasconnombres', notasSchema);

module.exports = notas;