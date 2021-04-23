import React, { useEffect } from 'react';
import resumeData from "../resumeData";

import {
  useParams
} from "react-router-dom";


const Projects = () => {

  // on load or reload of component I want to 
  useEffect(() => {
    // scroll to the top of the component... or id, that works

    document.getElementById('projectsBox').scrollIntoView({ behavior: "smooth" });
  })

  let itemID = useParams();

  // console.log("projects itemID ", itemID)

  let item = resumeData.portfolio[itemID.id]

  // console.log("project data: ", resumeData.articles[0])

  return (

    <div id="projectsBox">

      <h1 style={{ color: "white" }}>{item.name}</h1>
      <h3 style={{ color: "white" }}>{item.longDescription}</h3>
      <a display='block' target="_blank" href={`${item.deployed}`} rel="noreferrer">Deployed Project  |</a>
      <a display='block' target="_blank" href={`${item.github}`} rel="noreferrer">  GitHub Repository</a>


    </div>
  )
}

export default Projects;