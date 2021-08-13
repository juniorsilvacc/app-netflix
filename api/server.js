require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./src/routes');

const app = express();

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) => {
  console.log("Erro: ", error.message);
});

app.use(cors());

app.use(morgan('dev'));
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('API Running');
});