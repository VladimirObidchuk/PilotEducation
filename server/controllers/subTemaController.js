const { SubTema } = require("../models/models");
const ApiError = require("../error/ApiError.js");

class SubTemaController {
  async create(req, res, next) {
    try {
      const { name, subname, courseId } = req.body;
      const tema = await SubTema.create({ name, subname, courseId });
      return res.json(tema);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    let { name, subname, courseId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    let tema;
    if (!name && !subname && !courseId) {
      tema = await SubTema.findAndCountAll({ limit, offset });
    }
    if (name && !subname && !courseId) {
      tema = await findAndCountAll({ where: { name }, limit, offset });
    }
    if (name && subname && !courseId) {
      tema = await SubTema.findAndCountAll({
        where: { name, subname },
        limit,
        offset,
      });
    }
    if (name && !subname && courseId) {
      tema = await SubTema.findAndCountAll({
        where: { name, courseId },
        limit,
        offset,
      });
    }
    if (name && subname && courseId) {
      tema = await SubTema.findAndCountAll({
        where: { name, subname, courseId },
        limit,
        offset,
      });
    }
    if (!name && subname && !courseId) {
      tema = await SubTema.findAndCountAll({
        where: { subname },
        limit,
        offset,
      });
    }
    if (!name && !subname && courseId) {
      tema = await SubTema.findAndCountAll({
        where: { courseId },
        limit,
        offset,
      });
    }

    return res.json(tema);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const tema = await SubTema.findOne({ where: { id } });
    return res.json(tema);
  }
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await SubTema.destroy({ where: { id }, force: true });
      return res.json({ message: "Запис видалено" });
    } catch (e) {
      next(ApiError.badRequest({ message: "Запис не видалено" }));
    }
  }
}

module.exports = new SubTemaController();
