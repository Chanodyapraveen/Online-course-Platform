module.exports = (req, res, next) => {
  // Example: check for token in headers
  // if (!req.headers.authorization) return res.status(401).json({ error: 'Unauthorized' });
  next();
};
