const { UsereInfo } = require("../models/models.js");
const ApiError = require("../error/ApiError.js");

class UserInfoController {
  async create(req, res, next) {
    try {
      const {
        name,
        firstName,
        lastName,
        country,
        pilotLice,
        pasport,
        phone,
        works,
        position,
        userId,
      } = req.body;
      const info = await UsereInfo.create({
        name,
        firstName,
        lastName,
        country,
        pilotLice,
        pasport,
        phone,
        works,
        position,
        userId,
      });
      return res.json(info);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getOne(req, res) {
    const { id } = req.params;
    const info = await UsereInfo.findOne({ where: { id } });
    return res.json(info);
  }
}

module.exports = new UserInfoController();
