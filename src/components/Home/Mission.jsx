import React from 'react'
import '../../css/Home/Mission.css';
import { Link } from 'react-router-dom';

function Mission() {
  return (
      <section className="mission-section" id="about">
        <div className="container">
            <div className="mission-content fade-in-up">
                <h3 className="section-label">The Creed of Sigma Chi </h3>
                <h2 className="mission-text">
                The confidence of the Founders of Sigma Chi was based upon a belief that the principles which they professed and the ideal of the Fraternity which they sought to realize were such as to appeal to the hearts of men and women everywhere. 
                </h2>
                {/* <h2 className="mission-text"></h2> */}
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
                    <Link to="/donate" className="mission-btn mission-btn--primary">
                        <span className="btn-text">Support the Chapter</span>
                        <span className="btn-arrow">&rarr;</span>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Mission