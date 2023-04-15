import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getEspecies = async (req, res) =>{
    try {
        const especies = await prisma.especie.findMany({
            include: {
                clasificacion_animales: true
            }
        });
        return res.json({success: true, data: especies});
    } catch (error) {
        return res.json(error)
      }
    
    
};

const getEspeciesById = async (req, res) =>{
    const id = parseInt(req.params.id);
    try {
        const especies = await prisma.especie.findUnique({
            where: {
                id_especie: id
            },
            include: {
                clasificacion_animales: true
            }
        });
        return res.json({success: true, data: especies});
    } catch (error) {
        
    }

};

const insertEspecie = async(req, res) =>{
    const {data} = req.body;
    try {
        const especies = await prisma.especie.createMany({
            data: data,
            skipDuplicates: true
        });
        return res.json({success: true, data: especies});
    } catch (error) {
        console.log("Error en el insert")
    }

}

export const methods = {
    getEspecies,
    getEspeciesById,
    insertEspecie
};