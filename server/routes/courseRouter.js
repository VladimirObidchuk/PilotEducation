const Router = require("express");
const router = new Router();
const courseController = require("../controllers/courseController");
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");

router.post("/", checkRoleMiddleware, courseController.create);
router.get("/", courseController.getAll);
router.get("/:id", courseController.getOne);
router.delete("/:id", courseController.delete);

module.exports = router;
