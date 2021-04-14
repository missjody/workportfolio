import React, { Component } from "react";
import Footer from "../components/Footer"
import Portfolio from '../components/Portfolio';
import resumeData from '../resumeData';

class NoMatch extends Component {
    render() {
        return (
            <div>
                <section id="wrongTurn">
                    <h1 id="wrongTurnH"> Sorry, that page does not exist </h1>
                </section>
                {/* <Portfolio resumeData={resumeData}/>
        <Footer resumeData={resumeData} /> */}
            </div>
        )
    }
}

export default NoMatch;