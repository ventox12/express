const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

  res.render('quiz', { title: 'Quiz' });
});

module.exports = router;
