const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    const { desc, setor, prioridade, status, usuarioId, dataCadastro } = req.body;

    try {
        const tarefa = await prisma.tarefa.create({
            data: {
                desc,
                setor,
                prioridade,
                status,
                usuarioId,
                dataCadastro: new Date(dataCadastro)
            }
        });

        return res.status(201).json(tarefa);
    } catch (error) {
        console.error('Erro ao cadastrar tarefa:', error);
        return res.status(400).json({ error: 'Erro ao cadastrar tarefa.' });
    }
};

const read = async (req, res) => {
    try {
        const usuario = await prisma.usuario.findUnique({
            where: { id: parseInt(req.params.id) }
        });

        if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }

        return res.status(200).json(usuario);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = { create, read };

