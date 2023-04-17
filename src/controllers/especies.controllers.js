import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const getEspecies = async (req, res) =>{
    try {
        const especies = await prisma.especie.findMany({
            where: {
                activo: true
            },
            include: {
                clasificacion_animales: true
            }
        });
        return res.json({success: true, data: especies});
    } catch (e) {
        console.log(e);
        return res.status(500).json({success: false, data: "Oh no... algo salió mal"});
    }
};

const getEspeciesById = async (req, res) =>{
    const id = req.params.id;
    try {
        const especies = await prisma.especie.findUnique({
            where: {
                id_especie: id,
                activo: true
            },
            include: {
                clasificacion_animales: true
            }
        });
        
        if(especies == null){
            return res.status(400).json({success: false, data: "Registro no encontrado" });
        }

        return res.json({success: true, data: especies});
    } catch (e) {
        return res.status(500).json({success: false, data: "Oh no... algo salió mal"});
    }

};

const insertEspecie = async(req, res) =>{
    const {data} = req.body;
    const length_data = Object.keys(data).length;
    try {
        const especies = await prisma.especie.createMany({
            data: data,
            skipDuplicates: true
        });

        if((especies.count <= 0)){
            return res.status(400).json({success: false, data: "No se insertó ningún registro"});
        };

        if(length_data != especies.count){
            return res.status(206).json({success: true, data: `Se registró solo ${especies.count} de ${length_data} registros enviados`});
        }

        return res.status(201).json({success: true, data: especies});

    } catch (e) {
        return res.status(500).json({success: false, data: "Oh no... algo salió mal"});
    }

}

export const methods = {
    getEspecies,
    getEspeciesById,
    insertEspecie
};