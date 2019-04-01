const express = require('express');
const helmet = require('helmet');
const bcrypt = require('bcryptjs');
const userDb = require('./handlers/userHandlers');

const server = express();

server.use(helmet());
server.use(express.json());

/*
=========== USER REGISTRATION
[POST] request with the following sent in the body;
"username": "string up to 128 characters (unique)",
"password": "string"
*/
server.post('/api/register', (req, res) => {
  const user = req.body;
  const hashPass = bcrypt.hashSync(user.password, 10);
  user.password = hashPass;

  if (user.username && user.password) {
    userDb
      .add(user)
      .then(user => {
        res.status(201).json(user);
      })
      .catch(err => {
        res.status(500).json({
          message: 'there was an error adding this user to the database',
        });
      });
  } else {
    res
      .status(404)
      .json({ message: 'you must enter a username and password to register' });
  }
});

/*
=========== USER LOGIN
[POST] request with the following sent in the body;
"username": "valid username that exists already in the database",
"password": "valid password that matches the usernames credentials"
*/
server.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (username && password) {
    userDb
      .findBy({ username })
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          res.status(200).json({ message: `welcome in ${username}` });
        } else {
          res
            .status(401)
            .json({ message: 'the credentials you entered were invalid' });
        }
      })
      .catch(err =>
        res.status(500).json({ message: 'the user could not be logged in' }),
      );
  } else {
    res
      .status(404)
      .json({
        message: 'please enter both your username and password to login',
      });
  }
});

module.exports = server;
