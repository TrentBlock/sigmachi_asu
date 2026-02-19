import React from 'react';
import '../css/About.css';

const About = () => {
  const cardData = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      stat: "300,000+",
      title: "Living Alumni",
      desc: "A massive, active national network of brothers supporting each other across every industry and walk of life."
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
      stat: "June 28th, 1855",
      title: "Sigma Chi Is Founded",
      desc: "Sigma Chi was founded at Miami (Ohio) University, Oxford, Ohio on June 28th, 1855."
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
      stat: "3 Core Values",
      title: "Our Guiding Principles",
      desc: "Friendship, Justice, and Learning dictate our actions, shape our character, and define what true brotherhood means."
    },
    {
      id: 4,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
          <rect x="9" y="9" width="6" height="6"></rect>
          <line x1="9" y1="1" x2="9" y2="4"></line>
          <line x1="15" y1="1" x2="15" y2="4"></line>
          <line x1="9" y1="20" x2="9" y2="23"></line>
          <line x1="15" y1="20" x2="15" y2="23"></line>
          <line x1="20" y1="9" x2="23" y2="9"></line>
          <line x1="20" y1="14" x2="23" y2="14"></line>
          <line x1="1" y1="9" x2="4" y2="9"></line>
          <line x1="1" y1="14" x2="4" y2="14"></line>
        </svg>
      ),
      stat: "1855",
      title: "National Founding",
      desc: "Established at Miami University in Oxford, Ohio, by seven young men of different temperaments, talents, and convictions."
    },
    {
      id: 5,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      ),
      stat: "$20M+",
      title: "Philanthropic Impact",
      desc: "Sigma Chi's dedicated national commitment to the Huntsman Cancer Institute, driving the generation to end cancer."
    },
    {
      id: 6,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
      stat: "100%",
      title: "Values-Based Leaders",
      desc: "Committed to personal growth, academic excellence, and developing well-rounded Sun Devils through a chapter-wide mentorship culture."
    }
  ];

  return (
    <section className="about-cards">
      <div className="about-cards__header">
        <h2 className="about-cards__heading">The Sigma Chi Standard</h2>
        <p className="about-cards__subheading">
          A look at the numbers, history, and values that drive our national brotherhood.
        </p>
      </div>
      
      <div className="about-cards__grid">
        {cardData.map((card) => (
          <div className="info-card" key={card.id}>
            <div className="info-card__icon-wrapper">
              {card.icon}
            </div>
            <div className="info-card__content">
              <span className="info-card__stat">{card.stat}</span>
              <h3 className="info-card__title">{card.title}</h3>
              <p className="info-card__desc">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;