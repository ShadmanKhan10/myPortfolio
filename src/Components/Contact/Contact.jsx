// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import profile from "../../assets/profile.png";
// import mail from "../../assets/mail.png";
// import message from "../../assets/message.png";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./Contact.css";

// export default function Contact() {
//   const form = useRef();
//   const [sendingMail, setSendingMail] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const notifySuccess = () => toast("Email sent Successfully");
//   const notifyFailure = () => toast("Error sending email");

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setSendingMail(true);

//     emailjs
//       .sendForm(
//         "service_i072z9o",
//         "template_7adl373",
//         form.current,
//         "0SgWQmcO4Tvr5YxaX"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           // Reset form fields
//           form.current.reset();
//           // Show success alert
//           // alert("Email sent successfully");
//           setSuccess(true);
//           notifySuccess();
//           setSendingMail(false);
//         },
//         (error) => {
//           console.log(error.text);
//           // Show error alert
//           // alert("Error sending email");
//           notifyFailure();
//           setSendingMail(false);
//         }
//       );
//   };

//   return (
//     <>
//       {success ? (
//         <ToastContainer
//           position="top-center"
//           autoClose={1000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="dark"
//         />
//       ) : (
//         <ToastContainer
//           position="top-center"
//           autoClose={1000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="dark"
//         />
//       )}
//       <div className="contact-container">
//         <h1 className="contact-heading-text">Contact</h1>
//         <div className="contact-content">
//           <div className="contact-content-left">
//             <form className="form-container" ref={form} onSubmit={sendEmail}>
//               <div className="input-div">
//                 <img className="input-img" src={profile} alt="name" />
//                 <input
//                   className="input-field"
//                   type="text"
//                   placeholder="Name"
//                   name="from_name"
//                 />
//               </div>
//               <div className="input-div">
//                 <img className="input-img" src={mail} alt="name" />

//                 <input
//                   className="input-field"
//                   type="email"
//                   placeholder="Email"
//                   name="to_email"
//                 />
//               </div>
//               <div className="input-div">
//                 <img className="message-img" src={message} alt="name" />
//                 <textarea
//                   className="message-field"
//                   name="message"
//                   placeholder="Message..."
//                 />
//               </div>
//               <button type="submit" className="submit-btn">
//                 {!sendingMail ? (
//                   "Send Message"
//                 ) : (
//                   <img
//                     className="loading"
//                     src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif"
//                     alt="loading"
//                   />
//                 )}
//               </button>
//             </form>
//           </div>
//           <div className="contact-content-right">
//             <img
//               className="contact-gif"
//               src="https://www.ujudebug.com/wp-content/uploads/2022/07/contact-us-content.gif"
//               alt="contact"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import profile from "../../assets/profile.png";
import mail from "../../assets/mail.png";
import message from "../../assets/message.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

export default function Contact() {
  const form = useRef();
  const [sendingMail, setSendingMail] = useState(false);

  const notifySuccess = () =>
    toast.success("Email sent successfully!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      theme: "dark",
    });

  const notifyFailure = () =>
    toast.error("Error sending email!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      theme: "dark",
    });

  // Function to send email using EmailJS
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
          form.current.reset(); // Reset form fields
          notifySuccess(); // Show success toast
          setSendingMail(false); // Reset sending state
        },
        (error) => {
          console.log(error.text);
          notifyFailure(); // Show failure toast
          setSendingMail(false); // Reset sending state
        }
      );
  };

  return (
    <>
      {/* ToastContainer will show both success and error toasts */}
      <ToastContainer />

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
                  required
                />
              </div>
              <div className="input-div">
                <img className="input-img" src={mail} alt="name" />
                <input
                  className="input-field"
                  type="email"
                  placeholder="Email"
                  name="to_email"
                  required
                />
              </div>
              <div className="input-div">
                <img className="message-img" src={message} alt="message" />
                <textarea
                  className="message-field"
                  name="message"
                  placeholder="Message..."
                  required
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
