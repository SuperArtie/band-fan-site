'use strict';

var express = require('express');
var app = express();//allows node to talk to a browser
var morgan = require('morgan');

app.set('views', __dirname + '/views');//looks inside views folder
app.set('view engine', 'ejs');

app.use(morgan('dev'));//outputs log on the server

app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res){
  res.render('index');//finds 'index' in the views folder
});

app.get('/about', function(req, res){
  res.render('about');
});

app.get('/disc', function(req, res){
  res.render('disc');
});

app.get('/tour', function(req, res){
  res.render('tour');
});

app.listen(3000, function(){
  console.log('express.js is listening...');//assigns a port
});
