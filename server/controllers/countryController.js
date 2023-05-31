const { Country } = require("../models/models.js");
const ApiError = require("../error/ApiError.js");

class CountryController {
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const country = await Country.create({ name });
      return res.json(country);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    const country = await Country.findAll();
    return res.json(country);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const country = await Country.findOne({ where: { id } });
    return res.json(country);
  }
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await Country.destroy({ where: { id }, force: true });
      return res.json({ message: "Запис видалено" });
    } catch (e) {
      next(ApiError.badRequest({ message: "Запис не видалено" }));
    }
  }
}

module.exports = new CountryController();
