import React from 'react';
import "../css/Class.css";

// Importing the images directly
import heroImg from "../images/IMG_7115.jpg"
import scrap1 from '../images/IMG_7117.jpg';
import scrap2 from '../images/IMG_7119.jpg';
import scrap3 from '../images/IMG_7120.jpg';
import houseImg from '../images/IMG_7118.JPG';
import oldalum from "../images/oldalum.jpg";
import modernImg from '../images/IMG_7121.jpg';

const AlumniPage = () => {
  // Array of scrapbook images using the imported variables. 
  const galleryImages = [
    { src: scrap1, alt: "Brothers hanging out" },
    { src: scrap2, alt: "Water fights and horses" },
    { src: scrap3, alt: "Formal events" },
    { src: oldalum, alt: "Alumni Next to Car" },
  ];

return (
    <div className="alumni-page">
        
        {/* 1. Hero Section */}
        <section 
            className="alumni-hero" 
            style={{ backgroundImage: `url(${heroImg})` }}
        >
            <div className="alumni-hero__overlay">
                <h1 className="alumni-hero__title">Decades of Brotherhood</h1>
                <p className="alumni-hero__subtitle">
                    Honoring our roots, celebrating lifelong bonds, and preserving the traditions that built us.
                </p>
            </div>
        </section>

        {/* 2. Auto-Scrolling Scrapbook Gallery */}
        <section className="scrapbook-gallery">
            <h2 className="scrapbook-gallery__title">From the Archives</h2>
            <div className="scrapbook-gallery__container">
                <div className="scrapbook-gallery__track">
                    {/* Render images twice for the seamless CSS infinite scroll */}
                    {[...galleryImages, ...galleryImages].map((img, index) => (
                        <div className="scrapbook-gallery__item" key={index}>
                            <img 
                                src={img.src} 
                                alt={img.alt} 
                                className="scrapbook-gallery__image" 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 3. Chapter History Section */}
        <section className="history-split">
            <div className="history-split__content">
                <h2 className="history-split__title">Our Chapter History</h2>
                <p className="history-split__text">
                    Since our founding at Arizona State University in 1960, the Sigma Chi chapter has been a cornerstone of campus life. Through the decades, hundreds of young men have passed through our halls, forging bonds that easily outlast their college years. 
                </p>
                <p className="history-split__text">
                    From monumental brotherhoods to philanthropic milestones, our history is written by the brothers who lived it. The traditions we started in the 60s and 70s laid the foundation for the thriving chapter we have today.
                </p>
            </div>
            <div className="history-split__media">
                {/* Using the imported houseImg variable */}
                <img src={houseImg} alt="Vintage Fraternity House Group" className="history-split__image" />
            </div>
        </section>

        {/* 4. Lifelong Bonds & Active Alumni (Present Day) */}
        <section className="alumni-engagement">
            <div className="alumni-engagement__media">
                {/* Using the imported modernImg variable */}
                <img src={modernImg} alt="Sigma Chi Michael F. Haley Memorial Dinner" className="alumni-engagement__image" />
            </div>
            <div className="alumni-engagement__content">
                <h2 className="alumni-engagement__title">Lifelong Bonds & Active Alumni</h2>
                <p className="alumni-engagement__text">
                    Graduation isn't the end; it's the beginning of a lifetime of brotherhood. Our alumni network remains highly active, gathering for tailgates, annual retreats, and memorial dinners to honor brothers who have passed.
                </p>
                <p className="alumni-engagement__text">
                    Stay connected, and help us ensure the next generation of brothers receives the same incredible experience we did.
                </p>
                <div className="alumni-engagement__actions">
                    <a href="/contact" className="alumni-engagement__button alumni-engagement__button--primary">Contact Us</a>
                    <a href="/donate" className="alumni-engagement__button alumni-engagement__button--secondary">Donate to the Chapter</a>
                </div>
            </div>
        </section>

    </div>
);
};

export default AlumniPage;