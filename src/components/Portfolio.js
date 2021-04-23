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
            <div className="bgrid-quarters s-bgrid-thirds portfolio-wrapper cf">
              {
                resumeData.portfolio && resumeData.portfolio.map((item) => {

                  // let itemID = item.modalID;

                  // console.log("itemID? " + itemID)

                  return (
                    <div key={item.name} className="columns portfolio-item">
                      <div className="item-wrap">
                        <img src={`${item.imgurl}`} alt="project example" className="item-img" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <Link to={`/project/${item.modalID}`}>   <p>{item.description}</p> </Link>
                          </div>
                        </div>
                      </div>
                    </div>


                  )
                })
              }


              {
                resumeData.articles && resumeData.articles.map((item) => {

                  return (
                    <div key={item.name} className="columns portfolio-item">
                      <div className="item-wrap">
                        <img src={`${item.imgurl}`} alt="project example" className="item-img" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <Link to={`/article/${item.artId}`}>   <p>{item.description}</p> </Link>
                          </div>
                        </div>
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