import './App.css';
// import React, {Component} from "react";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import ProjectFrontPage from "./components/ProjectFrontPage"
// import ProjectSoloPage from "./components/ProjectSoloPage"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NoMatch from "./pages/NoMatch";
// import Contact from "./pages/Contact";
// import Home from "./pages/Home";
// import ProjectSolo from "./pages/ProjectSolo";
// import API from "./utils/API";


function App() {

// useEffect to pull in API first? 

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );


  // return (
  //   <Router>
  //     <Switch>
  //       <Route exact path ="/">
  //         <Home />
  //       </Route>
  //       <Route exact path="/Contact">
  //         <Contact />
  //       </Route>
  //       <Route exact path="/Project">
  //         <ProjectSolo />
  //       </Route>
  //       <Route>
  //         <NoMatch />
  //       </Route>
  //     </Switch>
  //   </Router>  )
}

export default App;
