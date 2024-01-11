// const router = require('express').Router();
 
 // // Example route
 // router.route('/').get((req, res) => {
 //   res.send('Hello from the backend!');
 // });
 
 // module.exports = router;
 
 const router = require('express').Router();
 const ExampleModel = require('../models/example.model');
 
 // GET request to retrieve data
 router.route('/').get(async (req, res) => {
   try {
     const data = await ExampleModel.find();
     res.json(data);
   } catch (error) {
     res.status(500).json({ error: error.message });
   }
 });
 
 // POST request to save data
 router.route('/add').post(async (req, res) => {
   const { Fname, Email , Age, Location, HLE, Phone} = req.body;
 console.log(req.body);
 console.log(Fname);
   const newExample = new ExampleModel({ Fname, Email, Age, Location, HLE, Phone});
 
   try {
     await newExample.save();
     res.json('Data saved successfully');
   } catch (error) {
     res.status(500).json({ error: error.message });
   }
 });
 
 module.exports = router;