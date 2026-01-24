import React from 'react'
import '../../css/Home/Stats.css';

function Stats() {
  return (
        <section className="stats-section">
        <div className="container">
            <div className="stats-grid">
                <div className="stat-item fade-in-up visible">
                    <h3 className="stat-number">150+</h3>
                    <p className="stat-label">Active Brothers</p>
                </div>
                <div className="stat-item fade-in-up visible">
                    <h3 className="stat-number">100 years</h3>
                    <p className="stat-label">History at ASU</p>
                </div>
                <div className="stat-item fade-in-up visible">
                    <h3 className="stat-number">$50k+</h3>
                    <p className="stat-label">Raised for Charity</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Stats