import contactImage from "../assets/contact.jpg";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        <div className="contact-left">

          <p className="section-tag">
            CONTACT
          </p>

          <h2 className="section-title">
            Let's Build Something
            Meaningful Together.
          </h2>

          <p className="contact-description">
            Open to Data Analyst roles,
            AI opportunities, frontend development,
            research collaborations and innovative
            technology projects.
          </p>

          <div className="contact-links">

            <a
              href="mailto:tehseen.ismailshaikh@gmail.com"
            >
               Email
            </a>

            <a
              href="https://www.linkedin.com/in/tehseen-fatima-shaikh-8301b2262/"
              target="_blank"
              rel="noreferrer"
            >
               LinkedIn
            </a>

            <a
              href="https://github.com/Tehseen-dataenthusiastic"
              target="_blank"
              rel="noreferrer"
            >
               GitHub
            </a>

            <a
              href="https://leetcode.com/u/TehseenShaikh/"
              target="_blank"
              rel="noreferrer"
            >
               LeetCode
            </a>

            <a
              href="https://drive.google.com/drive/folders/12Ir89E_QdybWATr7I61iVBGMLcTMTO4a?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
               Resume
            </a>

          </div>

        </div>

        <div className="contact-right">

          <img
            src={contactImage}
            alt="Tehseen Shaikh"
            className="contact-image"
          />

        </div>

      </div>

    </section>
  );
}