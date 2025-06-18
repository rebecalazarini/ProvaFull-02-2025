const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function get(req, res) {
    try {
        const tarefas = await prisma.tarefa.findMany({
            where: {
                status: {
                    in: ['AFAZER', 'FAZENDO', 'PRONTO']  // Certo conforme enum Status
                }
            }
        });
        res.json(tarefas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao recuperar tarefas.' });
    }
}

async function update(req, res) {
    const { id } = req.params;
    const { descricao, setor, prioridade, status, usuarioId } = req.body;
    try {
        const tarefaAtualizada = await prisma.tarefa.update({
            where: { id: parseInt(id) },
            data: { 
                desc: descricao,  // atualiza campo desc com descricao enviado
                setor, 
                prioridade, 
                status, 
                usuarioId 
            }
        });
        res.json(tarefaAtualizada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao atualizar tarefa.' });
    }
}

async function remove(req, res) {
    const { id } = req.params;
    try {
        await prisma.tarefa.delete({
            where: { id: parseInt(id) }
        });
        res.json({ message: 'Tarefa excluída com sucesso.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao excluir tarefa.' });
    }
}

async function atualizarStatus(req, res) {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const tarefaAtualizada = await prisma.tarefa.update({
            where: { id: parseInt(id) },
            data: { status }
        });
        res.json(tarefaAtualizada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao atualizar status.' });
    }
}

module.exports = {
    get,
    update,
    remove,
    atualizarStatus
};
