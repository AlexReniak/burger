const router = require("express").Router();
const burgerController = require("../../controllers/burgerController");

// burger route for homepage
router
  .route("/")
  .get(burgerController.getAll)
  .post(burgerController.createBurger)

// delete burger by id
router
  .route("/:id")
  .delete(burgerController.deleteBurger)
  .put(burgerController.eatBurger);

module.exports = router;
