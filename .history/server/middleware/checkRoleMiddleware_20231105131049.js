const jwt = require('jsonwebtoken');

module.exports = function (role) {
  return function (req, res, next) {
    if (req.method === 'OPTIONS') {
      next();
    }
    try {
      const token = req.headers.authorization.split(' ')[1];
      if (!token) {
        return res.status(401).json({ message: "don't login" });
      }
      const decode = jwt.verify(token, process.env.SECRET_KEY);
      if (decode.role !== role) {
        return res.status(403).json({ message: "don't have permission" });
      }
      req.user = decode;
      next();
    } catch (error) {
      return res.status(401).json({ message: "don't login" });
    }
  };
};
