import React, { Component } from "react";
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Footer from "../components/Footer"
import resumeData from '../resumeData';
 
class Home extends Component {
  render() {
    return (
      <div>
          <About resumeData={resumeData}/>
          <Portfolio resumeData={resumeData}/>
          <Footer resumeData={resumeData} />
      </div>
  )
  }
}
 
export default Home;