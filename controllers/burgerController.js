const db = require ("../config/connection");

// Set up all functions to run and export them to burgerRoutes
module.exports = {
  // Get all burgers
  getAll: function(req, res) {
    db.query("SELECT * FROM burgers", function(err, burgersDB) {
      if (err) {
        throw err;
      }
      console.log(res.json(burgersDB));
    })
  },

  createBurger: function(req, res) {
    db.query("INSERT INTO burgers SET ?", req.body, function(err, burgersDB) {
      if (err) {
        throw err;
      }
      console.log(res.json(burgersDB));
    })
  },

  eatBurger: function (req, res) {
    db.query("UPDATE burgers SET completed = true WHERE id = ?", req.params.id, function (err, burgersDB) {
        if (err) {
          throw err;
        }
        res.json(burgersDB);
      })
  },

  deleteBurger: function(req, res) {
    db.query("DELETE FROM burgers WHERE id = ?", req.params.id, function(err, burgersDB) {
      if (err) {
        throw err;
      }
      console.log(res.json(burgersDB));
    })
  }
};