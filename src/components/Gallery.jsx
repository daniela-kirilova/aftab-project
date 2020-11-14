import React, { Component } from "react";

import { galleryData } from "../helper/galleryData";
import Search from "../components/Search"
export default class Gallery extends Component {
  state = {
    galleryData: galleryData,
                
    
  };

  render() {
    return (
      <section className="gallery">
      <h2><a className="productInfo" href="/contact" > برای اطلاعات بیشتر و سفارش لطفا با ما در ارتباط باشید</a></h2>

     <Search/>
   
      </section>
    );
  }
}
