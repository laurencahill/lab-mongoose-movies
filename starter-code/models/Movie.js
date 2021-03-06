const mongoose   = require("mongoose");
const Schema     = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  imgName: String,
  imgPath: String,
});

const Movie = mongoose.model("movies", movieSchema);

module.exports = Movie;