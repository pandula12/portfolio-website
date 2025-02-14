import React, { useEffect, useRef } from 'react';
import './Education.css';
import universityLogo from '../assets/university-logo.png';
const Education = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelector('.education-content').classList.add('animate');
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section id="education" className="education-section" ref={sectionRef}>
      <div className="education-content">
        <div className="education-logo">
          <img src={universityLogo} alt="The University of Adelaide" />
        </div>
        <div className="education-info">
          <h1 className="education-program">Bachelor of Software Engineering (Honours)</h1>
          <h2 className="education-duration">2021 – 2024</h2>
          <h2 className="education-achievement">Graduated with First Class Honours</h2>
        </div>
      </div>
    </section>
  );
};
export default Education;
