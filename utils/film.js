const fetch = require('node-fetch');   
    
const getFilm = async (title) =>{
    
    const data = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=e8f1e353`);
    const film = await data.json();

    const filmNew = {
        titulo: film.Title,
        director: film.Director,
        descripcion: film.Plot,
        imagen: film.Poster
    }
    
    return filmNew
}


module.exports = getFilm;