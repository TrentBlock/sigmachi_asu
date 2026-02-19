import "../css/Footer.css";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


function Footer() {
    return (
     <footer className="footer">
                <div className="container">
                        <div className="footer-social">
                                <a href="mailto:finance@sigmachiasu.org" className="social-link" aria-label="Email">
                                <MdEmail className="email--icon"/>
                                </a>
                                <a href="https://instagram.com/asusigmachi" target="_blank" className="social-link" aria-label="Instagram">
                                <FaInstagram className="insta--icon"/>
                                </a>
                                <a href="https://www.facebook.com/sigmachiarizonastate/" target="_blank" className="social-link" aria-label="Facebook">
                                <FaFacebook className="fb--icon"/>
                                </a>
                        </div>
                        <p>&copy; 2026 Sigma Chi - Arizona State University</p>
                        {/* <p className="disclaimer">Sigma Chi is not legally affiliated with or endorsed by Arizona State University.</p> */}
                </div>
        </footer>
    )
}

export default Footer