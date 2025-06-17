document.addEventListener("DOMContentLoaded", () => {
    // Recupera a lista de usuários do localStorage
    const listaUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Se houver usuários cadastrados, preenche o select com os nomes
    const selectUsuario = document.getElementById('usuario');
    if (listaUsuarios.length > 0) {
        listaUsuarios.forEach(usuario => {
            const option = document.createElement('option');
            option.value = usuario.nome; // Pode ser o ID ou o nome, depende do seu caso
            option.textContent = usuario.nome;
            selectUsuario.appendChild(option);
        });
    } else {
        // Se não houver usuários cadastrados, exibe uma mensagem
        const option = document.createElement('option');
        option.textContent = "Nenhum usuário cadastrado";
        selectUsuario.appendChild(option);
    }
});

document.getElementById('formCadastroTarefa').addEventListener('submit', function (e) {
    e.preventDefault();

    const usuarioSelecionado = document.getElementById('usuario').value; // Pega o nome do usuário selecionado
    const descricao = document.getElementById('descricao').value;
    const setor = document.getElementById('setor').value;
    const prioridade = document.getElementById('prioridade').value;
    const status = document.getElementById('status').value;

    // Aqui você pode criar a lógica para salvar a tarefa com o nome do usuário selecionado.
    console.log('Usuário:', usuarioSelecionado);
    console.log('Descrição:', descricao);
    console.log('Setor:', setor);
    console.log('Prioridade:', prioridade);
    console.log('Status:', status);

    // Depois de capturar as informações, você pode salvar a tarefa ou fazer o que for necessário.
});
