const notas = require('../models/userModel');

const userController = {
    creacionDeUsuario: async (req,res) => {
        try {
            const nuevoUsuario = new notas({
                nombre: req.body.nombre,
                nota: req.body.nota
            });
            await nuevoUsuario.save();
            res.status(201).json({
                message: 'Usuario creado correctamente'
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error al crear usuario'
            });
        }
    },
    obtenerTodasLasNotas: async (req,res)=>{
        try{
            const  todasLasNotas = await notas.find();
            res.json(todasLasNotas);
        } catch(error) {
            console.log(error);
            res.status(400).json({message: 'Error en el servidor'});
        }
    },
    obtenerDeterminadoUsuario: async (req, res)=>{
        try{
            const {nombres1} = req.params;
            const nombres = await notas.find({ nombre: { $regex: new RegExp(nombres1, "i") } });
            res.json(nombres);
        } catch(error) {
            console.log(error);
            res.status(400).json({message: 'Error en el servidor'});
        }
    },
};

module.exports = userController;
