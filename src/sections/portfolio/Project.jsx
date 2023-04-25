import { useState } from 'react';
import Card from "../../components/Card/Card";

export const Project = ({project}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const contentToShow = isExpanded ? project.desc : truncate(project.desc, 90);

  return (
    <Card>
        {/* <div className="portfolio__project-image">
            <img src={project.image} alt="Portfolio project image" />
        </div> */}

        <h4 className="portfolio__project-title">{project.title}</h4>

        <div>
          <p>{contentToShow}</p>
          {!isExpanded && (
            <button onClick={() => setIsExpanded(true)} className='portfolio__project-show-btn'>Show More</button>
          )}
          {isExpanded && (
            <button onClick={() => setIsExpanded(false)} className='portfolio__project-show-btn'>Show Less</button>
          )}
        </div>

        <div className="portfolio__project-cta">
            <a href={project.demo} className="btn sm" target="_blank" rel='noopener noreferrer'>Demo</a>
            <a href={project.github} className="btn sm primary" target="_blank" rel='noopener noreferrer'>Github</a>
        </div>
    </Card>
  )
}

const truncate = (str, n) => {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
}



