import React from 'react'
import '../css/Donate.css';

function Donate() {
  return (
       <section className="donate-content-section">  
        <div className="donate-content-container">  
            <div className="donate-block fade-in-up">  
                <h1 className="donate-main-title">Donate</h1>  
                <h2 className="donate-subtitle">We Appreciate Your Support.</h2>  
                <p>Your tax-deductible donation will help us foster undergraduate student interest in leadership, brotherhood, and service at Arizona State University.</p>
                <p>Donations support scholarships, leadership development programs, house improvements, and philanthropic initiatives. We're committed to transparency and ensuring every dollar creates maximum impact for our brothers and community.</p>
                <p>Whether you choose to make a one-time gift, set up a recurring donation, or establish a named scholarship, your generosity helps shape the next generation of Sigma Chi leaders.</p>
                <button className="circle-donate-btn" aria-label="Donate Now">Donate Now</button>  
            </div>
        </div>
    </section>
  )
}

export default Donate