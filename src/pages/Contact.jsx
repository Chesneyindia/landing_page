import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="left-section">
        <h1 className="brand-name">ETHOS MEDIA</h1>
        <div className="contact-info">
          <p><strong>MAIL</strong></p>
          <p><a href="mailto:contact@ethosmediaagency.com">enquiry@chesneyindia.com</a></p>

          <p><strong>ADDRESS</strong></p>
          <p><a href="https://goo.gl/maps/abcd123">CHESNEY INDIA, Hormavu, Bengaluru 560 043</a></p>

          <p><strong>PHONE</strong></p>
          <p><a href="tel:+918374057123">+91-83740 57123</a></p>

          <p><strong>SOCIALS</strong></p>
          <p>
            <a href="#">Instagram</a>, <a href="#">LinkedIn</a>, <a href="#">Facebook</a>, 
            <a href="#"> Pintrest</a>, <a href="#">Youtube</a>
          </p>
        </div>
      </div>

      <div className="right-section">
        <h1 className="contact-title">CONTACT US</h1>
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>FULL NAME</label>
              <input type="text" placeholder="Enter your full name" />
            </div>
            <div className="form-group">
              <label>COMPANY NAME</label>
              <input type="text" placeholder="Enter the name of your company" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>E-MAIL</label>
              <input type="email" placeholder="Enter your e-mail address" />
            </div>
            <div className="form-group">
              <label>PHONE</label>
              <input type="text" placeholder="Enter your phone number" />
            </div>
          </div>

          <div className="form-group">
            <label>CONTACT ME VIA</label>
            <div className="radio-group">
              <label><input type="radio" name="contact-via" /> E-mail</label>
              <label><input type="radio" name="contact-via" /> Phone</label>
            </div>
          </div>

          <div className="form-group">
            <label>SUBJECT</label>
            <input type="text" placeholder="I want to talk about..." />
          </div>

          <div className="form-group">
            <label>MESSAGE</label>
            <textarea placeholder="Write your message"></textarea>
          </div>

          <button type="submit" className="send-button">SEND</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
