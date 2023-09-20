const express = require('express');
const ejs = require('ejs');
const path = require('path'); // Don't forget to require the 'path' module.

const app = express();
const port = 3000;

 //Set the 'views' directory
 app.set('views', path.join(__dirname, 'view'));

 // Set the view engine to EJS
 app.set('view engine', 'ejs');

 // Define your routes here
 app.get('/', (req, res) => {
   res.render('page/index');
   });

   // Start the Express server
   app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
     });
     
