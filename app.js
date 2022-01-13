require("dotenv").config();
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const { Movie } = require("./models/models");
const connection = require("./db/connection");
const { addMovie, listMovie } = require("./utils/index");

const app = async (commandLineInput) => {
  try {
    await connection.authenticate();
  } catch (error) {
    console.log(error);
  }

  try {
    if (commandLineInput.add) {
      await Movie.sync({ alter: true });
      await addMovie({
        title: commandLineInput.title,
        actor: commandLineInput.actor,
        rating: commandLineInput.rating,
      });
    } else if (commandLineInput.list) {
      await listMovie();
    }
    connection.close();
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

app(argv);
