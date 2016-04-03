'use strict';

var express = require('express');

var app = module.exports = express();

app.use(express.static("public"));

if(process.env.NODE_ENV === 'dev'){
	app.use(express.static("bower_components"));
}

// app.use(require('prerender-node').set('prerenderToken', 'YOUR-TOKEN-HERE')); 
  
app.get('*', function(req, res){ 
  res.sendfile('./public/index.html'); 
});

app.listen(9001); 
console.log("Go Prerender Go!");