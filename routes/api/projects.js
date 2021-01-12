const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

// rather than this having it's own page we grab this for the front and then 
// on click of each project it routes to their page and pulls information based on id number

// Matches with "/api/projects"
router
  .route("/projects")
  .get(projectsController.findAll);


module.exports = router;