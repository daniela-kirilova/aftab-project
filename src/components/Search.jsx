import React, { Component } from "react";
import { galleryData } from "../helper/galleryData";
import CardGallery from "./CardGallery";

import "./Search.css";
export default class Gallery extends Component {
  state = {
    galleryData: galleryData,
    search: "",
  };
  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  render() {
    let filtered = this.state.galleryData.filter((el) => {
      return (
        el.title.toLowerCase().includes(this.state.search.toLowerCase()) ||
        el.description.includes(this.state.search)
      );
    });
    return (
      <div className="input-wrapper">
        <div className="searchInput">
          <i className="icon-search"></i>
          <input
            type="text"
            name="search"
            className="search"
            value={this.state.title}
            placeholder="برای جستجو عبارتی را تایپ کنید"
            onChange={this.handleChange}
          />
          
        </div>
        
        <div>
          <div>
            {filtered.map((e, i) => {
              return <CardGallery key={i} data={e} img={e.imgFile} rounded />;
            })}
          </div>
        </div>
        {filtered.length === 0 && (
          <h1>متاسفیم موردی مناسب با جستجوی شما یافت نشد</h1>
        )}
      </div>
    );
  }
}
