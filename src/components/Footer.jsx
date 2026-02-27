import "../css/Footer.css";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                {/* Social & Quick Links */}
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

                {/* Chapter Details */}
                <div className="footer-details">
                    <div className="footer-address">
                        <strong>Physical Address</strong><br/>
                        975 S Rural Road, Sigma Chi<br/>
                        Tempe, AZ 85281
                    </div>
                    <div className="footer-contact">
                        <strong>Direct Contact: </strong> <a href="mailto:consul@sigmachiasu.org" style={{marginInline:"1rem"}}> consul@sigmachiasu.org</a>
                    </div>
                </div>

                {/* Legal & Copyright */}
                <div className="footer-legal">
                    <p>&copy; {new Date().getFullYear()} Sigma Chi Fraternity, Epsilon Upsilon Chapter Arizona State Inc.</p>
                    {/* <p className="disclaimer">Sigma Chi is not legally affiliated with or endorsed by Arizona State University.</p> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer