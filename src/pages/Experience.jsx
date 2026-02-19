import React from 'react';
import ExperienceItem from '../components/ExperienceItem';
import ExperienceImage from '../images/experiences/FMSC.webp';
import '../css/Experience.css';

function Experience() {
        const images = import.meta.glob('../images/experiences/*.{jpg,jpeg,png,webp}', { eager: true });

    const experiences = [
        {filename: "kkgphilo.webp", alt: "KKG Philanthropy"},
        { filename: "Brotherhood 2.webp", alt: "Brotherhood" },
        {filename: "spikeball.png", alt: "Spikeball"}, 
        { filename: "Brotherhood.webp", alt: "Brotherhood" },
        { filename: "FMSC 2.webp", alt: "FMSC" },
        { filename: "Camping Trip.webp", alt: "Camping Trip" },
        
        {filename:"FMSC.webp", alt: "FMSC"},
        {filename: "skphilo.webp", alt: "SK Philanthropy"},
        { filename: "Sigma Chi Tailgate Tent.webp", alt: "Tailgate" },
    ].map(exp => ({
        src: images[`../images/experiences/${exp.filename}`]?.default,
        alt: exp.alt
    }));

    const experienceItems = [
        { title: "Derby Days", description: "Our annual week-long philanthropy event benefiting the Huntsman Cancer Foundation. Brothers participate in various competitions and activities to raise money and awareness." },
        { title: "Formal Events", description: "Semester formals and date nights at premier venues across Arizona. These events strengthen brotherhood and create lasting memories." },
        { title: "Intramural Sports", description: "Compete in football, basketball, soccer, and more throughout the year. Our teams consistently rank among the top in ASU's intramural leagues." },
        { title: "Brotherhood Retreats", description: "Annual retreats to strengthen bonds and build lifelong friendships. These getaways provide time for reflection, team building, and fun." },
        { title: "Community Service", description: "Regular volunteer opportunities with local Tempe organizations. We're committed to making a positive impact in our community." },
        { title: "Networking Events", description: "Connect with alumni and industry professionals at exclusive events. Build your network and explore career opportunities." },
        { title: "Tailgates & Game Days", description: "Experience ASU football with the best tailgate on campus. Join us for pre-game festivities and cheer on the Sun Devils." },
    ];

    return (
        <>
            <section className="exp-header">
                <div className="container">
                    <h1 className="exp-title fade-in-up">The Experience</h1>
                </div>
            </section>

            {/* <section className="exp-featured-section">
                <div className="exp-featured-photo">
                    <img src={ExperienceImage} alt="Experience" className="exp-featured-img" />
                </div>
            </section> */}

<section className="exp-gallery-section">
                <div className="container">
                    <div className="exp-gallery">
                        {experiences.map((experience, index) => (
                            <div className="exp-gallery-item" key={index}>
                                <img src={experience.src} alt={experience.alt} loading='lazy' className="exp-gallery-img" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="exp-list-section">
                <div className="container">
                    <div className="exp-list">
                        {experienceItems.map((item, index) => (
                            <ExperienceItem key={index} title={item.title} description={item.description} />
                        ))}
                    </div>
                </div>
            </section>

           
        </>
    );
}

export default Experience;
