const express = require('express');
const film = require('./controllers/film')
const app = express();
const port = 3000;

app.use(express.json()) // Para habilitar envio de JSON al servidor
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'))

//RUTAS

// http://localhost:3000

app.get('/', film.getSearch);

// http://localhost:3000/film/:title

app.get('/film/:title', film.getFilm);

app.post('/', film.getInfoSearch)

//http://localhost:3000/film/create

app.post('/film/create', film.createFilm)

//http://localhost:3000/api/film/update

app.put('/film/update', film.updateFilm)

//http://localhost:3000/api/film/delete

app.delete('/film/delete', film.deleteFilm)


//Listen

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })