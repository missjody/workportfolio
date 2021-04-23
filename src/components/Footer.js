import React, { Component } from 'react';
import * as FontAwesome from "react-icons/fa"


export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>

        <a href="/">{React.createElement(FontAwesome["FaHome"])}</a>

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
      </footer>
    );
  }
}