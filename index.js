'use strict';
const express = require('express');
const connection = require('./model/db.js');

const app = express(); // this is the name of the application
//const mysql = require('mysql2');

//app.get('/', function (req, res) {
//    res.send('<h1>Welcome to my first app :-)</h1>')
//});

app.use(express.static('public'));

//create an async promise
app.get('/animal', async (req, res) => {
  try {
  const [results, field] = await connection.promise().query(
    'SELECT * FROM animal');
      console.log(results); //results contain rows r
      console.log(fields);
      res.json(results);
    } catch (error) {
      console.log(error);
      res.send('db error:(');
    }
});


// the basic ready route
app.get('/', (req, res) =>{
  res.sendFile(__dirname + '/chart.html')
});

app.get('/public/', (req, res) =>{
  res.sendFile('Hello my node server')
 });

 // 18 NOv
 app.get('/animal', (req, res) =>{
   console.log(req.query);

  //res.sendFile('query params? ${req.query}')
  try {
    const[results] = await connection.query(
      'SELECT * FROM animal WHERE name LIKE ?',
      [req.query.name]);
      res.json(results);
    
  } catch (e) {
    res.send('db error ${e}')
  }

});





//THIS is one route
app.get('/toindex', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
});



app.listen(3000,() =>{
    console.log('server listening port 3000')
});