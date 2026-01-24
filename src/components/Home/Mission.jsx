import React from 'react'
import '../../css/Home/Mission.css';

function Mission() {
  return (
      <section className="mission-section" id="about">
        <div className="container">
            <div className="mission-content fade-in-up">
                <h3 className="section-label">OUR MISSION</h3>
                <h2 className="mission-text">
                    To develop values-based leaders committed to the betterment of character, 
                    campus, and community.
                </h2>
                <div className="motto">
                    <p className="motto-latin">"In Hoc Signo Vinces"</p>
                    <p className="motto-english">In this sign you will conquer</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Mission