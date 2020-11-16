// functional component
// will be passed props, will not store state

//Modal.js
import React from 'react';
const Modal = props => {
   //   console.log("Modal item", props)

   //   let name = props.itemName;
     console.log("Modal item", props.modalInfo)

     function displayInfo() {

      let item = props.resumeData.portfolio[props.modalInfo]

      switch(props.modalInfo) {
         case "0":
            return ( 
               <div>

                  <h1 style={{color: "black"}}>{item.name}</h1>
                  <img src={`${item.imgurl}`} alt={item.name} className="modal-img"/>
                  <h3 style={{color: "black"}}>Make it longer: {item.description}</h3>
                  <h5> Link Link Link</h5>
               </div>
            )
         case "1":
            return ( 
               <div>

                  <h1 style={{color: "black"}}>{item.name}</h1>
                  <img src={`${item.imgurl}`} alt={item.name} className="modal-img"/>
                  <h3 style={{color: "black"}}>Make it longer: {item.description}</h3>
                  <h5> Link Link Link</h5>
               </div>
            )
         case "2": 
         return ( 
            <div>

               <h1 style={{color: "black"}}>{item.name}</h1>
               <img src={`${item.imgurl}`} alt={item.name} className="modal-img"/>
               <h3 style={{color: "black"}}>Make it longer: {item.description}</h3>
               <h5> Link Link Link</h5>
            </div>
         )
         case "3":
            return ( 
               <div>

                  <h1 style={{color: "black"}}>{item.name}</h1>
                  <img src={`${item.imgurl}`} alt={item.name} className="modal-img"/>
                  <h3 style={{color: "black"}}>Make it longer: {item.description}</h3>
                  <h5> Link Link Link</h5>
               </div>
            )
         default:
            return null
        }
     }

   //   const divStyle = { 
   //        display: props.displayModal ? 'block' : 'none'
   //   };

    function closeModal (e) {
    e.stopPropagation()
    props.closeModal()
  }

   //   return (
   //     <div 
   //       className="modal"
   //       onClick={ closeModal }
   //       style={divStyle} 
   //       key={props.modalInfo}>
   //        <div 
   //           className="modal-content"
   //           onClick={ e => e.stopPropagation() } >
   //           <span 
   //               className="close"
   //               onClick={ closeModal }>&times;
   //           </span>
   //           {/* <h1 style={{color: "black"}}>{props.item[props.itemID].name}</h1> */}
   //        </div>
   //     </div>
   //   );

     let modal = (
      <div 
      className="modal"
      onClick={ closeModal }>

        <div className="modal-content"
          onClick={ e => e.stopPropagation() }>
          
          <span 
            className="close"
            onClick={ closeModal }>&times;
          </span>

          <div className="modal-flex">
            {displayInfo(props.resumeData.portfolio[props.modalInfo])}
          </div>

        </div>

      </div>
    )

    return ( props.displayModal ? modal : null);
}




export default Modal;