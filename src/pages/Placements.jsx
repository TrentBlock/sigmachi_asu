import "../css/Placements.css";
import PlacementImage from '../images/placements.png';
function Placements() {
  return (
   <>
    <section className="placements-header">
        <div className="container">
            <h1 className="placements-title fade-in-up">Placements</h1>
            <p className="placements-subtitle fade-in-up">Current & Former Members</p>
        </div>
    </section>

    <section className="placements-image-section">
        <div className="placements-image-container">
            <img loading="lazy" src={PlacementImage} alt="Placements" className="placements-img" />
        </div>
    </section>
   </>
  )
}

export default Placements