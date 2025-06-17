document.addEventListener("DOMContentLoaded", () => {
    // Recuperar a lista de usuários do localStorage
    const listaUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const tarefa = {
        usuario: listaUsuarios[0], // Aqui, estou pegando o primeiro usuário cadastrado como exemplo
        descricao: "Fazer relatórios financeiros",
        setor: "Financeiro",
        prioridade: "Alta",
        status: "A Fazer"
    };

    // Preencher as informações da tarefa na página
    document.getElementById("usuario").textContent = tarefa.usuario.nome;
    document.getElementById("descricao").textContent = tarefa.descricao;
    document.getElementById("setor").textContent = tarefa.setor;
    document.getElementById("prioridade").textContent = tarefa.prioridade;
    document.getElementById("status").textContent = tarefa.status;
});
