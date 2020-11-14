import React from "react";
import "./CardGallery.css";
 

const CardGallery = (props) => {
  return (
    
    <section className="productList">
      

      <div className="productCard">        
          <img className='zoom' src={props.img} alt={props.data.altTitle} />


          <div className="cardInfo">
            <div>
              <h3 className="productTitle">{props.data.title}</h3>
              <h4 className="productDescription"> {props.data.description}</h4>
            
            </div>
          </div>     
      </div>
    </section>
  );
};
 
export default CardGallery;
