import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import profile from "../../assets/profile.png";
import mail from "../../assets/mail.png";
import message from "../../assets/message.png";
import "./Contact.css";

export default function Contact() {
  const form = useRef();
  const [sendingMail, setSendingMail] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSendingMail(true);

    emailjs
      .sendForm(
        "service_i072z9o",
        "template_7adl373",
        form.current,
        "0SgWQmcO4Tvr5YxaX"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Reset form fields
          form.current.reset();
          // Show success alert
          alert("Email sent successfully");
          setSendingMail(false);
        },
        (error) => {
          console.log(error.text);
          // Show error alert
          alert("Error sending email");
          setSendingMail(false);
        }
      );
  };

  return (
    <>
      <div className="contact-container">
        <h1 className="contact-heading-text">Contact</h1>
        <div className="contact-content">
          <div className="contact-content-left">
            <form className="form-container" ref={form} onSubmit={sendEmail}>
              <div className="input-div">
                <img className="input-img" src={profile} alt="name" />
                <input
                  className="input-field"
                  type="text"
                  placeholder="Name"
                  name="from_name"
                />
              </div>
              <div className="input-div">
                <img className="input-img" src={mail} alt="name" />

                <input
                  className="input-field"
                  type="email"
                  placeholder="Email"
                  name="to_email"
                />
              </div>
              <div className="input-div">
                <img className="message-img" src={message} alt="name" />
                <textarea
                  className="message-field"
                  name="message"
                  placeholder="Message..."
                />
              </div>
              <button type="submit" className="submit-btn">
                {!sendingMail ? (
                  "Send Message"
                ) : (
                  <img
                    className="loading"
                    src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif"
                    alt="loading"
                  />
                )}
              </button>
            </form>
          </div>
          <div className="contact-content-right">
            <img
              className="contact-gif"
              src="https://www.ujudebug.com/wp-content/uploads/2022/07/contact-us-content.gif"
              alt="contact"
            />
          </div>
        </div>
      </div>
    </>
  );
}
