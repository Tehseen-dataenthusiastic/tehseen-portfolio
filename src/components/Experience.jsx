import leadershipPhoto from "../assets/leadership.jpg";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">

      <div className="experience-header">
        <p className="section-tag">
          EXPERIENCE
        </p>

        <h2 className="section-title">
          Internships
        </h2>
      </div>

      <div className="internship-grid">

        <div className="internship-card">

          <span className="card-date">
            Jun 2026 – Aug 2026
          </span>

          <h3>
            Data Analyst Intern
          </h3>

          <h4>
            Bluestock Fintech
          </h4>

          <p>
            Worked with leadership teams to
            analyze business data and create
            dashboards using Excel, SQL and
            data visualization techniques.
          </p>

        </div>

        <div className="internship-card featured-card">

          <span className="card-date">
            Dec 2025 – Jun 2026
          </span>

          <h3>
            Technical Intern
          </h3>

          <h4>
            Somvanshi Global Technologies
          </h4>

          <p>
            Developed web applications,
            implemented frontend features,
            resolved client issues and
            supported production deployment.
          </p>

        </div>

        <div className="internship-card">

          <span className="card-date">
            Jan 2025 – Dec 2025
          </span>

          <h3>
            Documentation Intern
          </h3>

          <h4>
            GHRCEM Pune
          </h4>

          <p>
            Prepared official reports,
            proposals and institutional
            documentation under SPPU's
            internship scheme.
          </p>

        </div>

      </div>

      <div className="leadership-section">

        <div className="leadership-image">

          <img
            src={leadershipPhoto}
            alt="Leadership"
          />

        </div>

        <div className="leadership-content">

          <p className="section-tag">
            LEADERSHIP
          </p>

          <h2 className="section-title">
            Leading Communities.
          </h2>

          <div className="leadership-list">

            <div>
              <h4>President — ACM Student Chapter</h4>
              <p>Led technical events, workshops and student initiatives.</p>
            </div>

            <div>
              <h4>Student Co-Ordinator — Peer Counsellors Club</h4>
              <p>Mentored students and coordinated counselling activities.</p>
            </div>

            <div>
              <h4>NEP Saarthi</h4>
              <p>Promoted awareness and implementation of NEP initiatives.</p>
            </div>

            <div>
              <h4>Advisor — E-Cell</h4>
              <p>Supported entrepreneurship and innovation programs.</p>
            </div>

            {/* <div>
              <h4>Green House Captain</h4>
              <p>Led house activities, competitions and student engagement.</p>
            </div> */}

          </div>

        </div>

      </div>

    </section>
  );
}