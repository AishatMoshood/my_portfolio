import React from 'react';
import contacts from './data';
import "./contact.css";

const Contact = () => {
  return (
    <div>
        <section id="contact">
            <h2>Get in touch</h2>
            <p>Shoot me a message via any of the links below!</p>

            <div className="container contact__container" data-aos="fade-up">
              {
                contacts.map(contact => <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer">{contact.icon}</a>)
              }
            </div>
        </section>
    </div>
  )
}

export default Contact;