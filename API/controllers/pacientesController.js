
const Paciente = require('../models/Paciente')

//Cundo se crea un nuevo cliente 
exports.nuevoCliente = async (req, res, next) =>{
    const paciente  = new Paciente(req.body)
    try{
        await paciente.save();
        res.json({
            mensaje : "El clinte se agrego correctamente"
        });
    }catch(e){
        console.log(e);
        next();
    }
   
}

exports.obtenerPacientes = async (req, res, next) =>{
    try{
        const pacientes = await Paciente.find({});
        res.json(pacientes)
    }
    catch(e){
        console.log(e)
        next();
    }
}
//Buscar usuario por id
exports.obtenerPacientesId = async (req, res, next) => {
    try{
        const paciente = await Paciente.findById(req.params.id)
        res.json(paciente);
    }catch(e){
        console.log(e);
        next();
    }
}

//Actualizar registros 
exports.actualizarPaciente =  async (req, res, next) => {
    try{
        const paciente = await Paciente.findOneAndUpdate({ _id :req.params.id}, req.body, {
            new : true
        })
        res.json(paciente)
    }catch(e){
        console.log(e);
        next();
    }
}

//Eliminar un paciente por id 

exports.eliminarPaciente = async (req, res, next) => {
    try{
        await Paciente.findOneAndDelete({_id : req.params.id})
        res.json({mensaje : "El paciente fue eliminado correctamente"})
    }catch(e){
        console.log(e);
        next();
    }
}