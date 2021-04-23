import React, { Component } from 'react';
import * as FontAwesome from "react-icons/fa"


export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;

    function goHome(e) {
      e.preventDefault();
      // console.log('The link was clicked.');
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
      window.location = ('/')
    }
    return (
      <footer>

        <h1 onClick={goHome}>{React.createElement(FontAwesome["FaHome"])}</h1>



        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {
                resumeData.socialLinks && resumeData.socialLinks.map((item) => {
                  return (
                    <li key={item.name}>
                      <a target="_blank" href={item.url} rel="noreferrer">
                        {React.createElement(FontAwesome[item.icon])}
                      </a>
                    </li>
                  )
                })
              }
            </ul>

          </div>
        </div>
      </footer >
    );
  }
}