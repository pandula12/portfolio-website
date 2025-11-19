import React, { useEffect, useRef } from 'react';
import './WorkExperience.css';
import ionesoftLogo from '../assets/ionesoft-logo.png';
import lbConnectLogo from '../assets/lbconnect-logo.png'; 

const workData = [
  {
    id: 1,
    company: "LB Connect",
    logo: lbConnectLogo,
    position: "Software Engineer",
    duration: "Dec 2024 – Dec 2025",
    location: "Ontario, Canada",
    summary: "I worked on a peer-to-peer lending platform using Laravel, MySQL, and AWS, handling a wide range of tasks from UI updates to security patches. My biggest impact was on developer and QA efficiency: I built CI/CD pipelines using Docker and Gitea that cut our deployment time by 85%. I also improved our testing process by building custom QA tools and converting old SQL scripts into standard Laravel migrations to automate environment resets."
  },
  {
    id: 2,
    company: "iOneSoft Solutions",
    logo: ionesoftLogo,
    position: "Software Engineer Trainee",
    duration: "Nov 2023 - Feb 2024",
    location: "Colombo, Sri Lanka",
    summary: "I built a full-stack HR Management System using ASP.NET, Angular, Microsoft SQL Server, and Microsoft Azure. I crafted a high-performance database, set up secure, role-based authentication with an email recovery system, and designed an intuitive interface for managing employee records and leave requests. By automating key workflows and notifications, I helped streamline HR operations and boost overall efficiency."
  }
];

const WorkExperience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.work-content');
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('animate');
                }, index * 200);
            });
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="work" className="work-section" ref={sectionRef}>
      {workData.map((job) => (
        <div className="work-content" key={job.id}>
          <div className="work-logo">
            <img src={job.logo} alt={job.company} />
          </div>
          <div className="work-info">
            <h1 className="work-position">{job.position}</h1>
            <h2 className="work-duration">{job.duration}</h2>
            <h2 className="work-location">{job.location}</h2>
            <p className="work-summary">
              {job.summary}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;