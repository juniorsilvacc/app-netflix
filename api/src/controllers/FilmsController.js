const Films = require('../models/Films');

module.exports = {
  async create(req, res){

    const {title, actors, year, director, details} = req.body;

    try {

      const createdFilms = await Films.create({
        title, 
        actors, 
        year, 
        director,
        details
      });

      return res.status(200).json({message: 'Successfully registered movie', data: createdFilms});
      
    } catch (error) {
      return res.status(400).json({message: 'It was not possible to register.'})
    }
  }
}