import React, { useState, useEffect, useRef } from 'react';
import '../css/About.css';
import SEO from '../components/SEO';

// Custom Hook for Animated Counters
const AnimatedCounter = ({ value, prefix = '', suffix = '', duration = 2000, useCommas=true }) => {
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
      {prefix}{useCommas ? count.toLocaleString() : count}{suffix}
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
      num: 377000, prefix: "", suffix: "+",
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
      num: 15000, prefix: "", suffix: "+",
      title: "Current Actives",
      desc: "Active members across chapters nationwide, driving meaningful impact each year."
    },
    {
      id:5,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <circle cx="12" cy="12" r="10"></circle>
  <line x1="2" y1="12" x2="22" y2="12"></line>
  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</svg>
      ),
      num: "1855", prefix: "", suffix: "",
      title: "Founding Date", 
      desc: "On June 28th, 1855, at Miami University in Ohio, the Sigma Chi Fraternity was founded."
    }
  ];

  return (
    <section className="about-trust-page">
      <SEO 
    title="Our Story" 
    description="Learn about the history, core values, and the Jordan Standard of the Sigma Chi Epsilon Upsilon chapter at Arizona State University."
    url="/about" 
/>
      {/* 1. ASU Narrative Section */}
      <div className="about-narrative">
        <div className="about-narrative__container">
            <h1 className="about-narrative__title">The Legacy of the Epsilon Upsilon Chapter            </h1>
            <div className="about-narrative__content">
                <p>
                Our story began at the site known today as the Governor Benjamin Mouer House, which served as the foundational home base for our Brotherhood. Initially organized as a colony under the designation Sigma Chi Sigma, the dedicated gentlemen of that era worked tirelessly through the late 1950s to secure our place within the National Fraternity. Through their resolve, they laid the cornerstone for what would become a pillar of excellence at Arizona State University.
                </p>
                <p>
                Following our successful chartering, the chapter transitioned to the monumental 606 E Alpha Drive. It was within those walls that the Epsilon Upsilon Chapter truly came into its own. For decades, 606 E Alpha Drive served as the backdrop for our most cherished traditions a place where lasting memories were forged, leaders of men were shaped and grew into brothers of character.
                </p>
                <p>After 606 E Alpha Drive, our chapter no longer had a central home, but our commitment never wavered. Through philanthropy and a steadfast dedication to service, we continued to uplift our campus and the Tempe community. Now, we proudly return to Arizona State University to begin the rechartering process, restoring the legacy of Sigma Chi and setting the foundation for the next generation of leaders of men.</p>
            </div>
        </div>
      </div>

      {/* 2. Stats Grid Section */}
      <div className="about-cards">
        <div className="about-cards__header">
            <h2 className="about-cards__heading">The Sigma Chi Standard</h2>
            <p className="about-cards__subheading">
            A look at the numbers, history, and values that drive our Fraternity.
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
                      useCommas={card.id !== 5} // Don't use commas for the founding year
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