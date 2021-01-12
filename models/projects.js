const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// added article link, but it's been a while since I've done this 
// is this going to break when different projects don't have all of these
// just make sure the options not in use are not visible

const projectsSchema = new Schema({
  title: { type: String, required: true },
  linkDeployed: { type: String },
  linkGithub: { type: String },
  articleLink: { type: String },
  imgSrc: { type: String, required: true },
  description: { type: String, required: true },
  longDescription : { type: String, required: true }
});

const Project = mongoose.model("Project", projectsSchema);

module.exports = Project;
