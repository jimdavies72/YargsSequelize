const { Sequelize } = require("sequelize");
const { Movie } = require("../models/models");

const addMovie = async (movieObj) => {
  try {
    const movie = await Movie.create(movieObj);
    console.log(`We added ${movie.title}.`);
  } catch (error) {
    console.log(error);
  }
};

const listMovie = async () => {
  try {
    const movies = await Movie.findAll({});
    console.log(movies.every((movie) => movie instanceof Movie));
    console.log("All Movies: ", JSON.stringify(movies, null, 2));
  } catch (error) {
    console.log(error);
  }
};

const updateMovie = async (movieObj) => {
  try {
    let update = {};

    movieObj.title && (update["title"] = movieObj.title);
    movieObj.actor && (update["actor"] = movieObj.actor);
    movieObj.rating && (update["rating"] = movieObj.rating);

    await Movie.update(update, {
      where: {
        title: movieObj.search,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteMovie = async (title) => {
  try {
    await Movie.destroy({
      where: {
        title: title,
      },
    });
  } catch (error) {
    displayInfo(error.message);
  }
};

module.exports = {
  addMovie,
  listMovie,
  updateMovie,
  deleteMovie,
};
