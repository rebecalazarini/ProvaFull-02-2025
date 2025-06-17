document.addEventListener("DOMContentLoaded", () => {
    // Recupera a lista de usuários do localStorage
    const listaUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Preenche o select de usuário
    const selectUsuario = document.getElementById('usuario');
    if (listaUsuarios.length > 0) {
        listaUsuarios.forEach(usuario => {
            const option = document.createElement('option');
            option.value = usuario.nome; // Pode ser o ID ou o nome, depende do seu caso
            option.textContent = usuario.nome;
            selectUsuario.appendChild(option);
        });
    } else {
        const option = document.createElement('option');
        option.textContent = "Nenhum usuário cadastrado";
        selectUsuario.appendChild(option);
    }

    // Função para carregar as tarefas
    const listaTarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    exibirTarefas(listaTarefas);
});

// Função para exibir as tarefas nas respectivas colunas
function exibirTarefas(tarefas) {
    // Separa as tarefas em 3 categorias
    const tarefasAFazer = document.getElementById('tarefasAFazer');
    const tarefasFazendo = document.getElementById('tarefasFazendo');
    const tarefasPronto = document.getElementById('tarefasPronto');
    
    tarefas.forEach(tarefa => {
        const tarefaElement = createTarefaCard(tarefa);
        // Coloca as tarefas nas respectivas colunas
        if (tarefa.status === 'A Fazer') {
            tarefasAFazer.appendChild(tarefaElement);
        } else if (tarefa.status === 'Fazendo') {
            tarefasFazendo.appendChild(tarefaElement);
        } else if (tarefa.status === 'Pronto') {
            tarefasPronto.appendChild(tarefaElement);
        }
    });
}

// Função para criar o card de uma tarefa
function createTarefaCard(tarefa) {
    const card = document.createElement('div');
    card.classList.add('tarefa-card');
    card.innerHTML = `
        <p><strong>Descrição:</strong> ${tarefa.descricao}</p>
        <p><strong>Setor:</strong> ${tarefa.setor}</p>
        <p><strong>Prioridade:</strong> ${tarefa.prioridade}</p>
        <p><strong>Usuário:</strong> ${tarefa.usuario}</p>
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

// Função para editar a tarefa
function editarTarefa(id) {
    window.location.href = `editarTarefa.html?id=${id}`;
}

// Função para excluir uma tarefa
function excluirTarefa(id) {
    if (confirm('Tem certeza que deseja excluir essa tarefa?')) {
        // Remove a tarefa do localStorage
        const listaTarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
        const tarefasRestantes = listaTarefas.filter(tarefa => tarefa.id !== id);
        localStorage.setItem('tarefas', JSON.stringify(tarefasRestantes));
        alert('Tarefa excluída!');
        window.location.reload();
    }
}

// Função para atualizar o status da tarefa
function atualizarStatus(id, status) {
    const listaTarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const tarefaIndex = listaTarefas.findIndex(tarefa => tarefa.id === id);
    
    if (tarefaIndex !== -1) {
        listaTarefas[tarefaIndex].status = status;
        localStorage.setItem('tarefas', JSON.stringify(listaTarefas));
        alert('Status atualizado!');
        window.location.reload();
    }
}

// Quando o formulário de cadastro de tarefa for enviado
document.getElementById('formCadastroTarefa').addEventListener('submit', function (e) {
    e.preventDefault();

    const usuarioSelecionado = document.getElementById('usuario').value;
    const descricao = document.getElementById('descricao').value;
    const setor = document.getElementById('setor').value;
    const prioridade = document.getElementById('prioridade').value;
    const status = document.getElementById('status').value;

    // Cria um novo objeto tarefa
    const novaTarefa = {
        id: Date.now(), // Usando timestamp como ID único
        usuario: usuarioSelecionado,
        descricao,
        setor,
        prioridade,
        status
    };

    // Salva a tarefa no localStorage
    const listaTarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    listaTarefas.push(novaTarefa);
    localStorage.setItem('tarefas', JSON.stringify(listaTarefas));

    // Redireciona para a tela de gerenciamento de tarefas
    window.location.href = 'gerenciarTarefa.html';
});
