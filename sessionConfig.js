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
  };

  module.exports = sessionConfig;