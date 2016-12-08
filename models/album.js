var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// models/book.js
var AlbumSchema = new Schema({
  artistName: String,
  name: String,
  releaseDate: String,
  genres: [ String]
});




module.exports = mongoose.model('Album', AlbumSchema);
