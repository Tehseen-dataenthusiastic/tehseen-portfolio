import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="hero-section">

      <div className="hero-grid">

        <div>

          <p className="hero-tag">
            DATA • DESIGN • DECISION MAKING
          </p>

          <h1 className="hero-title">
            TEHSEEN

            <span>
              SHAIKH
            </span>
          </h1>

          <h2 className="hero-subtitle">
            Data, Design & Decision Making
          </h2>

          <p className="hero-description">
            Building data-driven solutions,
            immersive learning experiences,
            and thriving technology communities.
          </p>
          
          <div className="hero-buttons">
            <a
              href="https://drive.google.com/drive/folders/12Ir89E_QdybWATr7I61iVBGMLcTMTO4a?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              Resume
              </a>
              <a
              href="https://www.linkedin.com/in/tehseen-fatima-shaikh-8301b2262/"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
              >
                LinkedIn
                </a>
                </div>

        </div>

        <div className="photo-wrapper">

          <div className="photo-glow" />

          <img
            src={profile}
            alt=""
            className="hero-image"
          />

        </div>

      </div>

    </section>
  );
}