const router = require("express").Router();
const projectRoutes = require("./projects");

// Project routes
router.use("/", projectRoutes);

module.exports = router;