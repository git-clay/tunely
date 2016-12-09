var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// models/book.js
var AlbumSchema = new Schema({
  name: String,
  artistName: String,
  releaseDate: String,
  genres: [ String]
});




module.exports = mongoose.model('Album', AlbumSchema);
