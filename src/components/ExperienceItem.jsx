import { useState } from 'react';

function ExperienceItem({ title, description }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={`exp-item ${isActive ? 'active' : ''}`}>
            <div className="exp-item-header"  onClick={() => setIsActive(!isActive)}>
                <h3>{title}</h3>
                <button 
                    className="exp-toggle">
                    +
                </button>
            </div>
            <div className="exp-item-content">
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ExperienceItem;