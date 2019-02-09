const router = require("express").Router();
const burgerRoutes = require("./burgerRoutes");

// routes
router.use("/burgers", burgerRoutes);

module.exports = router;
