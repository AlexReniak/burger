const router = require("express").Router();
const db = require("../../config/connection");


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
  })

  .get(function(req, res) {
    db.query("SELECT * FROM chefs_burger ORDER BY RAND() LIMIT 1", function(err, chefsDB) {
      if (err) {
        throw err;
      }
      res.render("burgers", {burgers: chefsDB})
    })
  })

module.exports = router;