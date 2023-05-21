import "./FormStyles.css";

import React from 'react';

const Form = () => {
  return (
        <div className="form">
          <form action="https://formsubmit.co/5d6dc8a4bf75336266ab6eefce55ff33" method="post">
            {/* formSubmit is used to send form data to email */}
            {/* here we will add thanks page later with the help of docs in formsubmit */}
            <label>Your Name</label>
            <input 
            type="text"
            name="username"
            placeholder="Username"
            id="username"
            autoComplete="off"
            required
            ></input>
            <label>Email</label>
            <input 
            type="email"
            name="email"
            placeholder="Your Email"
            id="email"
            autoComplete="off"
            required
            ></input>
            <label>Subject</label>
            <input 
            type="text"
            name="subject"
            placeholder="Subject"
            id="subject"
            autoComplete="off"
            required
            ></input>
            <label>Message</label>
            <textarea 
            rows="6" 
            name="textarea"
            placeholder="Type your message here"
            id="textarea"
            autoComplete="off"
            ></textarea>
            <button className="btn">Submit</button>
          </form>
        </div>
  );
};

export default Form;
