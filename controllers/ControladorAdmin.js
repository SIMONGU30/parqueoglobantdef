import {ServicioAdministrador} from "../services/ServicioAdministrador.js"

export class Administrador{

    constructor(){}

    async buscarTodos(request,response){

        let admin=new ServicioAdministrador()
        try{
            response.status(200).json({
                mensaje:'exito en la consulta del administrador',
                data: await admin.buscar()
            })
        }catch(error){
            response.status(400).json({
                mensaje:'fallamos en la consulta'+error,
                data: null
            })
        } 
    }

    async buscarPorId(request,response){

        let admin=new ServicioAdministrador()
        try{
            let id=request.params.id
            response.status(200).json({
                mensaje:'exito buscando el administrador',
                data: await admin.buscarPorId(id)
            })
        }catch(error){
            response.status(400).json({
                mensaje:'fallo buscando el administrador'+error,
                data: null
            })
        }
    }

    async editar(request,response){

        let admin=new ServicioAdministrador()
        try{
            let id=request.params.id
            let datos=request.body
            await admin.editar(id,datos)
            response.status(200).json({
                mensaje:'exito editando el admin',
                data: null
            })

        }catch(error){
            response.status(400).json({
                mensaje:'fallo editando el admin'+error,
                data: null
            })

        }

    }

    async insertar(request,response){
        let admin=new ServicioAdministrador()
        try{

            let datos=request.body
            await admin.ingresar(datos)
            response.status(200).json({
                mensaje:'exito registrando el administrador',
                data: null
            })

        }catch(error){

            response.status(200).json({
                mensaje:'fallo registrando el admin'+error,
                data: null
            })

        }
    }
}