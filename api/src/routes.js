const {Router} = require('express');
const routes = Router();

const FilmsController = require('./controllers/FilmsController');
const UserController = require('./controllers/UserController');
const SigninController = require('./controllers/SigninController');

routes.post('/signup', UserController.createSignup);
routes.post('/signin', SigninController.signin);

routes.post('/films/create', FilmsController.create);

module.exports = routes;