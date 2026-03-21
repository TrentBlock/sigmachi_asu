import "../css/Footer.css";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

// Import your Coat of Arms image here
import coatOfArms from "../images/Sigma_Chi_Crest.webp"; // Update this filename to match yours!

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    
                    {/* Column 1: Brand & Crest */}
                    <div className="footer-brand">
                        <img src={coatOfArms} alt="Sigma Chi Coat of Arms" className="footer-crest" />
                        <h3 className="footer-chapter">Epsilon Upsilon</h3>
                        <p className="footer-motto">Arizona State University</p>
                    </div>

                    {/* Column 2: Location & Contact */}
                    <div className="footer-contact-info">
                        <h4 className="footer-heading">Contact Us</h4>
                        <address className="footer-address">
                            <strong>Physical Address</strong><br/>
                            975 S Rural Road, Sigma Chi<br/>
                            Tempe, AZ 85281
                        </address>
                        <div className="footer-email">
                            <strong>Direct Contact:</strong><br/>
                            <a href="mailto:consul@sigmachiasu.org">consul@sigmachiasu.org</a>
                        </div>
                    </div>

                    {/* Column 3: Socials */}
                    <div className="footer-social-block">
                        <h4 className="footer-heading">Connect</h4>
                        <div className="footer-social">
                            <a href="mailto:consul@sigmachiasu.org" className="social-link" aria-label="Email">
                                <MdEmail className="email--icon"/>
                            </a>
                            <a href="https://instagram.com/asusigmachi" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                                <FaInstagram className="insta--icon"/>
                            </a>
                            <a href="https://www.facebook.com/sigmachiarizonastate/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                                <FaFacebook className="fb--icon"/>
                            </a>
                        </div>
                    </div>

                </div>

                {/* Legal & Copyright */}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Sigma Chi Fraternity, Epsilon Upsilon Chapter Arizona State Inc.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;