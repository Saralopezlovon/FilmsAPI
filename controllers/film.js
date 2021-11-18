const infoFilm = require ('../utils/film')

// getFilm("Manuelita").then(data => console.log(data)) -> Consolear lo que me trae getFilm si le doy un parámetro

const filmApi = {
    
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
        await res.json(dataFilm) 
        
    },

    createFilm:(req,res)=>{

        console.log(req.body)

        res.status(200).send(`Tu pelicula ${req.body.titulo} ha sido creada`)

        //Simulamos un post con estos datos:

            // {
            //     "titulo": "Manuelita",
            //     "director": "Manuel García Ferré",
            //     "descripcion": "Animated Argentine film about a young girl turtle who gets lost on a balloon trip.",
            //     "imagen": "https://m.media-amazon.com/images/M/MV5BMTMyMTczNTQ3Ml5BMl5BanBnXkFtZTcwMzI4NjQyMQ@@._V1_SX300.jpg"
            //     }

    },
    
    updateFilm:(req,res)=>{

        console.log(req.params.title) 

        res.status(200).send(`Tu pelicula con id ${req.body.id} ha sido actualizada`)

        //Simulamos un post con estos datos:

        //{id:"0", message: "Se ha actualizado Titanic"}

    },

    deleteFilm:(req, res)=>{

        res.status(200).send(`Tu pelicula con id ${req.body.id} ha sido borrada`)

        //Simulamos un post con estos datos:

        //{id:"0", message: "Se ha actualizado Titanic"}



    }




}

module.exports = filmApi;