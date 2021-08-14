const mongoose = require('mongoose');

const EpisodeSchema = new mongoose.Schema({
  season_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Temporada',
  },
  title:{
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Episodio', EpisodeSchema);