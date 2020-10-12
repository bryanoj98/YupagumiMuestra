const express = require('express');
const app = express();
const path = require('path');
var body_parser = require('body-parser');
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './views/muebles_yupagumi.html'));

});

app.get("/public*", function(req, res) {
  res.sendFile(path.join(__dirname, '/public/'+req.params[0]));
  // console.log(req.params[0]);
});
app.get("/Pedido", function(req, res) {
  res.sendFile(path.join(__dirname, './views/pedido.html'));
  // console.log("pedido solo");
});
app.get("/producto", function(req, res) {
  res.sendFile(path.join(__dirname, './views/index.html'));
});
app.get("/item", function(req, res) {
  res.sendFile(path.join(__dirname, './views/item.html'));
});
// fin cambio
app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});
