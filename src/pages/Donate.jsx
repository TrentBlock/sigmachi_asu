import React from 'react';
import '../css/Donate.css';

function Donate() {
  return (
    <section className="donate-content-section">  
        <div className="donate-content-container">  
            
            {/* Header & Mission Section */}
            <div className="donate-block fade-in-up">  
                <h1 className="donate-main-title">Donate Now</h1>  
                <h2 className="donate-subtitle">Reestablish the Epsilon Upsilon Legacy </h2>  
                <p className="donate-mission-text">
                Following the revocation of our charter in 2021, we have now began the rigorous journey to re-establish Sigma Chi at Arizona State University. Your contribution directly supports these rechartering efforts, funding the essential operations and recruitment needed to build a strong, sustainable presence on campus. Help us return and continue the unbeatable Epsilon Upsilon legacy.
                </p>
                {/* <p className="donate-mission-text">
                    We are committed to full transparency, ensuring every dollar creates maximum impact for our active brothers and the preservation of our campus legacy. We deeply appreciate your continued support of our brotherhood.
                </p> */}
            </div>

            {/* Payment Methods Grid */}
            <div className="donate-methods-grid fade-in-up">
                
                {/* Secure Card Payment */}
                <div className="donate-method-card donate-method-card__stretch">
                    <div className="donate-method-header">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="donate-icon">
                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                            <line x1="1" y1="10" x2="23" y2="10"></line>
                        </svg>
                        <h3>Credit / Debit</h3>
                    </div>
                    <p>Make a secure, one-time or recurring gift via our online payment processor, Crowded.</p>
                    <a style={{textDecoration:"none"}} target='_blank' href="https://collect.crowded.me/collection/b3701c8e-621e-4fed-90e1-48e943a95ed6"><button className="circle-donate-btn" aria-label="Donate via Card">Crowded Online Portal</button></a>
                </div>

                {/* Digital / Mobile (Venmo & Zelle) */}
                <div className="donate-method-card">
                    <div className="donate-method-header">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="donate-icon">
                            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                            <line x1="12" y1="18" x2="12.01" y2="18"></line>
                        </svg>
                        <h3>Zelle + Other</h3>
                    </div>
                    <p>Send contributions instantly with zero processing fees. Use the handle below.</p>
                    <div className="donate-digital-accounts">
                        <div className="digital-account">
                            <strong>Zelle:</strong> <span>finance@sigmachiasu.org</span>
                        </div>
                        {/* <div className="digital-account">
                            <strong>Venmo:</strong> <span>@SigmaChi-ASU</span>
                        </div> */}
                    </div>
                    {/* Placeholder for QR Code Images - Replace src with your actual QR code paths */}
                    {/* <div className="donate-qr-container">
                        <div className="qr-placeholder">
                            <span>Zelle QR</span>
                        </div>
                        <div className="qr-placeholder">
                            <span>Venmo QR</span>
                        </div>
                    </div> */}
                    <p>For information regarding larger contributions or alternative ways to support our rechartering, please contact our Quaestor at: <strong>finance@sigmachiasu.org</strong></p>
                </div>

                {/* Physical Check */}
                <div className="donate-method-card">
                    <div className="donate-method-header">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="donate-icon">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <h3>Mail a Check</h3>
                    </div>
                    <p>Please make checks payable to <strong>Sigma Chi Fraternity, Epsilon Upsilon</strong> and mail to our physical address:</p>
                    <div className="donate-address-block">
                        <strong>Sigma Chi</strong><br/>
                        Fraternity & Sorority Life <br/>
                        Arizona State University <br/>
                        PO Box 873008<br/>
                        Tempe, AZ 85281
                    </div>
                    <p className="donate-tax-note"><em>* A tax receipt will be mailed to the return address provided.</em></p>
                </div>

            </div>
        </div>
    </section>
  );
}

export default Donate;