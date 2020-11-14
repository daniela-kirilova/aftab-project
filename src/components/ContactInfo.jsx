import React from "react";
import "./Contactinfo.css";

export default function ContactInfo(props) {
  return (
    <div className="contact-wrapper">
      <div className="icon-text">
      <i className={props.data.icon} />
        <p className="titleCtct">
        
         {props.data.title} 
        </p>
        <label className="contact-description"> {props.data.description}</label>
      </div>
    </div>
  );
}
