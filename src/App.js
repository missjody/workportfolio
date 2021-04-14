import React, { Component } from "react";
import {
  Route,
  BrowserRouter,
  Switch
} from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch.js"
import Projects from "./pages/Projects";

import Header from './components/Header';
import resumeData from './resumeData';

// note from 3/3: when changing the projects route like this
// can we additionally drill down to grab just the project based on
// what is being passed from current press 


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header resumeData={resumeData} />

          <Switch>
            <Route exact path={["/", "/home"]}>
              <Home />
            </Route>
            <Route path={"/project/:id"}>
              {/* // exact path="/projects/:id"
                // render={props => 
                  // <Projects project={this.state.project} */}
              <Projects />
              {/* // />
                // }/> */}
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