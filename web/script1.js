const cadastro = document.querySelector('#formCadastro');
const tcorpo = document.querySelector('main tbody'); // Agora está correto
let listaArmazenada = JSON.parse(window.localStorage.getItem('contatos')) || [];

if (listaArmazenada.length === 0) {
    alert('Esta página armazena dados sensíveis!');
}

cadastro.addEventListener('submit', async e => {
    e.preventDefault();
    
    const novoRegistro = {
        nome: cadastro.nome.value,
        email: cadastro.email.value
    };

    listaArmazenada.push(novoRegistro);
    await preencherTabela();
    await salvar();
});

async function preencherTabela() {
    tcorpo.innerHTML = ''; // Limpa a tabela antes de adicionar novos dados
    listaArmazenada.forEach((c, i) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${c.nome}</td>
            <td>${c.email}</td>
        `;
        tcorpo.appendChild(tr);
    });
}

async function salvar() {
    window.localStorage.setItem('contatos', JSON.stringify(listaArmazenada));
}

preencherTabela(); // Exibe os dados armazenados ao carregar a página

cadastro.addEventListener('submit', async e => {
    e.preventDefault();
    const novoRegistro = {
        nome: cadastro.nome.value,
        email: cadastro.email.value
    };

    // Salva o nome do usuário no localStorage
    localStorage.setItem('nomeUsuario', novoRegistro.nome);
    
    listaArmazenada.push(novoRegistro);
    await preencherTabela();
    await salvar();
});

cadastro.addEventListener('submit', async e => {
    e.preventDefault();
    const novoRegistro = {
        nome: cadastro.nome.value,
        email: cadastro.email.value
    };

    // Recupera a lista de usuários do localStorage
    const listaUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Adiciona o novo usuário à lista
    listaUsuarios.push(novoRegistro);

    // Salva a lista de usuários no localStorage
    localStorage.setItem('usuarios', JSON.stringify(listaUsuarios));

    // Atualiza a lista de tarefas
    listaArmazenada.push(novoRegistro);
    await preencherTabela();
    await salvar();
});
