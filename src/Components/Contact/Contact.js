import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Contact.css';
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact">

        <div className="contact-container">
          <div className="contact-info">
            <h4>Contact Infomation</h4>
            <p>Fill up the form and then click send!</p>
            <div className="icon-text">
              <i className="icon"><AiIcons.AiFillPhone /></i>
              <span>+000-000-0000</span>
            </div>
            <div className="icon-text">
              <i className="icon"><AiIcons.AiFillMail /></i>
              <span>admin@admin.com</span>
            </div>
            <div className="icon-text">
              <i className="icon"><SiIcons.SiGooglemaps /></i>
              <span>Japan Tokyo</span>
            </div>
          </div>

          <form className="form">
            <div className="contact-form-group">
              <label>First Name</label>
              <input type="text" />
            </div>
            <div className="contact-form-group">
              <label>Last Name</label>
              <input type="text" />
            </div>
            <div className="contact-form-group">
              <label>E-mail</label>
              <input type="email" />
            </div>
            <div className="contact-form-group">
              <label>Phone</label>
              <input type="tel" />
            </div>
            <div className="contact-form-group">
              <label>Are you having any trouble?</label>
              <div className="radio-btns">
                <div className="radio-btn">
                  <input type="radio" /><label>Not Available</label>
                </div>
                <div className="radio-btn">
                  <input type="radio" /><label>About Shifts</label>
                </div>
                <div className="radio-btn">
                  <input type="radio" /><label>Other</label>
                </div>
              </div>
            </div>
            <div className="contact-form-group">
              <label>Message</label>
              <textarea className="text-area"></textarea>
            </div>
            <div className="contact-form-group">
              <button className="send-message-btn" onClick={() => alert('お問い合わせありがとうございます。')}>Send Message</button>
            </div>
          </form >
        </div>

      </div >
    </>
  )
};

export default Contact;