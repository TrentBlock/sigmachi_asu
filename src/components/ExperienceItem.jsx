import { useState } from 'react';

function ExperienceItem({ title, description, icon }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={`exp-item ${isActive ? 'active' : ''}`} onClick={() => setIsActive(!isActive)}>
            <div className="exp-item-header">
                <div className="exp-title-wrapper">
                    <span className="exp-item-icon">{icon}</span>
                    <h3>{title}</h3>
                </div>
                <div className="exp-toggle-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
            </div>
            <div className="exp-item-content">
                <div className="exp-item-inner">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default ExperienceItem;