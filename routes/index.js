const express = require('express');
const router = express.Router();

/* GET home page. */
//podpinamy wszystkie metody router
//przechwytuje typ get na adres'/'
router.get('/', (req, res) => {
  //req moze przyjmowac przy get np. parametry, query string
  //res co ma zwrocic
  //po przechwyceniu tego adresu wykonuje to
  //pierwszy parametr to wskazanie nazwy szablonu
  //drugi parametr jest obiekt, przekazuje wszystkie parametry przekazywane do naszego szablonu
  res.render('index', { title: 'Express' });
});

module.exports = router;
