import React from "react";
import "./Navbar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  
  Nav,
  NavItem,
  
} from "reactstrap";
import { Link } from "react-router-dom";

export default class MyNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <div>
            <Link to="/">
            <img className="navlogo" src="https://images.cooltext.com/5479385.png" width="175" height="85" alt=" آباژور آفتاب" />
            </Link>
          </div>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="contactLi" to="/contact"><img src="https://images.cooltext.com/5479383.png" width="150" height="65" alt="تماس با ما
" /></Link>
                <Link className="galleryLi" to="/gallery"><img src="https://images.cooltext.com/5479382.png"   width="150" height="65" alt="محصولات ما" /></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
