const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const { User, Basket } = require('../models/models');

class UserController {
  async registration(req, res) {
    const {email, password}
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
