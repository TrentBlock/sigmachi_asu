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
                    <h3 className="stat-number">1960</h3>
                    <p className="stat-label">ASU Chapter Established</p>
                </div>
                <div className="stat-item fade-in-up visible">
                    <h3 className="stat-number">3.503</h3>
                    <p className="stat-label">Average GPA</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Stats