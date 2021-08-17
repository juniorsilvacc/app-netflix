const database = require('../services/database');
const Films = require('../models/Films');
const Season = require('../models/Season');
const Episode = require('../models/Episode');

const addFilms = async () => {
  try {

    const series = await Films.find({type: 'serie'}).select('_id');
    for(let serie of series){
      console.log(`FILME: ${serie}---`);
      const numSeason = Math.floor(Math.random() * 5) + 1;
      for(let i = 1; i <= numSeason; i++){
        console.log(`Insert season ${i} in ${numSeason}`);
        const season = await new Season({
          film_id: serie,
          title: `Temporada ${i}`
        }).save();

        const numEp = Math.floor(Math.random() * 5) + 1;
        for (let b = 1; b <= numEp; b++) {
          console.log(`Insert epsisode ${b} in ${numEp}`);
          await new Episode({
            season: season._id,
            title: `Episódeos ${b}`,
            number: b,
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
            cover: 'https://picsum.photos/300/200'
          }).save();
        }
      }
    }
    console.log('Finish Script');
  } catch (error) {
    console.log(error);
  }
}

addFilms();