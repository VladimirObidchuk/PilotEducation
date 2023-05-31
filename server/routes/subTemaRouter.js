const Router = require("express");
const subTemaController = require("../controllers/subTemaController");
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");
const router = new Router();

router.post("/", checkRoleMiddleware, subTemaController.create);
router.get("/", subTemaController.getAll);
router.get("/:id", subTemaController.getOne);
router.delete("/:id", subTemaController.delete);

module.exports = router;
