const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Projects collection and inserts the projects below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactportfolio");

const portfolio = [
  {
    title:"Loan Payment Calculator",
    description:"Calculate your estimated monthly loan payment based on entered parameters.",
    longDescription :"This react calculator project was built in incremental steps, starting from simple Javascript and ending as a React application. Currently version 6 is in development, with additional user interface options being implemented as well as resolving responsive issues.",
    imgSrc:"images/portfolio/calculator.jpg",
    linkGithub:"https://github.com/missjody/loan_calculator",
    linkDeployed:"https://loan-calculator-project.herokuapp.com/"
  },
  {
    title:"Streamer",
    description:"Store what movies and tv shows are on your watch list. For this project I created the layout and color scheme of the entire page, as well as working with routes to call to The Movie Database api and Chart.js.",
    longDescription :"To try the application out use username 'test@test.com', and password 'test'. This single page application was created using Handlebars.js, and was a group project in the bootcamp I attended. I was originally tasked with creating the color pallete for the project, designing the user interface for each of the pages, generating dynamically with Handlesbars.js, and integrating the Chart.js technology. In it's current form I have updated the Owl Carousels to resolve overlapping image issues, and have resolved the error of adding selections when their is more than one option on the selected page.",
    imgSrc:"images/portfolio/streamer.jpg",
    linkGithub:"https://github.com/missjody/Streamer",
    linkDeployed:"https://infinite-bayou-97369.herokuapp.com/"
  },
  {
    title:"Surata",
    description:"React password protected productivity application, including the ability to set up goals and sub tasks, a Pomodoro timer, and a meditation page.",  
    longDescription :"To test use username 'test' and password 'test'. React password protected productivity application, including the ability to set up goals and sub tasks, a Pomodoro timer, and a meditation page. This was the final group project in the bootcamp I attended. I created the the meditation page using GSAP and React-Sound, and designed the splash page, as well as overall color scheme and hero images. In it's current form I have updated the project to remove illustrations previously seen on the splash page and Pomodoro page.",
    imgSrc:"images/portfolio/surata1.jpg",
    linkGithub:"https://github.com/missjody/productivity-app",
    linkDeployed:"https://newsurata.herokuapp.com/"
  },
  {
    title:"Deploying to Azure",
    description:"In an effort to create resources for myself that will also help others with their programming journey, this article outlines the steps neccessary to deploy a React application to Microsoft Azure.",
    longDescription :"In an effort to create resources for myself that will also help others with their programming journey, this article outlines the steps neccessary to deploy a React application to Microsoft Azure. Following the steps will assist anyone interested in deploying this way.",
    imgSrc:"images/portfolio/azure.JPG",
    articleLink : "https://docs.google.com/document/d/1DvHVMeTab2jGcIs8IAllv6Nq5VNFFBs7DIveaKww7GA/edit?usp=sharing"
  }
];

db.Project.remove({})
  .then(() => db.Project.collection.insertMany(projectsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
