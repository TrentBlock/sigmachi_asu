import React from 'react'
import '../css/About.css';

function About() {
  return (
    <>
     <section className="about-header">
        <div className="container">
            <h1 className="about-title fade-in-up">About Us</h1>
        </div>
    </section>
    <section className="about-content-section">
        <div className="about-content-container">
            <div className="about-block fade-in-up">
                <h2>Our Mission</h2>
                <p>To develop values-based leaders committed to the betterment of character, campus, and community through the principles of Friendship, Justice, and Learning.</p>
            </div>

            <div className="about-block fade-in-up">
                <h2>Brotherhood Philosophy</h2>
                <p>We seek to cultivate lifelong bonds by bringing together driven individuals who are committed to personal growth, academic excellence, and service. We believe our focus on core values detaches us from superficial metrics and provides us with a unique perspective on what true brotherhood means. Our flexible approach enables us to support brothers across all majors, backgrounds, and aspirations, although we focus on developing well-rounded leaders.</p>
            </div>

            <div className="about-block fade-in-up">
                <h2>Our History</h2>
                <p>Since our founding at Arizona State University, we envisioned creating a venue for students to share experiences and learn through brotherhood. We look to recruit the most talented Sun Devils through a detailed recruitment process, and we develop their leadership and character through a rigorous commitment to our values and a chapter-wide mentorship culture. Our organization strives to offer an unparalleled fraternity experience, develop character in a rigorous and collaborative manner, and create lasting impact in our community.</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default About