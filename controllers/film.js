const infoFilm = require ('../utils/film')

// getFilm("Manuelita").then(data => console.log(data)) -> Consolear lo que me trae getFilm si le doy un parámetro

const film = {
    
    getSearch: (req,res)=>{
                
        res.render('home', {search:"películas"})       

    },

    getInfoSearch:(req,res)=>{

    let title = req.body.titulo  

    res.redirect(`/film/${title}`)

    },

    getFilm: async (req,res)=>{
        
        // console.log(req.params.title) ->Esto es lo que me trae los datos de la URL

        let dataFilm= await infoFilm(req.params.title)

        console.log("******ESTA ES LA PÁGINA DE PELICULA BUSCADA*********");
        await res.render('film', 
        {titulo: dataFilm.titulo,
        director: dataFilm.director,
        descripcion: dataFilm.descripcion,
        urlImagen: dataFilm.imagen
        }) 
        
    }
}

module.exports = film;