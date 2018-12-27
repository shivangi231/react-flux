`use strict`;
var express = require('express');
var app = express();

const PORT = 8080;
console.log('__dirname',__dirname)
app.use(express.static(__dirname + '/build/')); 

app.listen(PORT, () => {
  console.log(`server start ${PORT}`);
})
