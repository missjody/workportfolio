// functional component
// will be passed props, will not store state

//Modal.js
import React from 'react';
const Modal = props => {
   //   console.log("Modal item", props)

   //   let name = props.itemName;
     console.log("Modal item", props.resumeData.portfolio[props.modalInfo])

     const divStyle = { 
          display: props.displayModal ? 'block' : 'none'
     };
     function closeModal(e) {
        e.stopPropagation()
        props.closeModal()
     }
     return (
       <div 
         className="modal"
         onClick={ closeModal }
         style={divStyle} 
         key={props.modalInfo}>
          <div 
             className="modal-content"
             onClick={ e => e.stopPropagation() } >
             <span 
                 className="close"
                 onClick={ closeModal }>&times;
             </span>
             {/* <h1 style={{color: "black"}}>{props.item[props.itemID].name}</h1> */}
          </div>
       </div>
     );
}
export default Modal;