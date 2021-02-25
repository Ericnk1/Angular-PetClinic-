const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/pet-clinic'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/pet-clinic/index.html'));});
app.listen(process.env.PORT || 8080);
