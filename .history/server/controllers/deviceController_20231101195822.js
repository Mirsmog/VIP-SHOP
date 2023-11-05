const uuid = require('uuid');
const path = require('path');
const { Device } = require('../models/models');

class deviceController {
  async create(req, res) {
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
      console
    }
  }
  async getAll(req, res) {}
  async getOne(req, res) {}
}

module.exports = new deviceController();
