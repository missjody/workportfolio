import React, { Component } from "react";
import {
  Route,
  BrowserRouter,
  Switch
} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Articles from "./pages/Articles";
import NoMatch from "./pages/NoMatch.js"

import Header from './components/Header';
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

import resumeData from './resumeData';

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
              <Projects />
            </Route>
            <Route path={"/article/:id"}>
              <Articles />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>

          <Portfolio resumeData={resumeData} />

          <Footer resumeData={resumeData} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;