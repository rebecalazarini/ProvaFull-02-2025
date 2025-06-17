
const formCadastroTarefa = document.getElementById('formCadastroTarefa');

function carregarUsuarios() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuarioSelect = document.getElementById('usuario');
    
    usuarios.forEach(usuario => {
        const option = document.createElement('option');
        option.value = usuario.nome;
        option.textContent = usuario.nome;
        usuarioSelect.appendChild(option);
    });
}

formCadastroTarefa.addEventListener('submit', function(event) {
    event.preventDefault();

    const descricao = document.getElementById('descricao').value;
    const setor = document.getElementById('setor').value;
    const prioridade = document.getElementById('prioridade').value;
    const status = document.getElementById('status').value;
    const usuario = document.getElementById('usuario').value;

    const tarefa = {
        descricao,
        setor,
        prioridade,
        status,
        usuario,
    };


    let tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));

    alert('Tarefa cadastrada com sucesso!');
    formCadastroTarefa.reset();
});


window.onload = carregarUsuarios;