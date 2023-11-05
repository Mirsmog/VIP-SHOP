const uuid = require('uuid');
const path = require('path');
const { Device } = require('../models/models');
const ApiError = require('../error/ApiError');

class deviceController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      const fileName = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });
      return res.json(device);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getAll(req, res) {
    const { brandId, typeId } = req.body;
    let devices;
    if (!brandId && !typeId) {
      
    }
    if (!brandId && typeId) {
    }
    if (brandId && !typeId) {
    }
    if (brandId && typeId) {
    }
    return res.json(devices);
  }
  async getOne(req, res) {}
}

module.exports = new deviceController();
