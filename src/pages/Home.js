import React from "react";
import About from '../components/About';
import resumeData from '../resumeData';


const Home = () => {


  return (
    <div>
      <About resumeData={resumeData} />
    </div>
  )
}


export default Home;