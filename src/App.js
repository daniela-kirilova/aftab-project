import React, { Component } from "react";
import  {BrowserRouter as Router,  Route, Switch }  from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer";
import Gallerypage from "./pages/Gallerypage"
import Contactpage from "./pages/Contactpage"
import "./App.css"
class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
      <Switch> 
      <Route exact path="/contact" component={Contactpage} />
        <Route exact path="/gallery" component={Gallerypage} />        
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer/>
       </Router>
    );
  }
}

export default App;
