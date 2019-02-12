const router = require("express").Router();
const burgerRoutes = require("./burgerRoutes");
const chefBurger = require("./chefRoutes")

// routes
router.use("/burgers", burgerRoutes);
// router.use("/chefsburger", chefBurger);

module.exports = router;
