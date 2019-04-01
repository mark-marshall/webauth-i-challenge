const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const bcrypt = require('bcryptjs');

// const db = require('./database/dbConfig.js');
// const Users = require('./users/users-model.js');

const server = express();

server.use(helmet());
server.use(express.json());

module.exports = server;
