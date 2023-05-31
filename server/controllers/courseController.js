const { Course } = require("../models/models.js");
const ApiError = require("../error/ApiError.js");

class CoursController {
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const cours = await Course.create({ name });
      return res.json(cours);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    const course = await Course.findAll();
    return res.json(course);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const course = await Course.findOne({ where: { id } });
    return res.json(course);
  }
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await Course.destroy({ where: { id }, force: true });
      return res.json({ message: "Запис видалено" });
    } catch (e) {
      next(ApiError.badRequest({ message: "Запис не видалено" }));
    }
  }
}

module.exports = new CoursController();
