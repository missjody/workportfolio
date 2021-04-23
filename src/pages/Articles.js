import React, { useEffect } from 'react';
import resumeData from "../resumeData";

import {
  useParams
} from "react-router-dom";


const Articles = () => {

  // on load or reload of component I want to 
  useEffect(() => {
    // scroll to the top of the component... or id, that works

    document.getElementById('projectsBox').scrollIntoView({ behavior: "smooth" });
  })


  // let itemID = useParams();

  // let item = resumeData.articles[itemID.id]

  console.log("articles data " + resumeData)

  return (

    <div id="projectsBox">
      {/* 
      <h1 style={{ color: "white" }}>{item.name}</h1>
      <h3 style={{ color: "white" }}>{item.longDescription}</h3>
      <a display='block' target="_blank" href={`${item.article}`} rel="noreferrer">Article Link</a> */}

    </div>
  )
}

export default Articles;