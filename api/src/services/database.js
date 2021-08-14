const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/netflix", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) => {
  console.log("Erro: ", error.message);
});