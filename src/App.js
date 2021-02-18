import React, { Component } from "react";
import {
  Route,
  BrowserRouter,
  Switch
} from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch.js"
import ProjectOne from "./pages/ProjectOne";

import Header from './components/Header';
import resumeData from './resumeData';
 
class App extends Component {
    render() {
        return (
          <BrowserRouter>
            <div>
            <Header resumeData={resumeData}/>
            
            <Switch>
              <Route exact path={["/", "/home"]}>
                <Home />
              </Route>
              <Route exact path="/projects">
                <ProjectOne />
              </Route>
              <Route>
                <NoMatch />
              </Route>
            </Switch>
            </div>
          </BrowserRouter>
        );
      }
}
 
export default App;