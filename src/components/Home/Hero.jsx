import '../../css/Home/Hero.css';
import sigmaChiHouse from '../../images/oldmain.webp';

function Hero() {
  return (
        <section className="hero">
        <div className="hero-bg-image parallax-bg" style={{backgroundImage: `url(${sigmaChiHouse})`}}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content fade-in">
            <h1 className="hero-title">Sigma Chi</h1>
            <h2 className="hero-subtitle">ARIZONA STATE UNIVERSITY</h2>
        </div>
        <div className="scroll-indicator">
            <span>Scroll</span>
            <div className="scroll-line"></div>
        </div>
    </section>
  )
}

export default Hero