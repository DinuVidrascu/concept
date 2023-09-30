import React from 'react'
import emailjs from "@emailjs/browser";

import imgLine from '../../img/random-lines.svg'
import imgArrow from '../../img/curved-arrow.svg';

import './contact.css';

function Contact() {


   return (
      <section className="contact section" id="contact">
         <div className="contact__container grid">
            <div className="contact__data">
               <h2 className="section__title-2">
                  <span>Contact Me.</span>
               </h2>
               <p className="contact__description-1">
                  I will read all emails. Send me any
                  message you want and I'll get back to you.
               </p>
               <p className="contact__description-2">
                  I need your <b>Name</b> and <b>Email Address</b>, but
                  you won't receive anything other than your reply.
               </p>

               <div className="geometric-box"></div>
            </div>
            <div className="contact__mail">
               <h2 className="contact__title">
                  Send Me A Message
               </h2>

               <form action="" className="contact__form" id="contact-form">
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
                        Does not send emails
                     </p>
                     <p className="contact__social-description-2">
                        Write me on my social networks
                     </p>
                  </div>

                  <div className="contact__social-links">
                     <a href="#" target="_blank" className="contact__social-link">
                        <i className="ri-facebook-circle-line"></i>
                     </a>
                     <a href="#" target="_blank" className="contact__social-link">
                        <i className="ri-instagram-line"></i>
                     </a>
                     <a href="#" target="_blank" className="contact__social-link">
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