const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const database = require('./src/services/database');
const routes = require('./src/routes');

const app = express();

app.use(cors());

app.use(morgan('dev'));
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('API Running');
});