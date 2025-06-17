const express = require('express');
const routes = express.Router();
const Usuario = require('./controllers/usuario');
const Tarefa = require('./controllers/tarefa');
const Gerenciador = require('./controllers/gerenciadorTarefas');
// Rota inicial
routes.get('/', (req, res) => {
  res.json({ titulo: 'Gerenciamento de tarefas' });
});
// Rotas de Usuário
routes.post('/u', Usuario.create);          
routes.get('/u/:id', Usuario.read);             
routes.put('/u/:id', Usuario.update);        
routes.delete('/u/:id', Usuario.remove);    

routes.post('/t', Tarefa.create);
routes.get('/t', Tarefa.read);   

routes.get('/tarefas', Gerenciador.get);             
routes.put('/tarefas/:id', Gerenciador.update);        
routes.delete('/tarefas/:id', Gerenciador.remove);
routes.put('/tarefas/status/:id', Gerenciador.atualizarStatus); 
module.exports = routes;