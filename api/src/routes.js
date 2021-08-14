const {Router} = require('express');
const routes = Router();

const FilmsController = require('./controllers/FilmsController');
const UserController = require('./controllers/UserController');
const SigninController = require('./controllers/SigninController');

routes.post('/signup', UserController.createSignup);
routes.post('/signin', SigninController.signin);

routes.post('/films/create', FilmsController.createFilms);
routes.get('/films/list', FilmsController.listFilms);
routes.get('/films/:id', FilmsController.itemFilms);
routes.patch('/films/:id', FilmsController.updateFilms);
routes.delete('/films/:id', FilmsController.deleteFilms);

module.exports = routes;