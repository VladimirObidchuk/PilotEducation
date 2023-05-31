const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter.js");
const courseRouter = require("./courseRouter.js");
const subTemaRouter = require("./subTemaRouter.js");
const questionRouter = require("./questionRouter.js");
const countryRouter = require("./countryRouter.js");
const userInfoRouter = require("./userInfoRouter.js");

router.use("/user", userRouter);
router.use("/course", courseRouter);
router.use("/subTema", subTemaRouter);
router.use("/question", questionRouter);
router.use("/country", countryRouter);
router.use("/userInfo", userInfoRouter);

module.exports = router;
