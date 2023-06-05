const express = require('express');
const router = express.Router();

/* GET products listing. */
router.get('/', function(req, res, next) {
  res.send('Product list route');
});

router.get('/list-products', function(req, res, next) {
    res.send(
      [
          {
        "id": 782330,
        "title": "Doom: Eternal",
        "publisher": "Bethesda",
        "genre": "FPS",
        "price": 39.99
      },
      {
        "id": 546560,
        "title": "Half-Life: Alyx",
        "publisher": "Valve",
        "genre": "VR",
        "price": 59.99
      },
      {
        "id": 1145360,
        "title": "Hades",
        "publisher": "Supergiant",
        "genre": "Rogue-like",
        "price": 24.99
      },
      {
        "id": 2050650,
        "title": "Resident Evil 4",
        "publisher": "Capcom",
        "genre": "Horror",
        "price": 59.99
      },
      {
        "id": 2208920,
        "title": "Assassins Creed: Valhalla",
        "publisher": "Ubisoft",
        "genre": "Third Person",
        "price": 59.99
      }
   ]);
  })

module.exports = router;