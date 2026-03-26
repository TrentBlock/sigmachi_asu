import React from 'react';
import '../css/Experience.css';
import SEO from '../components/SEO';

function Experience() {
    // 1. Dynamically import all images in the folder using Vite
    const images = import.meta.glob('../images/experiences/*.{jpg,jpeg,png,webp}', { eager: true });

    // Helper function to safely grab the image path
    const getImg = (filename) => images[`../images/experiences/${filename}`]?.default;

    // 2. The New Unified Category Showcase Data (Grouping all 10 images)
    const experienceCategories = [
        { 
            title: "Philanthropy & Community", 
            description: "Derby Days is more than just a week it’s a reflection of our commitment to giving back. Beyond Derby Days, we stay involved in philanthropic efforts year round, working with Greek organizations across campus to support causes like the Huntsman Cancer Institute and make a lasting impact.",
            // PAIR 1: Philanthropy Images
            imageGroup: [getImg("kkgphilo.webp")],
            imageLayout: "split", // Vertical split/stack
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        },
        { 
            title: "Tailgates & Game Days", 
            description: "Game days at ASU are some of our favorite times together. From lively tailgates with friends to catching up with alumni at the GLV, these moments are all about fun, and making memories",
            // PAIR 2: Tailgates Images (User image + generic brotherhood image for scale)
            imageGroup: [getImg("Sigma Chi Tailgate Tent.webp"), getImg("Brotherhood.webp")], 
            imageLayout: "interlocking", // Overlapping diagonal layout
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        },
        { 
            title: "Brotherhood Retreats", 
            description: "Whether it’s trips out into the Arizona desert or time spent with your class, these retreats bring everyone closer and build bonds that last well beyond college.",
            // PAIR 3: Retreats Images (Using 'Camping Trip' + the new 'retreat.jpg')
            imageGroup: [getImg("Camping Trip.webp"), getImg("retreat.webp")], 
            imageLayout: "grid", // Two dynamic grid boxes
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        },
        { 
            title: "Sports & Chapter Events", 
            description: "Our chapter events are more than just gatherings, they’re where we come together as brothers. From competitions to elegant formals, these moments strengthen our friendships, celebrate our bond, and create memories that last a lifetime.",
            // PAIR 4: Sports/Formals (spikeball + formal image)
            imageGroup: [getImg("spikeball.webp"), getImg("Brotherhood 2.webp")],
            imageLayout: "split", // Vertical split/stack
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
        },
        { 
            title: "Service & Service Learning", 
            description: "Giving back is just part of what we do. Whether it’s volunteering with groups or helping out around Tempe, we try to show up and actually make a difference.",
            // PAIR 5: Service Images (Both FMSC pictures)
            imageGroup: [getImg("FMSC.webp"), getImg("FMSC 2.webp")], 
            imageLayout: "interlocking", // Overlapping diagonal layout
            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
        }
    ];

    // Derby Days Calendar Data (Unchanged)
    const derbySchedule = [
        { day: "Monday (3/16)", title: "White Rose Ceremony & Horse Bidding", time: "2:00 PM & 7:30 PM", location: "GLV Lawn & Neeb Hall" },
        { day: "Tuesday (3/17)", title: "Call-A-Thon", time: "5:00 PM", location: "GLCC Ballrooms" },
        { day: "Wednesday (3/18)", title: "Shave A Sig", time: "12:00 PM", location: "GLV Lawn" },
        { day: "Thursday (3/19)", title: "Puppy Petting Zoo", time: "2:00 PM", location: "GLV Lawn" },
        { day: "Friday (3/20)", title: "Sweetheart Competition", time: "7:00 PM", location: "Neeb Hall Room 105" },
        { day: "Saturday (3/21)", title: "Turf Paradise Horse Racing", time: "All Day", location: "1501 W Bell Rd, Phoenix" },
    ];

    return (
        <div className="experience-page">
            <SEO 
                title="The Experience" 
                description="Explore the traditions, philanthropy, and lifelong brotherhood of the Epsilon Upsilon chapter of Sigma Chi at ASU."
                url="/experience"
            />
            <section className="exp-header">
                <div className="container">
                    <h1 className="exp-title fade-in-up">The Sigma Chi Experience</h1>
                </div>
            </section>

            {/* 1. Leadership & Vision Section */}
            {/* <section className="exp-vision-section">
                <div className="container exp-vision-container">
                    <h2 className="exp-section-title">Leadership & Vision</h2>
                    <p className="exp-lead-text">
                        At the core of the Epsilon Upsilon chapter lies <strong>The Jordan Standard</strong>—a strict set of criteria demanding courage, wisdom, integrity, high ambition, self-control, courtesy, and fidelity. 
                    </p>
                    <p className="exp-sub-text">
                        We do not simply participate in ASU's Greek Life; we intend to lead it. By holding our brothers to the highest possible standards, we are building a culture of excellence that extends far beyond our college years.
                    </p>
                </div>
            </section> */}

            {/* 2. Dynamic Showcase Showcase Grid (Now featuring all 10 images) */}
            <section className="exp-showcase-section">
                <div className="container">
                    <div className="exp-showcase-list">
                        {experienceCategories.map((cat, index) => (
                            <div className={`exp-showcase-row ${index % 2 !== 0 ? 'reverse' : ''}`} key={index}>
                                
                                {/* Photo Showcase Group (Handles multiple images) */}
                                <div className={`exp-image-showcase layout-${cat.imageLayout}`}>
                                    {cat.imageGroup.map((img, imgIndex) => (
                                        <div className={`exp-showcase-photo p${imgIndex + 1}`} key={imgIndex}>
                                            <img src={img} alt={`${cat.title} Moment ${imgIndex + 1}`} loading="lazy" />
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Content Block */}
                                <div className="exp-showcase-content">
                                    <div className="exp-showcase-header">
                                        <span className="exp-showcase-icon">{cat.icon}</span>
                                        <h3 className="exp-showcase-title">{cat.title}</h3>
                                    </div>
                                    <p className="exp-showcase-desc">{cat.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Philanthropy Highlight & Calendar Section */}
            <section className="exp-philanthropy-section">
                {/* Keep your existing Derby Days code here - Unchanged */}
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
        </div>
    );
}

export default Experience;