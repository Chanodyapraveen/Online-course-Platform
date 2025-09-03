const jwt = require("jsonwebtoken");

const authMiddleware = (roles = []) => {
  return (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token provided. Access denied." });

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({ error: `Access forbidden: role '${decoded.role}' not permitted.` });
      }

      next();
    } catch {
      res.status(401).json({ error: "Invalid or expired token. Please log in again." });
    }
  };
};

module.exports = { authMiddleware };
