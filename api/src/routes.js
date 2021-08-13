const {Router} = require('express');
const routes = Router();

const FilmsController = require('./controllers/FilmsController');
const UserController = require('./controllers/UserController');

routes.post('/signup', UserController.createSignup);

routes.post('/films/create', FilmsController.create);

module.exports = routes;