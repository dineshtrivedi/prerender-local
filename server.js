'use strict';

var express = require('express');

var app = module.exports = express();

app.use(require('prerender-node').set('prerenderToken', 'YOUR-TOKEN-HERE')); 

app.use(express.static("public"));
app.use(express.static("bower_components"));
  
app.get('*', function(req, res){ 
  res.sendfile('./public/index.html'); 
});

app.listen(9001); 
console.log("Go Prerender Go!");