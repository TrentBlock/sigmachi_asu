import '../../css/Home/Meet.css';
import { Link } from 'react-router-dom'
import alphaClassImg from '../../images/Alpha Class.webp'

function Meet() {
    return (
         <section className="alpha-class-section" id="class">
                <div className="team-bg-image parallax-bg" style={{backgroundImage: `url(${alphaClassImg})`}}></div>
                <div className="container">
                        <div className="alpha-class-content">
                                <h2 className="section-title-white fade-in-up">Meet Alpha Class</h2>
                                <Link to="/class" className="circle-btn">&rarr;</Link>
                        </div>
                </div>
        </section>
    )

}

export default Meet