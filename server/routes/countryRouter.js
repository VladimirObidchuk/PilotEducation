const Router = require("express");
const router = new Router();
const CountryController = require("../controllers/countryController");
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");

router.post("/", checkRoleMiddleware, CountryController.create);
router.get("/", CountryController.getAll);
router.get("/:id", CountryController.getOne);
router.delete("/:id", CountryController.delete);

module.exports = router;
