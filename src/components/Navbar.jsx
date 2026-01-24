import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';
import crest from '../images/Sigma_Chi_Crest.png'; 

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar navbar-dark" id="navbar">
            <div className="nav-container">
                <Link to="/" className="logo">
                    <img src={crest} alt="Sigma Chi Crest" className="logo-img" />
                </Link>
                <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li><Link to="/about" className="nav-link">About</Link></li>
                    <li><Link to="/class" className="nav-link">Class</Link></li>
                    <li><Link to="/experience" className="nav-link">Experience</Link></li>
                    <li><Link to="/placements" className="nav-link">Placements</Link></li>
                    <li><Link to="/donate" className="nav-link">Donate</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
