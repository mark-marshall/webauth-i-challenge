const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const db = require('./knexConfig');

const sessionConfig = {
    name: 'hippo',
    secret: 'shh',
    cookie: {
      maxAge: 1000 * 60 * 15,
      secure: false,
    },
    httpOnly: true,
    resave: false,
    saveUninitialized: false,
    store: new KnexSessionStore({
      knex: db,
      tablename: 'sessions',
      sidfieldname: 'sid',
      createtable: true,
      clearInterval: 1000 * 60 * 60,
    }),
  };

  module.exports = sessionConfig;