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


//Listen

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })