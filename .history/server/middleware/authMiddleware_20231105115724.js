const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS') {
    next;
  }
  console.log(req.headers.authorization)
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "don't login" });
    }
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decode;
    next;
  } catch (error) {
    return res.status(401).json({ message: `error in trying auth ${error}` });
  }
};
