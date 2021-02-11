import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li key={item.name}>
                    <a  target="_blank" href={item.url} rel="noreferrer">
                    <FontAwesomeIcon icon={item.icon} />
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