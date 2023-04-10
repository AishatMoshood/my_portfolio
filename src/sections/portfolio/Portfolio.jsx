import React, { useState} from 'react';
import Projects from './Projects';
import ProjectsCategories from './ProjectsCategories';
import data from './data';
import "./portfolio.css";

const Portfolio = () => {
  const [projects, setProjects] = useState(data);
  const categories = data.map(item => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];

  const filterProjectsHandler = (category) => {
    if(category === "all"){
      setProjects(data);
      return;
    }

    const filterProjects = data.filter(project => project.category === category);
    setProjects(filterProjects);
  }

  return (
    <div>
    <section id="portfolio">
        <h2>Recent Projects</h2>
        <p>Check out some of the projects I recently worked on. Use these buttons to toggle the different categories</p>

        <div className='container portfolio__container'>
          <ProjectsCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler}/>
          <Projects projects={projects}/>
        </div>
    </section>
</div>
  )
}

export default Portfolio;