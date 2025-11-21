import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
import maptekLogo from '../assets/maptek-logo.png';
import maptekTablet from '../assets/maptek-tablet.jpg';
import skyCeramicsLogo from '../assets/sky-ceramics-logo.jpg';
import skyCeramicsScreenshot from '../assets/skyceramics-screenshot.png';
import microservicesIcon from '../assets/microservices-icon.png';
import dockerKubernetes from '../assets/docker-kubernetes.jpg';
import weatherIcon from '../assets/weather-icon.png';
import weatherSs from '../assets/weather-ss.png';

const projectsData = [
  {
    id: 1,
    title: "Maptek - Geologist Logging Application",
    coverImage: maptekLogo,
    additionalImage: maptekTablet,
    description: "Collaborated with Maptek, an Adelaide-based mining software solutions company, to develop a geologist logging application that streamlines core logging projects during mining exploration. I built an intuitive, user-friendly UI using Angular for Chromebooks and tablets in remote locations, integrated Node.js with Google services (OAuth 2.0, Google Drive API, Google Sheets API), and implemented a robust SQL Server database. Agile methodologies ensured continuous improvement based on geologists’ feedback, with deployment automated via GitHub Actions and hosted on Microsoft Azure.",
    links: {}
  },
  {
    id: 2,
    title: "Business Website - Sky Ceramics",
    coverImage: skyCeramicsLogo,
    additionalImage: skyCeramicsScreenshot,
    description: "Developed and deployed a modern, professional website for Foshan Sky Ceramics using Angular. The project emphasizes a responsive design and modern UI/UX practices, delivering an optimal viewing experience, enhanced accessibility, and improved user engagement for the company’s online presence.",
    links: { github: "https://github.com/pandula12/skyceramics-website" }
  },
  {
    id: 3,
    title: "Microservices Project",
    coverImage: microservicesIcon,
    additionalImage: dockerKubernetes,
    description: "Created a microservices architecture demo using Flask to showcase modern DevOps practices. The project features a gateway alongside multiple independent and dependent services, all containerized with Docker and deployed via Kubernetes. This demonstration highlights the scalability and maintainability benefits of microservices.",
    links: { github: "https://github.com/pandula12/microservices" }
  },
  {
    id: 4,
    title: "Weather Visualizer",
    coverImage: weatherIcon,
    additionalImage: weatherSs,
    description: "Built a responsive weather visualizer using Next.js, designed to display real-time weather data enhanced with dynamic visual effects and animations. This application integrates the OpenWeatherMap API, utilizing user location to provide accurate, localized forecasts. A key feature is the mock scenario selector, allowing users to explore different weather conditions and their corresponding visual representations. The project is deployed seamlessly on Vercel, leveraging GitHub integration for continuous integration and delivery (CI/CD).",
    links: { github: "https://github.com/pandula12/weather-visualizer" }
  }
];

const Projects = () => {
  const sectionRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    const cards = sectionRef.current.querySelectorAll('.project-card');
    cards.forEach(card => observer.observe(card));
    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeProject]);

  const openProject = (project) => {
    setActiveProject(project);
  };

  const closeModal = () => {
    setActiveProject(null);
  };

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <h1 className="projects-heading">Projects</h1>
      <div className="project-grid">
        {projectsData.map(project => (
          <div key={project.id} className="project-card" onClick={() => openProject(project)}>
            <div className="project-card-wrapper">
              <img src={project.coverImage} alt={project.title} className="project-cover" />
            </div>
          </div>
        ))}
      </div>
      {activeProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={e => e.stopPropagation()}>
            <button className="project-modal-close" onClick={closeModal}>×</button>
            <div className="project-modal-inner">
              <div className="project-modal-image-container">
                <img src={activeProject.additionalImage} alt={activeProject.title} className="project-modal-image" />
              </div>
              <div className="project-modal-text">
                <h2 className="modal-title">{activeProject.title}</h2>
                <p className="modal-description">{activeProject.description}</p>
                {activeProject.links.github && (
                  <a href={activeProject.links.github} target="_blank" rel="noopener noreferrer" className="modal-github-link">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="modal-github-icon" />
                    <span>View on GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
