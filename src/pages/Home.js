import React, { useEffect } from "react";
import About from '../components/About';
import resumeData from '../resumeData';


const Home = () => {

  useEffect(() => {
    // scroll to the top of the component... or id, that works

    document.getElementById('about').scrollIntoView({ behavior: "smooth" });
  })

  return (
    <div>
      <About resumeData={resumeData} />
    </div>
  )
}


export default Home;