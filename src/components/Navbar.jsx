import { Link } from 'react-router-dom';
import '../css/NavBar.css';
import crest from '../images/Sigma_Chi_Crest.png'; 

function Navbar() {
    return (
        <nav className="navbar navbar-dark" id="navbar">
            <div className="nav-container">
                <Link to="/" className="logo">
                    <img src={crest} alt="Sigma Chi Crest" className="logo-img" />
                </Link>
                <ul className="nav-menu">
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

export default Navbar
