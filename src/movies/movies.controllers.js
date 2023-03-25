const moviesDB = [
    {
      id: 1,
      title: "The TrumanShow",
      description: 'Truman Burbank, un feliz agente de seguros, cree llevar una vida normal, pero no tiene idea de que las cámaras lo graban las 24 horas y que todo lo que hace se ve en televisión.', 
      year: 1998,
      director: 'Peter Weir'
    },
  
    {
        id: 2,
        title: "Forrest Gump",
        description: 'Forrest Gump, un joven sureño, tenaz e inocente, es protagonista de acontecimientos cruciales en la historia de los Estados Unidos.', 
        year: 1994,
        director: 'Robert Zemeckis'
    },
  ];
  
  let movieId = 1;
  
  const findAllMovies = async () => {
    return moviesDB;
  };
  
  const findMovieById = async (id) => {
    const movie = moviesDB.find((movieitem) => movieitem.id === id);
    return movie;
  };
  
  const createMovie = async (movieObj) => {
    const newMovie = {
      id: movieId++,
      title: movieObj.title || "Untitled",
      description: movieObj.description || "lorem",
      year: movieObj.year || null,
      director: movieObj.director || "Anonymous",
    };
    moviesDB.push(newMovie);
    return newMovie;
  };
  
  module.exports = {
    findAllMovies,
    findMovieById,
    createMovie,
  };
  