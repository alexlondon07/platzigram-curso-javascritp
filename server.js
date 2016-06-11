var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  //res.send('Hola mundo!');
  res.render('index', { })
})

app.listen(3000, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);

  console.log('Platzigram escuchando en el puerto 3000');
})
