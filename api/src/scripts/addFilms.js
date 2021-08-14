const database = require('../services/database');
const Films = require('../models/Films');
const filmsJSON = require('../data/films.json');


const addFilms = async () => {
  try {

    for(let film of filmsJSON){
      console.log('Insert films')
      await new Films(film).save();
    }
    console.log('Finish Script')
  } catch (error) {
    console.log(error);
  }
}

addFilms();