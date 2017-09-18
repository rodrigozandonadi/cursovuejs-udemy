var express = require('express');
var consign = require('consign');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));

consign()
  .include('app/routes')
  .then('app/models')
  .then('app/controllers')
  .into(app);

module.exports = app;

app.listen(80, function(){
  console.log('Start on engine - express ready??? Go!!!');  
});