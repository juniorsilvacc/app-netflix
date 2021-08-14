const Films = require('../models/Films');

module.exports = {
  async createFilms(req, res){

    const {
      title, 
      year, 
      description, 
      actors, 
      type, 
      logo, 
      thumb, 
      gender, 
      moments
    } = req.body;

    try {

      const createdFilms = await Films.create({
        title, 
        year,
        description,
        actors, 
        type,
        cover,
        logo,
        thumb,
        gender,
        moments
      });

      return res.status(200).json({message: 'Successfully registered movie', data: createdFilms});
      
    } catch (error) {
      return res.status(400).json({message: 'It was not possible to register.'});
    }
  },

  async listFilms(req, res) {

    try {
      
      const getFilms = await Films.find({});

      return res.status(200).json({message: 'Successfully listed movie', getFilms});
      
    } catch (error) {
      return res.status(400).json({message: 'It was not possible to listed.'});
    }

  },

  async itemFilms(req, res){

    const {id, other = null} = req.params;

    try {


      const films = await Films.findById(id);
      if(!films){
        return res.status(400).json({message: 'Films not exists.'});
      } 

      return res.status(200).json({message: 'Films listed by id successfully.', films})
      
    } catch (error) {
      return res.status(400).json({message: 'It was not possible to listedItem.'});
    }

  },

  async updateFilms(req, res){

    const {
      title, 
      year, 
      description, 
      actors, 
      type, 
      logo, 
      thumb, 
      gender, 
      moments
    } = req.body;
    const {id} = req.params;

    try {

      const films = await Films.findById(id);
      if(!films){ 
        return res.status(400).json({message: 'Films not exists.'});
      } 

      const updatedfilms = await Films.findByIdAndUpdate(id, {
        title, 
        year, 
        description, 
        actors, 
        type, 
        logo, 
        thumb, 
        gender, 
        moments
      }, {new: true});

      return res.status(200).json({message: 'Films updated by id successfully.', updatedfilms});
      
    } catch (error) {
      return res.status(400).json({message: 'It was not possible to updated.'});
    }

  },

  async deleteFilms(req, res) {

    const {id} = req.params;

    try {

      const films = await Films.findById(id);
      if(!films){ 
        return res.status(400).json({message: 'Films not exists.'});
      } 

      const deleteFilms = await Films.findByIdAndDelete(films);

      return res.status(200).json({message: 'Films deleted by id successfully.', deleteFilms});
      
    } catch (error) {
      return res.status(400).json({message: 'It was not possible to delete.'});
    }

  }

}