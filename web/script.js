// // Função para preencher o nome do usuário
// async function carregarUsuario() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const usuarioId = urlParams.get('usuarioId'); // Pega o ID do usuário da URL

//     if (!usuarioId) {
//         alert('Usuário não encontrado!');
//         return;
//     }

//     try {
//         const response = await fetch(`http://localhost:7000/u/${usuarioId}`); // Rota para pegar o usuário
//         const usuario = await response.json();

//         if (response.ok) {
//             // Preenche o campo nome
//             document.getElementById('nome').value = usuario.nome;
//         } else {
//             alert('Erro ao carregar usuário');
//         }
//     } catch (error) {
//         console.error('Erro ao carregar o usuário:', error);
//         alert('Erro ao carregar o usuário');
//     }
// }

// // Função para cadastrar a tarefa
// async function cadastrarTarefa(event) {
//     event.preventDefault(); // Impede o envio do formulário

//     const nome = document.getElementById('nome').value;
//     const descricao = document.getElementById('descricao').value;
//     const setor = document.getElementById('setor').value;
//     const prioridade = document.getElementById('prioridade').value;
//     const status = document.getElementById('status').value;

//     // Pega o ID do usuário da URL
//     const usuarioId = new URLSearchParams(window.location.search).get('usuarioId');

//     if (!usuarioId) {
//         alert('Usuário não encontrado!');
//         return;
//     }

//     if (!descricao || !setor || !prioridade || !status) {
//         alert('Por favor, preencha todos os campos.');
//         return;
//     }

//     const dataCadastro = new Date().toISOString();

//     try {
//         const response = await fetch('http://localhost:7000/t', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 descricao,
//                 setor,
//                 prioridade,
//                 status,
//                 usuarioId,
//                 dataCadastro
//             })
//         });

//         if (response.ok) {
//             alert('Cadastro concluído com sucesso!');
//             window.location.href = 'CadastroTarefa.html'; // Redireciona para a página de tarefas
//         } else {
//             const erro = await response.text();
//             alert(`Erro ao cadastrar: ${erro}`);
//         }
//     } catch (error) {
//         console.error('Erro ao cadastrar tarefa:', error);
//         alert('Erro ao cadastrar a tarefa.');
//     }
// }

// // Verifica se o DOM está completamente carregado
// document.addEventListener("DOMContentLoaded", function() {
//     carregarUsuario(); // Carrega as informações do usuário

//     const form = document.getElementById('formCadastroTarefa');
    
//     if (form) {
//         form.addEventListener('submit', cadastrarTarefa);
//     } else {
//         console.error("Formulário não encontrado!");
//     }
// });
