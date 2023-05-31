const { Question } = require("../models/models.js");
const ApiError = require("../error/ApiError.js");
const uuid = require("uuid");
const path = require("path");

class questionController {
  async create(req, res, next) {
    try {
      const { name, answer, subtemaId } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const question = await Question.create({
        name,
        answer,
        subtemaId,
        img: fileName,
      });
      return res.json(question);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    let question;
    let { name, subtemaId, img } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;

    if (!name && !answer && !subtemaId && !img) {
      question = await Question.findAndCountAll({ limit, offset });
    }
    if (name && !subtemaId && !img) {
      question = await Question.findAndCountAll({
        where: { name },
        limit,
        offset,
      });
    }
    if (!name && subtemaId && !img) {
      question = await Question.findAndCountAll({
        where: { subtemaId },
        limit,
        offset,
      });
    }
    if (!name && !subtemaId && img) {
      question = await Question.findAndCountAll({
        where: { img },
        limit,
        offset,
      });
    }
    if (name && subtemaId && !img) {
      question = await Question.findAndCountAll({
        where: { name, subtemaId },
        limit,
        offset,
      });
    }
    if (name && !subtemaId && img) {
      question = await Question.findAndCountAll({
        where: { name, img },
        limit,
        offset,
      });
    }
    if (!name && subtemaId && img) {
      question = await Question.findAndCountAll({
        where: { subtemaId, img },
        limit,
        offset,
      });
    }
    if (name && subtemaId && img) {
      question = await Question.findAndCountAll({
        where: { name, subtemaId, img },
        limit,
        offset,
      });
    }
    return res.json(question);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const question = await Question.findOne({ where: { id } });
    return res.json(question);
  }
}

module.exports = new questionController();
