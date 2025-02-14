import React, { useEffect, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.contact-card');
      cards.forEach((card) => observer.observe(card));
    }
    return () => {
      if (sectionRef.current) {
        const cards = sectionRef.current.querySelectorAll('.contact-card');
        cards.forEach((card) => observer.unobserve(card));
      }
    };
  }, []);

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <h1 className="contact-heading">Contact</h1>
      <p className="contact-intro">
        Let's get in touch! Feel free to reach out via email or connect on LinkedIn and GitHub.
      </p>
      <div className="contact-cards">
        <div className="contact-card">
          <a
            href="mailto:pandulagajadeera09@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-icon">
              {/* Email Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="contact-svg email-svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="contact-details">
              <h2>Email</h2>
              <p>pandulagajadeera09@gmail.com</p>
            </div>
          </a>
        </div>
        <div className="contact-card">
          <a
            href="https://www.linkedin.com/in/pandula-gajadeera/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-icon">
              {/* LinkedIn Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="contact-svg linkedin-svg"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88zm-46.44-345a53.79 53.79 0 1 1 53.79-53.79 53.79 53.79 0 0 1-53.79 53.79zM447.9 448h-92.68V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 37.7-55.7 76.7V448h-92.68V148.9h88.98v40.8h1.3c12.4-23.4 42.6-48.3 87.7-48.3 93.9 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </div>
            <div className="contact-details">
              <h2>LinkedIn</h2>
              <p>pandula-gajadeera</p>
            </div>
          </a>
        </div>
        <div className="contact-card">
          <a
            href="https://github.com/pandula12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-icon">
              {/* GitHub Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="contact-svg github-svg"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.91.57.11.78-.25.78-.56 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.73-1.53-2.56-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11.03 11.03 0 012.89-.39c.98 0 1.97.13 2.89.39 2.2-1.5 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.4-5.25 5.68.41.35.78 1.04.78 2.1 0 1.52-.01 2.75-.01 3.12 0 .31.21.67.79.55C20.71 21.39 24 17.08 24 12c0-6.35-5.15-11.5-11.5-11.5z"
                />
              </svg>
            </div>
            <div className="contact-details">
              <h2>GitHub</h2>
              <p>pandula12</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
