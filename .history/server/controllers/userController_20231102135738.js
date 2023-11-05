const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const { User, Basket } = require('../models/models');
const jwt = require('jsonwebtoken');

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest('Incorrect password or user name'));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequest('The email is already exists'));
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hashPassword });
    const basket = await Basket.create({ userId: user.id });
    const jwt = jwt.sign(id:)
  }
  async login(req, res) {}
  async check(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest('id not set'));
    }
    res.json(id);
  }
}

module.exports = new UserController();
