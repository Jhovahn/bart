const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const axios = require('axios');

express()
  .use(express.static(path.join(__dirname)))
  .get('/', (req, res) => res.render('index'))
  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
