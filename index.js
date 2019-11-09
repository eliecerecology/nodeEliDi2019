'use strict';
const express = require('express');
const app = express();

//app.get('/', function (req, res) {
//    res.send('<h1>Welcome to my first app :-)</h1>')
//});

app.get('/demo', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
});

app.get('/', (req, res) =>{
  res.sendFile(__dirname + '/chart.html')
});

app.listen(3000,() =>{
    console.log('server listening port 3000')
});