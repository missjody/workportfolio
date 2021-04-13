import React from 'react';
import resumeData from "../resumeData";
import Footer from "../components/Footer"
import Portfolio from '../components/Portfolio';
import About from '../components/About';

// this page needs to be passed the location in the array that the selection 
// is at so that it populates the page with that project

// flesh out once info is passing to page correctly

const Projects = () => {


  // let resumeData = this.props.resumeData;

  // console.log("project data: ", itemID)

  return (
    <div>
      <section id="projectsSection">

        <h1> Test </h1>
        <h3>
          Project Title

          Project Image
          Project Description
          Project Link 1 Project Link 2 if true
          </h3>

      </section>
      <Portfolio resumeData={resumeData} />
      <About resumeData={resumeData} />
      <Footer resumeData={resumeData} />
    </div>
  )
}

export default Projects;