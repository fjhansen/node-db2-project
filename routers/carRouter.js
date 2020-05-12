const express = require('express');
const knex = require('knex');
const knexfile = require('../knexfile.js');
const enviornment = process.env.NODE_ENV || "development";

const dbConfig = knexfile[enviornment];

const db = require("../data/dbConnection");

const router = express.Router();

router.get("/", (req, res) => {
  db('cars')
  .then(cars => {
    res.json(cars)
  })
  .catch(err => {
    res.status(500).json({message: 'failed to retrieve cars'})
  })
})

router.post('/', (req, res) => {
  const theBody = req.body;
  db('cars')
  .insert(theBody)
  .then(car => {
    res.status(201).json({ data: car[0]})
  })
  .catch(err => {
    res.status(500).json({ error: 'car could not be inserted'})
  })
})

module.exports = router;