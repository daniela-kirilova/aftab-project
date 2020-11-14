import React, { Component } from "react";
import ContactInfo from "./../components/ContactInfo";
import { contactData } from "../helper/contactData";
import ContactUs from "../components/ContactUs";

import "./Contact.css";

export default class Contact extends Component {
  state = {
    contactData: contactData,
  };

  render() {
    return (
      <div>
        <ContactUs />
        <h1 className="callus"> برای کسب اطلاعات با ما تماس بگیرید</h1>

        <div className="contact-background">
          <section className="contact-data">
            {this.state.contactData.map((e, i) => {
              return <ContactInfo key={i} data={e} />;
            })}
          </section>
          <div className="visitUs">
            <p className="adress">
              برای دیدن اجناس از نزدیک حتما به آدرس اشاره شده تشریف بیاورید
              تبریز ، خیابان حجتی استاد جعفری ، ایستگاه نجار آباد ، روبروی بانک
              ملی ، جنب‌ کافه شهریار
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d784.954498756665!2d46.25531048812889!3d38.097900054117815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDA1JzUyLjQiTiA0NsKwMTUnMjEuMSJF!5e0!3m2!1sen!2sde!4v1604858936368!5m2!1sen!2sde"
            className="map"
            title="map"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    );
  }
}
