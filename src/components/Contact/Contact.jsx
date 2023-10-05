import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import imgArrow from '../../img/curved-arrow.svg';

import './contact.css'

function Contact() {

   const form = useRef();
   const contactMessage = document.getElementById('contact-message')


   const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_tfxe51b', 'template_c6juncd', form.current, 'dcRzeFvpcJ8dPCNa')
         //dcRzeFvpcJ8dPCNai//
         .then(() => {
            // Show sent message
            contactMessage.textContent = 'Message sent successfully ✅'

            setTimeout(() => {
               contactMessage.textContent = ''
            }, 5000)

            // Clear input fields
            e.target.reset()

         }, () => {
            // Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'
         })
      e.target.reset()
   };

   return (
      <section className="contact section" id="contact">
         <div className="contact__container grid">
            <div className="contact__data">
               <h2 className="section__title-2">
                  <span>Contact Me.</span>
               </h2>
               <p className="contact__description-1">
                  I will read all the emails.
                  Send me any message you want and I will reply.
               </p>
               <p className="contact__description-2">
                  To send an email, you need your <b>Name</b> and <b>Email Address</b>,
                  and don't forget to write me a message.
               </p>

               <div className="geometric-box"></div>
            </div>
            <div className="contact__mail">
               <h2 className="contact__title">
                  Send Me A Message
               </h2>
               <form action="" className="contact__form" id="contact-form"
                  ref={form}
                  onSubmit={sendEmail}>
                  <div className="contact__group">
                     <div className="contact__box">
                        <input type="text" name="user_name" className="contact__input" id="name" required
                           placeholder="First Name" />
                        <label for="name" className="contact__label">First Name</label>
                     </div>

                     <div className="contact__box">
                        <input type="email" name="user_email" className="contact__input" id="email" required
                           placeholder="Email Address" />
                        <label for="email" className="contact__label">Email Address</label>
                     </div>

                     <div className="contact__box">
                        <input type="text" name="user_subject" className="contact__input" id="subject" required
                           placeholder="Subject" />
                        <label for="subject" className="contact__label">Subject</label>
                     </div>

                     <div className="contact__box contact__area">
                        <textarea name="user_message" className="contact__input" id="message" required
                           placeholder="Message"></textarea>
                        <label for="message" className="contact__label">Message</label>
                     </div>

                     <p className="contact__message" id="contact-message"></p>

                     <button className="contact__button button">
                        <i className="ri-send-plane-line"></i>Send Message
                     </button>
                  </div>
               </form>
            </div>
            <div className="contact__social">
               <img src={imgArrow} alt="" className="contact__social-arrow" />

               <div className="contact__social-data">
                  <div>
                     <p className="contact__social-description-1">
                        If the email was not sent,
                        or you do not want to write the email
                     </p>
                     <p className="contact__social-description-2">
                        Write me on my social networks
                     </p>
                  </div>

                  <div className="contact__social-links">
                     <a href="https://www.facebook.com/dinu.vidrascu.29" target="_blank" className="contact__social-link">
                        <i className="ri-facebook-circle-line"></i>
                     </a>
                     <a href="https://www.instagram.com/dinu.vidrascu/" target="_blank" className="contact__social-link">
                        <i className="ri-instagram-line"></i>
                     </a>
                     <a href="https://www.linkedin.com/in/dinu-vidrascu-a922b8226/" target="_blank" className="contact__social-link">
                        <i className="ri-linkedin-box-line"></i>
                     </a>
                  </div>
               </div>

            </div>
         </div>
      </section>
   )
}

export default Contact