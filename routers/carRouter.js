const express = require('express');
const knex = require('knex');
const knexfile = require('../knexfile.js');
const enviornment = process.env.NODE_ENV || "development";

const dbConfig = knexfile[enviornment];

const db = require("../data/dbConnection");

const router = express.Router();

module.exports = router;