const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) =>{
    try{
        const usuario = await prisma.usuario.create({
            data:req.body
        }); return res.status(201).json(usuario);
    } catch (error) {
        return res.status(400).json({ error: 'Usuario ja cadastrado.' });
    }
};

const read = async (req, res) => {
    try {
        const usuarios = await prisma.usuario.findMany();
        return res.status(200).json(usuarios);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
        const usuario = await prisma.usuario.update({
            where: { id: parseInt(req.params.id) },
            data: req.body
        });
        return res.status(200).json(usuario);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const remove = async (req, res) => {
    try {
        const usuario = await prisma.usuario.delete({
            where: { id: parseInt(req.params.id) }
        });
        return res.status(200).json(usuario);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = { create, read, update, remove };