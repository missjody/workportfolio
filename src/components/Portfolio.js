import React, { Component } from 'react';
// import Modal from "./Modal";
import { Link } from "react-router-dom";

export default class Portfolio extends Component {
  
  // state = {
  //   modal: false,
  //   modalInfo: "",
  // }

  // selectModal = (info = "") => {
  //   this.setState({
  //     modal: !this.state.modal,
  //     modalInfo: info
  //   })
  // }
  
  render() {
    
    let resumeData = this.props.resumeData;

    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{

              let itemID = item.modalID;

              return(
                <div key={item.name} className="columns portfolio-item">
                  <div className="item-wrap">
                      <img src={`${item.imgurl}`} alt="project example" className="item-img"/>
                      {/* changes made 3/3 */}
                      {/* <div className="overlay" onClick={ () => this.selectModal(itemID) }> */}
                      <div className="overlay">
                       
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <Link to={{pathname: "/projects", state: item}}>   <p>{item.description}</p> </Link>
                        </div>
                      </div>
                  </div>
                  {/* <Modal 
                    resumeData={resumeData} 
                    displayModal={this.state.modal}
                    modalInfo={this.state.modalInfo}
                    closeModal={this.selectModal}
                  /> */}
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}