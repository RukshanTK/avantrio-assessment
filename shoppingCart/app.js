var http = require('http');
const express = require('express')
const app = express()
var router = express.Router();
var productController = require('./controllers/products').default
var cartController = require('./controllers/cart')

router.get('/products', () => {

  let result = productController.getAllProducts();
  console.log('Route triggered');
})

// POST method route to add items to cart
app.post('/add', (req, res) => {
  let result = cartController.addItemsToCart(req, res);
res.send('POST request received to add items to cart')
})

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('App started!');
}).listen(8080); 

    
module.exports = app;
