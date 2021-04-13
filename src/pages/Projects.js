import React from 'react';
import resumeData from "../resumeData";
import Footer from "../components/Footer"
import Portfolio from '../components/Portfolio';
import About from '../components/About';

import {
  useParams
} from "react-router-dom";
// this page needs to be passed the location in the array that the selection 
// is at so that it populates the page with that project

// flesh out once info is passing to page correctly

const Projects = () => {

  let itemID = useParams();

  let item = resumeData.portfolio[itemID.id]

  console.log("project data: ", item)

  return (

    <div>
      <section id="projectsSection">

        <h1 style={{ color: "white" }}>{item.name}</h1>
        <img src={`${item.imgurl}`} alt={item.name} className="modal-img" />
        <h3 style={{ color: "white" }}>{item.longDescription}</h3>
        <a display='block' target="_blank" href={`${item.deployed}`} rel="noreferrer">Deployed Project</a>
        <a display='block' target="_blank" href={`${item.github}`} rel="noreferrer">GitHub Repository</a>

      </section>
      <Portfolio resumeData={resumeData} />
      <About resumeData={resumeData} />
      <Footer resumeData={resumeData} />
    </div>
  )
}

export default Projects;