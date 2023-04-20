import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const getClasificacion = async (req, res) =>{
    try {
        const clasificacion_animales = await prisma.clasificacionanimales.findMany({});
        return res.json({success: true, data: clasificacion_animales});
    } catch (e) {
        console.log(e);
        return res.status(500).json({success: false, data: "Oh no... algo salió mal"});
    }
};

const getClasificacionById = async (req, res) =>{
    const id = req.params.id;
    try {
        const clasificacion_animales = await prisma.clasificacionanimales.findFirst({
            where: {
                id: id
            }
        });
        
        if(clasificacion_animales == null){
            return res.status(400).json({success: false, data: "Registro no encontrado" });
        }

        return res.json({success: true, data: clasificacion_animales});
    } catch (e) {
        console.log(e)
        return res.status(500).json({success: false, data: "Oh no... algo salió mal"});
    }

};

export const methods = {
    getClasificacion,
    getClasificacionById
};