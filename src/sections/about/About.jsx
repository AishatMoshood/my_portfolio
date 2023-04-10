import {HiDownload} from "react-icons/hi";
import AboutImage from "../../assets/swing-img.jpg";
import CV from "../../assets/aishat-moshood-cv.pdf";
import data from "./data";
import './about.css';
import Card from "../../components/Card/Card";

const About = () => {
  return (
    <div>
        <section id="about">
          <div className="container about__container">
            <div className="about__left" data-aos="fade-right">
              <div className="about__portrait">
                <img src={AboutImage} alt="About Image"/>
              </div>
            </div>

            <div className="about__right" data-aos="fade-left">
              <h2>About me</h2>

              <div className="about__cards">
                {
                  data.map(
                    item => (
                    <Card key={item.id} className="about__card"> 
                      <span className="about__card-icon">{item.icon}</span>
                      <h5>{item.title}</h5>
                      <small>{item.desc}</small>
                    </Card>
                  ))
                }
              </div>

              <p>I am a Software Engineer with two years of experience in Software Engineering. I have a passion for Web application development and solving programming related problems, and I love using my skills to build web applications that are scalable and responsive. In my free time, I enjoy surfing the internet and reading books.</p>

              <p>My skills include Backend, Frontend and Fullstack Development, which I have developed through my work experience and education. I am proficient in Core Java, Spring framework, Javascript, React.js, to name a few. Find below my resume/CV, it details my skills nad experience.</p>

              <a href={CV} download className="btn primary">Download CV <HiDownload/> </a>
            </div>
          </div>
        </section>
    </div>
  )
}

export default About;