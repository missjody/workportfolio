import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I am {resumeData.name}.</h1>
               <h3 className="hide-me" style={{color:'#2b2b2b', fontFamily:'sans-serif '}}>I am a {resumeData.role}.{resumeData.roleDescription}
               </h3>
               <hr/>
               
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                        <li key={item.name}>
                                <a href={item.url} target="_blank"  rel="noreferrer">
                                <FontAwesomeIcon icon={item.icon} />
                                </a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

      </header>
      </React.Fragment>
    );
  }
}