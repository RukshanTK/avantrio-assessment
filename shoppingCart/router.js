const app = express()
var router = express.Router();

// GET method route to get all products
router.get('/products', (req, res) => {

    res.send([
        {
          "id": 1,
          "name": "Laptop",
          "price": 1500
        },
        {
          "id": 2,
          "name": "Headphones",
          "price": 200
        }
       ])
  })
  
  // POST method route to add items to cart
  app.post('/', (req, res) => {
    res.send('POST request to the homepage')
  })
  