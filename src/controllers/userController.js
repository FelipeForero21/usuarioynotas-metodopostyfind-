// Se importa el modelo de usuario desde '../models/userModel'
const notas = require('../models/userModel');

// Se define un objeto userController que contiene varios métodos para manejar las solicitudes del usuario
const userController = {
    // Método para crear un nuevo usuario
    creacionDeUsuario: async (req, res) => {
        try {
            // Se crea un nuevo documento de usuario utilizando los datos del cuerpo de la solicitud
            const nuevoUsuario = new notas({
                nombre: req.body.nombre,
                nota: req.body.nota
            });
            // Se guarda el nuevo usuario en la base de datos
            await nuevoUsuario.save();
            // Se responde con un mensaje indicando que el usuario se ha creado correctamente
            res.status(201).json({
                message: 'Usuario creado correctamente'
            });
        } catch (error) {
            // Si ocurre un error, se responde con un mensaje indicando que hubo un error al crear el usuario
            res.status(500).json({
                message: 'Error al crear usuario'
            });
        }
    },

    // Método para obtener todas las notas de la base de datos
    obtenerTodasLasNotas: async (req, res) => {
        try {
            // Se obtienen todas las notas utilizando el método find del modelo notas
            const todasLasNotas = await notas.find();
            // Se responde con un JSON que contiene todas las notas encontradas
            res.json(todasLasNotas);
        } catch (error) {
            // Si ocurre un error, se responde con un mensaje indicando que hubo un error en el servidor
            console.log(error);
            res.status(400).json({ message: 'Error en el servidor' });
        }
    },

    // Método para obtener un usuario específico según el nombre proporcionado en los parámetros de la solicitud
    obtenerDeterminadoUsuario: async (req, res) => {
        try {
            // Se obtiene el nombre del usuario desde los parámetros de la solicitud
            const { nombres1 } = req.params;
            // Se busca un usuario cuyo nombre coincida (sin distinguir mayúsculas y minúsculas) con el nombre proporcionado
            const nombres = await notas.find({ nombre: { $regex: new RegExp(nombres1, "i") } });
            // Se responde con un JSON que contiene los usuarios encontrados
            res.json(nombres);
        } catch (error) {
            // Si ocurre un error, se responde con un mensaje indicando que hubo un error en el servidor
            console.log(error);
            res.status(400).json({ message: 'Error en el servidor' });
        }
    },
};

// Se exporta el objeto userController para que pueda ser utilizado en otros archivos del proyecto
module.exports = userController;
