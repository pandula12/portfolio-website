import React, { useEffect, useRef } from 'react';
import './WorkExperience.css';
import companyLogo from '../assets/ionesoft-logo.png';

const WorkExperience = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelector('.work-content').classList.add('animate');
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  return (
    <section id="work" className="work-section" ref={sectionRef}>
      <div className="work-content">
        <div className="work-logo">
          <img src={companyLogo} alt="iOneSoft Solutions" />
        </div>
        <div className="work-info">
          <h1 className="work-position">Software Engineering Trainee</h1>
          <h2 className="work-duration">Nov 2023 - Feb 2024</h2>
          <h2 className="work-location">Colombo, Sri Lanka</h2>
          <p className="work-summary">
          I built a full-stack HR Management System using ASP.NET, Angular, and Microsoft SQL Server, hosted on Microsoft Azure. I crafted a high-performance database, set up secure, role-based authentication with an email recovery system, and designed an intuitive interface for managing employee records and leave requests. By automating key workflows and notifications, I helped streamline HR operations and boost overall efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
