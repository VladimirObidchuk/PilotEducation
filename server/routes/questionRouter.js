const Router = require("express");
const questionController = require("../controllers/questionController");
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");
const router = new Router();

router.post("/", checkRoleMiddleware, questionController.create);
router.get("/", questionController.getAll);
router.get("/:id", questionController.getOne);

module.exports = router;
