import React, { Component } from 'react';
// import Modal from "./Modal.js";

export default class Portfolio extends Component {

//   state = {
//     modal: false
//  }
  
//  selectModal = (info) => {
//    this.setState({modal: !this.state.modal}) // true/false toggle
//  }


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
              return(
                <div className="columns portfolio-item" key={item.modalID}>
                  <div className="item-wrap">
                    <a href={item.modalID}>
                      <img src={`${item.imgurl}`} className="item-img" />
                      {/* onClick={ this.selectModal } */}
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                      {/* <Modal displayModal={this.state.modal}
                 closeModal={this.selectModal}/> */}
                    </a>
                  </div>
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