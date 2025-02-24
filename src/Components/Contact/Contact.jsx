import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import facebookIcon from '../../assets/facebookIcon.png';
import githubIcon from '../../assets/githubIcon.png';

//for icons iconscout.com

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_udjuwxb', 'template_83om05e', form.current, {

          publicKey: '5z_mezFHoxvpvmItB',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Email sent !");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  return (
    <section id='contact-page'>
        <div id='contact'>
            <h1 className='contact-page-title'>Contact Me</h1>
            <span className='contact-desc'>To discuss about the project!</span>
            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                <textarea className='msg' name='message' rows='5' placeholder='Your Message' />
                <button type='submit' value='Send' className='submit-btn'>Send Message</button>
                <div className='links'>
                    <a href="https://www.facebook.com/bibek.bibekbika" target='_blank'><img  src={facebookIcon} alt='Facebook' className='link' /></a>
                    <a href="https://github.com/bibek-b" target='_blank'><img src={githubIcon} alt='Twitter' className='link' /></a>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact;