document.addEventListener('DOMContentLoaded', async () => {
    const tarefas = await fetchTarefas();

   tarefas.forEach(tarefa => {
    const tarefaElement = createTarefaCard(tarefa);

    if (tarefa.status === 'A Fazer') {
        document.getElementById('tarefasAFazer').appendChild(tarefaElement);
    } else if (tarefa.status === 'Fazendo') {
        document.getElementById('tarefasFazendo').appendChild(tarefaElement);
    } else if (tarefa.status === 'Pronto') {
        document.getElementById('tarefasPronto').appendChild(tarefaElement);
    }
});
});

async function fetchTarefas() {
    const response = await fetch('http://localhost:7000/tarefas'); // Endpoint para obter tarefas
    return await response.json();
}

function createTarefaCard(tarefa) {
    const card = document.createElement('div');
    card.classList.add('tarefa-card');
    card.innerHTML = `
        <p><strong>Descrição:</strong> ${tarefa.descricao}</p>
        <p><strong>Setor:</strong> ${tarefa.setor}</p>
        <p><strong>Prioridade:</strong> ${tarefa.prioridade}</p>
        <p><strong>Usuário:</strong> ${tarefa.usuario.nome}</p>
        <div class="actions">
            <button onclick="editarTarefa(${tarefa.id})">Editar</button>
            <button onclick="excluirTarefa(${tarefa.id})">Excluir</button>
            <select onchange="atualizarStatus(${tarefa.id}, this.value)">
                <option value="A Fazer" ${tarefa.status === 'A Fazer' ? 'selected' : ''}>A Fazer</option>
                <option value="Fazendo" ${tarefa.status === 'Fazendo' ? 'selected' : ''}>Fazendo</option>
                <option value="Pronto" ${tarefa.status === 'Pronto' ? 'selected' : ''}>Pronto</option>
            </select>
        </div>
    `;
    return card;
}

async function editarTarefa(id) {
    // Redirecionar para a página de edição de tarefa com as informações da tarefa
    window.location.href = `editarTarefa.html?id=${id}`;
}

async function excluirTarefa(id) {
    if (confirm('Tem certeza que deseja excluir essa tarefa?')) {
        await fetch(`http://localhost:7000/tarefas/${id}`, {
            method: 'DELETE'
        });
        alert('Tarefa excluída!');
        window.location.reload();
    }
}

async function atualizarStatus(id, status) {
    await fetch('http://localhost:7000/tarefas/status', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, status })
    });
    alert('Status atualizado!');
    window.location.reload();
}
