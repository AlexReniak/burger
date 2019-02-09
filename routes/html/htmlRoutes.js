const router = require("express").Router();
const db = require("../../config/connection");

// Set up home page route to load handlebars template w/ date from db
router
  .route("/")
  .get(function(req, res) {
    db.query("SELECT * FROM burgers", function(err, burgersDB) {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
      res.render("burgers", {burgers: burgersDB});
    });
  });

module.exports = router;