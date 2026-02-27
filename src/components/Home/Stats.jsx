import React from 'react'
import '../../css/Home/Stats.css';

function Stats() {
  return (
        <section className="stats-section">
        <div className="container">
            <div className="stats-grid">
                <div className="stat-item fade-in-up visible">
                    <h3 className="stat-number">2,000+</h3>
                    <p className="stat-label">Alumni</p>
                </div>
                <div className="stat-item fade-in-up visible">
                    <h3 className="stat-number">61 Years</h3>
                    <p className="stat-label">At Arizona State University</p>
                </div>
                <div className="stat-item fade-in-up visible">
                    <h3 className="stat-number">3.503</h3>
                    <p className="stat-label">Current Chapter GPA</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Stats