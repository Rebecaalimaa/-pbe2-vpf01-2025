const express = require('express');
const routes = express.Router();

const Cliente = require('./controllers/cliente');
const Pizza = require('./controllers/pizza');
const Pedido = require('./controllers/pedido');
const Item = require('./controllers/item');

routes.get('/', (req, res) => {
  return res.json({ titulo: 'Pizzaria Aberta' });
});

routes.post('/clientes', Cliente.create);
routes.get('/clientes', Cliente.read);
routes.get('/clientes/:id', Cliente.readOne);
routes.put('/clientes/:id', Cliente.update);
routes.delete('/clientes/:id', Cliente.remove);

routes.post('/pizzas', Pizza.create);
routes.get('/pizzas', Pizza.read);
routes.get('/pizzas/:id', Pizza.readOne);
routes.put('/pizzas/:id', Pizza.update);
routes.delete('/pizzas/:id', Pizza.remove);

routes.post('/pedidos', Pedido.create);
routes.get('/pedidos', Pedido.read);
routes.get('/pedidos/:id', Pedido.readOne);
routes.put('/pedidos/:id', Pedido.update);
routes.delete('/pedidos/:id', Pedido.remove);

routes.post('/itens', Item.create);
routes.get('/itens', Item.read);
routes.get('/itens/:id', Item.readOne);
routes.put('/itens/:id', Item.update);
routes.delete('/itens/:id', Item.remove);

module.exports = routes;