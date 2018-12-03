const express = require('express');

const Router = express.Router();
const Players = require('./controllers/Players');

Router.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

Router.get('/api/players/:_id?', Players.get);
Router.put('/api/players/:_id?', Players.save);
Router.delete('/api/players', Players.delete);

module.exports = Router;