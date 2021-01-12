const db = require("../models");

// Defining methods for the projectsController
module.exports = {
  findAll: function (req, res) {
    // console.log("Req.query", req.query)
    db.Project.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
