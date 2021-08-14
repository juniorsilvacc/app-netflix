const mongoose = require('mongoose');

const FilmsSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true,
  },
  year:{
    type: Number,
  },
  description:{
    type: String,
    required: true,
  },
  actors:[{
    type: String,
    required: true,
  }],
  type:{
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  thumb: {
    type: String,
    required: true,
  },
  gender:[{
    type: String,
    required: true,
  }],
  moments:[{
    type: String,
    required: true,
  }]
});

module.exports = mongoose.model('Filme', FilmsSchema);