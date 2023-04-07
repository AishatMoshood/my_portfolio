import {HiDownload} from "react-icons/hi";
import AboutImage from "../../assets/about.jpg";
import CV from "../../assets/aishat_moshood_cv.pdf";
import data from "./data";
import './about.css';
import Card from "../../components/Card";

const About = () => {
  return (
    <div>
        <section id="about">
          <div className="container about__container">
            <div className="about__left">
              <div className="about__portrait">
                <img src={AboutImage} alt="About Image"/>
              </div>
            </div>

            <div className="about__right">
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

              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi voluptatem eius at repellat eos. Inventore dolorum eveniet atque maxime nostrum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem vel repellat magnam aut accusantium quod consequuntur deleniti nisi aliquid eaque quasi, odit cumque. Sit voluptate natus eveniet illum reiciendis. Ullam.</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quibusdam non recusandae debitis corrupti, ex dicta sapiente, rem, obcaecati quam vitae repudiandae soluta et odio ducimus iste praesentium consequatur! Possimus laudantium repellat porro in adipisci at magni quidem, tenetur optio eligendi, delectus suscipit eveniet eaque maxime ipsum doloribus doloremque pariatur?</p>

              <a href={CV} download className="btn primary">Download CV <HiDownload/> </a>
            </div>
          </div>
        </section>
    </div>
  )
}

export default About;