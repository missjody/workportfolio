import React, { useEffect } from 'react';
import resumeData from "../resumeData";

import ScrollHelpers from "../helpers/scroll-helpers";

import {
  useParams
} from "react-router-dom";

// this page needs to be passed the location in the array that the selection 
// is at so that it populates the page with that project

// flesh out once info is passing to page correctly

// Do I really need to keep inline styling or am I better than this



const Projects = () => {


  // on load or reload of component I want to 
  useEffect(() => {
    // scroll to the top of the component
    window.scrollTo({
      top: 800,
      behavior: "smooth"
    });
  }, [])

  let itemID = useParams();

  let item = resumeData.portfolio[itemID.id]

  console.log("project data: ", item.deployed)

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