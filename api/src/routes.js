const express = require('express');
const routes = express.Router();

const Usuario = require('./controllers/usuario');
const Tarefa = require('./controllers/tarefa');
const Gerenciar = require('./controllers/gerenciar');

routes.get('/', (req, res) => {
  res.json({ titulo: 'Gerenciamento de tarefas' });
});

// Rotas para o usuário
routes.post('/u', Usuario.create);          
routes.get('/u', Usuario.read);             
routes.put('/u/:id', Usuario.update);        
routes.delete('/u/:id', Usuario.remove);    

// Rotas para a tarefa
routes.post('/t', Tarefa.create);
routes.get('/t', Tarefa.read);
routes.put('/t/:id', Tarefa.update);      
routes.delete('/t/:id', Tarefa.remove);    

// Rotas para gerenciar as tarefas
routes.post('/g', Gerenciar.create);
routes.get('/g', Gerenciar.read);
routes.put('/g/:id', Gerenciar.update);    
routes.delete('/g/:id', Gerenciar.remove); 

module.exports = routes;
