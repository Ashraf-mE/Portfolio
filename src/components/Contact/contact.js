import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = ({isLightMode}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jly33sm", "template_c4avqpi", form.current, {
        publicKey: "a-C7U1Ykf8jLweNBW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <h2 className="contactPageTitle">Contact Me</h2>
      <span className="contactDesc">
        Please fill out the form below to discuss any work oppurtunities
      </span>

      <form ref={form} onSubmit={sendEmail} className="contactForm">
        <input type="text" className={isLightMode?"name-lm":"name"} placeholder="Your Name" name="your_name" required/>
        <input type="email" className={isLightMode?"email-lm":"email"} placeholder="Your Email" name="your_email" required/>
        <textarea
          name="message"
          className={isLightMode?"msg-lm":"msg"}
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" value="Send" className="submitBtn">
          Submit
        </button>
        <div className="links">
          <img
            src={`${process.env.PUBLIC_URL}/assets/facebook-icon.png`} 
            alt="facebook"
            className="link"
          />
          <img src={`${process.env.PUBLIC_URL}/assets/twitter.png`}  alt="twitter" className="link" />
          <img src={`${process.env.PUBLIC_URL}/assets/youtube.png`}  alt="youtube" className="link" />
          <img src={`${process.env.PUBLIC_URL}/assets/instagram.png`}  alt="instagram" className="link" />
        </div>
      </form>
    </section>
  );
};

export default Contact;
