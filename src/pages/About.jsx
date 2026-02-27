import React, { useState, useEffect, useRef } from 'react';
import '../css/About.css';

// Custom Hook for Animated Counters
const AnimatedCounter = ({ value, prefix = '', suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // easeOutExpo function for a smooth slow-down at the end
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * value));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, value, duration]);

  return (
    <span ref={counterRef}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const About = () => {
  const cardData = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      ),
      num: 32, prefix: "$", suffix: "M+",
      title: "Huntsman Cancer Institute",
      desc: "Total amount raised for the Huntsman Cancer Institute nationally since 2005."
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      num: 380000, prefix: "", suffix: "+",
      title: "Lifetime Initiates",
      desc: "Total lifetime initiates globally, forming an unparalleled network of lifelong support."
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
      num: 240, prefix: "", suffix: "+",
      title: "Active Chapters",
      desc: "Undergraduate chapters thriving across university campuses in North America."
    },
    {
      id: 4,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
      num: 31, prefix: "$", suffix: " Million",
      title: "Historic Pledge",
      desc: "Our record-breaking commitment to the new Sigma Chi Center for Advanced Therapeutics."
    }
  ];

  return (
    <section className="about-trust-page">
      
      {/* 1. ASU Narrative Section */}
      <div className="about-narrative">
        <div className="about-narrative__container">
            <h1 className="about-narrative__title">From 7th Street to 601 Alpha</h1>
            <div className="about-narrative__content">
                <p>
                    The story of the Epsilon Upsilon chapter is one of resilience, unwavering brotherhood, and a relentless pursuit of excellence. From our humble beginnings in the 1960s on 7th Street to establishing our permanent, state-of-the-art home at 601 Alpha Drive in the heart of the Greek Leadership Village, our physical journey mirrors our growth at Arizona State University.
                </p>
                <p>
                    Through decades of immense change, we have maintained an unbroken chain of values-based leadership. We don't just recruit students; we forge lifelong bonds. The legacy built by the generations of brothers before us continues to shape the character of our campus, our community, and the men who proudly wear the White Cross today.
                </p>
            </div>
        </div>
      </div>

      {/* 2. Stats Grid Section */}
      <div className="about-cards">
        <div className="about-cards__header">
            <h2 className="about-cards__heading">The Sigma Chi Standard</h2>
            <p className="about-cards__subheading">
            A look at the numbers, history, and values that drive our national brotherhood and philanthropic mission.
            </p>
        </div>
        
        <div className="about-cards__grid">
            {cardData.map((card) => (
            <div className="info-card" key={card.id}>
                <div className="info-card__icon-wrapper">
                {card.icon}
                </div>
                <div className="info-card__content">
                <span className="info-card__stat">
                    {/* The Animated Counter is utilized here */}
                    <AnimatedCounter 
                      value={card.num} 
                      prefix={card.prefix} 
                      suffix={card.suffix} 
                      duration={2500} 
                    />
                </span>
                <h3 className="info-card__title">{card.title}</h3>
                <p className="info-card__desc">{card.desc}</p>
                </div>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default About;