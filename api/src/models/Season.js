const mongoose = require('mongoose');

const SeasonSchema = new mongoose.Schema({
  film_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Filme',
  },
  title:{
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Temporada', SeasonSchema);