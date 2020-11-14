import React, { Component } from "react";
import Instagram from "../images/insta.png";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-wrapper">
          <div className="footer-icons">
            <i className="icon-phone">09143116058</i>
          </div>

          <a href="https://www.instagram.com/ali.adljou/" target="_blank" rel="noopener noreferrer">
            <img className="insta"  src={Instagram} alt='instagram'></img>
          </a>

        
          <div className="footer-icons">
            <i className="icon-phone">04132889199</i>
          </div>
        </div>
      </footer>
    );
  }
}
