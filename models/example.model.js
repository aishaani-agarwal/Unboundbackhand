const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exampleSchema = new Schema({
  Fname: { type: String, required: true },
  Email: { type: String, required: true },
  Age: { type: String, required: true },
  Location: { type: String, required: true },
  HLE: { type: String, required: true },
  Phone: { type: String, required: true },

});

const ExampleModel = mongoose.model('Example', exampleSchema);

module.exports = ExampleModel;