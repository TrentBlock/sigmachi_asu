import React from 'react';
import ExperienceItem from '../components/ExperienceItem';
import '../css/Experience.css';

function Experience() {
    const images = import.meta.glob('../images/experiences/*.{jpg,jpeg,png,webp}', { eager: true });

    const experiences = [
        {filename: "kkgphilo.webp", alt: "KKG Philanthropy"},
        { filename: "Brotherhood 2.webp", alt: "Brotherhood" },
        {filename: "spikeball.webp", alt: "Spikeball"}, 
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

    // Placeholder data for the Derby Days Calendar - Update this with your Canva info!
    // Derby Days Calendar Data
    const derbySchedule = [
        { 
            day: "Monday (3/16)", 
            title: "White Rose Ceremony & Horse Bidding", 
            time: "2:00 PM & 7:30 PM", 
            location: "GLV Lawn & Neeb Hall" 
        },
        { 
            day: "Tuesday (3/17)", 
            title: "Call-A-Thon", 
            time: "5:00 PM", 
            location: "GLCC Ballrooms" 
        },
        { 
            day: "Wednesday (3/18)", 
            title: "Shave A Sig", 
            time: "12:00 PM", 
            location: "GLV Lawn" 
        },
        { 
            day: "Thursday (3/19)", 
            title: "Puppy Petting Zoo", 
            time: "2:00 PM", 
            location: "GLV Lawn" 
        },
        { 
            day: "Friday (3/20)", 
            title: "Sweetheart Competition", 
            time: "7:00 PM", 
            location: "Neeb Hall Room 105" 
        },
        { 
            day: "Saturday (3/21)", 
            title: "Turf Paradise Horse Racing", 
            time: "All Day", 
            location: "1501 W Bell Rd, Phoenix" 
        },
    ];

    const experienceItems = [
        { title: "Formal Events", description: "Semester formals and date nights at premier venues across Arizona. These events strengthen brotherhood and create lasting memories." },
        { title: "Intramural Sports", description: "Compete in football, basketball, soccer, and more throughout the year. Our teams consistently rank among the top in ASU's intramural leagues." },
        { title: "Brotherhood Retreats", description: "Annual retreats to strengthen bonds and build lifelong friendships. These getaways provide time for reflection, team building, and fun." },
        { title: "Community Service", description: "Regular volunteer opportunities with local Tempe organizations. We're committed to making a positive impact in our community." },
        { title: "Networking Events", description: "Connect with alumni and industry professionals at exclusive events. Build your network and explore career opportunities." },
        { title: "Tailgates & Game Days", description: "Experience ASU football with the best tailgate on campus. Join us for pre-game festivities and cheer on the Sun Devils." },
    ];

    return (
        <div className="experience-page">
            <section className="exp-header">
                <div className="container">
                    <h1 className="exp-title fade-in-up">The Experience</h1>
                </div>
            </section>

            {/* 1. Leadership & Vision Section */}
            <section className="exp-vision-section">
                <div className="container exp-vision-container">
                    <h2 className="exp-section-title">Leadership & Vision</h2>
                    <p className="exp-lead-text">
                        At the core of the Epsilon Upsilon chapter lies <strong>The Jordan Standard</strong>—a strict set of criteria demanding courage, wisdom, integrity, high ambition, self-control, courtesy, and fidelity. 
                    </p>
                    <p className="exp-sub-text">
                        We do not simply participate in ASU's Greek Life; we intend to lead it. By holding our brothers to the highest possible standards, we are building a culture of excellence that extends far beyond our college years.
                    </p>
                </div>
            </section>

            {/* 2. Gapless Masonry Gallery */}
            <section className="exp-gallery-section">
                <div className="container">
                    <div className="exp-masonry">
                        {experiences.map((experience, index) => (
                            <div className="exp-masonry-item" key={index}>
                                <img src={experience.src} alt={experience.alt} className="exp-masonry-img" loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Philanthropy Highlight & Calendar Section */}
            <section className="exp-philanthropy-section">
                <div className="container exp-philo-container">
                    <div className="exp-philo-content">
                        <span className="exp-philo-tag">Derby Days</span>
                        <h2 className="exp-section-title">The Generation to End Cancer</h2>
                        <p className="exp-sub-text">
                            Derby Days is Sigma Chi’s premier, annual week-long philanthropic event. Partnering with sororities across the ASU campus, we host a high-energy week of competitions, events, and community outreach. 
                        </p>
                        <p className="exp-sub-text">
                            Our unified goal is ambitious but vital: raising critical funds for the <strong>Huntsman Cancer Institute</strong>. We are deeply committed to being the generation that finally puts an end to cancer.
                        </p>
                    </div>

                    {/* The Derby Days One-Week Calendar */}
                    <div className="derby-calendar">
                        {derbySchedule.map((day, index) => (
                            <div className="derby-day-card" key={index}>
                                <div className="derby-day-header">{day.day}</div>
                                <div className="derby-day-body">
                                    <h4 className="derby-day-title">{day.title}</h4>
                                    <div className="derby-day-details">
                                        <span className="derby-time">{day.time}</span>
                                        <span className="derby-location">{day.location}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Upgraded Accordion List */}
            <section className="exp-list-section">
                <div className="container">
                    <h2 className="exp-section-title text-center" style={{marginBottom: '3rem'}}>More Chapter Traditions</h2>
                    <div className="exp-list">
                        {experienceItems.map((item, index) => (
                            <ExperienceItem key={index} title={item.title} description={item.description} />
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Experience;