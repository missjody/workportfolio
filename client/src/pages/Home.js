import React from "react";

const Home = () => {


  return (

    <div>
      <div className="wave-container">

        <div className="row">
          <div className="col s12 m4 push-m1 push-l2 push-xl2">
            <h1 id="hello">Hello</h1>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m6 push-m2 push-l3 push-xl3">
            <h1 id="myNameIs">my name is</h1>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m6 push-m3 push-l4  push-xl4">
            <h1 id="name">Jody Russell</h1>
          </div>
        </div>

        <div id="imgContainer">
          <img src="./images/me.jpg"
            alt="miss jody headshot, wearing a gold sweater"
            id="profileImg" />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5DD39E" fill-opacity="1" d="M0,0L48,53.3C96,107,192,213,288,256C384,299,480,277,576,234.7C672,192,768,128,864,138.7C960,149,1056,235,1152,256C1248,277,1344,235,1392,213.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </div>


      <div className="wave-container row" id="mern">
        <div className="col s12 center-align">
          <h2 id="mernFont">I am a Web Developer with both <br />front-end and
          back-end experience working with the MERN stack.
          <br />I also have an extensive background in both<br />
          customer service and consumer lending.
          </h2>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#BCE784" fill-opacity="1" d="M0,64L14.1,80C28.2,96,56,128,85,144C112.9,160,141,160,169,154.7C197.6,149,226,139,254,133.3C282.4,128,311,128,339,138.7C367.1,149,395,171,424,192C451.8,213,480,235,508,218.7C536.5,203,565,149,593,149.3C621.2,149,649,203,678,218.7C705.9,235,734,213,762,186.7C790.6,160,819,128,847,138.7C875.3,149,904,203,932,197.3C960,192,988,128,1016,96C1044.7,64,1073,64,1101,69.3C1129.4,75,1158,85,1186,106.7C1214.1,128,1242,160,1271,186.7C1298.8,213,1327,235,1355,240C1383.5,245,1412,235,1426,229.3L1440,224L1440,0L1425.9,0C1411.8,0,1384,0,1355,0C1327.1,0,1299,0,1271,0C1242.4,0,1214,0,1186,0C1157.6,0,1129,0,1101,0C1072.9,0,1045,0,1016,0C988.2,0,960,0,932,0C903.5,0,875,0,847,0C818.8,0,791,0,762,0C734.1,0,706,0,678,0C649.4,0,621,0,593,0C564.7,0,536,0,508,0C480,0,452,0,424,0C395.3,0,367,0,339,0C310.6,0,282,0,254,0C225.9,0,198,0,169,0C141.2,0,113,0,85,0C56.5,0,28,0,14,0L0,0Z"></path></svg>
      </div>

      <div className="wave-container row" id="grad">
        <div className="col s12 center-align">
          <h2 id="gradFont">In April 2020 I graduated from the University of Denver’s
          Full Stack program, which covered HTML, CSS, JS, and React.
          I also gained experience in setting up databases and servers to connect
          to front-end, including MongoDB, Mongoose, and Express.
          Outside of class I explored additional technologies: Adobe Xd,
          Green Sock animation, Materialize CSS, Sass and ChartJS.
         </h2>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#348AA7" fill-opacity="1" d="M0,288L48,256C96,224,192,160,288,122.7C384,85,480,75,576,74.7C672,75,768,85,864,101.3C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </div>

      <div className="wave-container row" id="course">
        <div className="col s12 center-align">
          <h2 id="courseFont">Throughout the program I
          collaborated wtih teams teams and worked individually to create a series
          of projects.<br />The course was first in the classroom and later remote, <br /> offering a well-rounded experience
          in both collaboration types.
        </h2>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#525174" fill-opacity="1" d="M0,288L48,282.7C96,277,192,267,288,229.3C384,192,480,128,576,122.7C672,117,768,171,864,186.7C960,203,1056,181,1152,192C1248,203,1344,245,1392,266.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </div>

      <div className="wave-container row" id="thanks">
        <div className="col s12 center-align">
          <h2 id="thanksFont">
            Thank you for taking the time to explore my portfolio.<br />
            I've included some of my favorite projects as well as my
            contact information and links to my resume.
            I look forward to hearing from you soon!
         </h2>
        </div>
      </div>

    </div >
  )
}

export default Home;