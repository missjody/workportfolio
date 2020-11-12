import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
// import Footer from './components/Footer';
// import resumeData from './resumeData';
// import ProjectSolo from "./pages/ProjectSolo.js"
// import Home from "./pages/Home.js"
// import NoMatch from "./pages/NoMatch.js"

import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from "./components/Footer"
import resumeData from './resumeData';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'

library.add( faEnvelope, faFile, fab)

function App() {

    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  
}

// export default App;

// function App() {


  
//   return (
//     <Router>
//       <div className="App">
//         <Switch>
//           <Route path="/project">
//             <ProjectSolo />
//           </Route>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route>
//             <NoMatch />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   )
  

// }

export default App;