import React from 'react'
import '../../css/Home/Mission.css';
import { Link } from 'react-router-dom';

function Mission() {
  return (
      <section className="mission-section" id="about">
        <div className="container">
            <div className="mission-content fade-in-up">
                <h3 className="section-label">Overview</h3>
                <h2 className="mission-text">
                  Established in 1960, the gentlemen of Sigma Chi at Arizona State University have built a legacy rooted in friendship, justice, and learning. For over six decades, the Epsilon Upsilon Chapter has remained committed to the betterment of character, campus, and community. Through impactful philanthropy, academic excellence, and a lifelong bond of brotherhood, we strive to shape leaders of men who make a difference far beyond their college years.
                </h2>
                {/* <div className="motto">
                    <p className="motto-latin">"In Hoc Signo Vinces"</p>
                    <p className="motto-english">In this sign you will conquer</p>
                </div> */}
              <div className="mission-links">
                    <Link to="/about" className="mission-btn mission-btn--primary">
                        <span className="btn-text">Our Story</span>
                        <span className="btn-arrow">&rarr;</span>
                    </Link>
                    <Link to="/class" className="mission-btn mission-btn--primary">
                        <span className="btn-text">Alumni and History</span>
                        <span className="btn-arrow">&rarr;</span>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Mission