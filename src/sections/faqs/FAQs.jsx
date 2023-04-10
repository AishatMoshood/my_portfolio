import {useEffect} from 'react';
import Aos from 'aos';
import faqs from "./data";
import FAQ from './FAQ';
import "aos/dist/aos.css";
import "./faqs.css";

const FAQs = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  })

  return (
      <section id="faqs">
          <h2>Frequently Asked Questions</h2>
          <p>Here are some Questions I usually get. Click to toggle the answer, and if you will have some more questions, shoot me a message from the contact section</p>
          <div className="container faqs__container" data-aos="fade-in">
            {
             faqs.map(faq => (
              <FAQ key={faq.id} faq={faq}/>
              )) 
            }
          </div>
      </section>
  )
}

export default FAQs;