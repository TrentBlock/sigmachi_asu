import "../css/Footer.css";

function Footer() {
    return (
     <footer className="footer">
                <div className="container">
                        <div className="footer-social">
                                <a href="mailto:sigmachi@asu.edu" className="social-link" aria-label="Email">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="2" y="4" width="20" height="16" rx="2"/>
                                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                        </svg>
                                        <span>Email</span>
                                </a>
                                <a href="https://instagram.com/sigmachi_asu" target="_blank" className="social-link" aria-label="Instagram">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                                        </svg>
                                        <span>Instagram</span>
                                </a>
                        </div>
                        <p>&copy; 2025 Sigma Chi - Arizona State University</p>
                        <p className="disclaimer">Sigma Chi is not legally affiliated with or endorsed by Arizona State University.</p>
                </div>
        </footer>
    )
}

export default Footer