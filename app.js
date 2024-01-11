const express = require('express');
const cors = require ('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080; 
const url = 'mongodb://localhost/Unbound'

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://aishaani:Icecream06@cluster0.valvfed.mongodb.net/?retryWrites=true&w=majority')

.then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


const connection = mongoose.connection;

connection.once('open',() => {
    console.log('MongoDB database connection established successfully');
});

const exampleRouter = require('./routes/example');

app.use('/api/example', exampleRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // What is the problem here 
});