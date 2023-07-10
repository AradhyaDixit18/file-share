import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './Contact.css';
import Navbar from "../Navbar/Navbar";
// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

 
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm("service_3clznej","template_uy9hwga",e.target,"BHX1Ca4sSWoOpfmMq")
        .then(
          (result) => {
            console.log(result.text);
            form.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
      
        document.getElementById('name').value='';
        document.getElementById('msg').value='';
        document.getElementById('mail').value='';
        
  };

  return (
    <>
    <Navbar/>
    <div className="contact-form h-98  w-full">
          <div className="form-main h-50">
      <div className="main-wrapper w-100">
        <h2 className="form-head">Contact us</h2>
        <form className="form-wrapper" onSubmit={sendEmail}>
          <div className="form-card">
            <input
              className="form-input"
              type="text"
              name="from_name"
              required="required"
              id="name"
            />
            <label className="form-label" htmlFor="full_name">Full Name</label>
          </div>

          <div className="form-card">
            <input
              className="form-input"
              type="email"
              name="user_name"
              required="required"
              id="mail"
            />
            <label className="form-label" htmlFor="email">Email</label>
          </div>
          <div className="form-card">
            <textarea
              className="form-textarea"
              maxlength="420"
              rows="3"
              name="message"
              required="required"
              id="msg"

            ></textarea>
            <label className="form-textarea-label" htmlFor="message"
              >Message</label
            >
          </div>
          <div className="btn-wrap">
            <button type="submit"> Submit </button>
          </div>
        </form>
      </div>
      <pre className="text-white absolute copyright">  Copyright <span >&copy;</span> 2023 file-share</pre>
    </div>
    
    </div>
    </> 
  );
};

export default Contact;


