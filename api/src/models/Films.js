const mongoose = require('mongoose');

const FilmsSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true,
  },
  actors:[{
    type: String,
    required: true,
  }],
  year:{
    type: Number,
    required: true,
  },
  director:{
    type: String,
    required: true,
  },
  details:{
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Filme', FilmsSchema);