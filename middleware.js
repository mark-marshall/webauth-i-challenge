const restricted = (req, res, next) => {
  if (req.session && req.session.username) {
    next();
  } else {
    res.status(401).json({ message: 'not authenticated' });
  }
};

const protected = (req, res, next) => {
  const url = req.url;
  if (url.includes('protected')) {
    if (req.session && req.session.username) {
      next();
    } else {
      res.status(401).json({ message: 'not authenticated' });
    }
  } else {
    next();
  }
};

module.exports = {
    restricted,
    protected
};
