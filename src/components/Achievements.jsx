import acmCertificate from "../assets/achievements/acm-summer-school-iit-madras.jpg";
import ieeeCertificate from "../assets/achievements/ieee-eureka-2024.jpg";

import CommunityScroller from "./CommunityScroller";

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-section">

      <div className="achievements-header">

        <p className="section-tag">
          ACHIEVEMENTS & IMPACT
        </p>

        <h2 className="section-title">
          Recognition, Leadership & Community Impact.
        </h2>

      </div>

      {/* ================= ACHIEVEMENTS ================= */}

      <div className="achievements-grid">

        <div className="achievement-card">

          <img
            src={acmCertificate}
            alt="ACM India Summer School"
            className="achievement-image"
          />

          <div className="achievement-content">

            <h3>
              ACM India Summer School 2024
            </h3>

            <p>
              Selected Participant — Responsible & Safe AI
            </p>

            <span>
              IIT Madras
            </span>

          </div>

        </div>

        <div className="achievement-card">

          <img
            src={ieeeCertificate}
            alt="IEEE Eu-Reka 2024"
            className="achievement-image"
          />

          <div className="achievement-content">

            <h3>
              IEEE Eu-Reka 2024
            </h3>

            <p>
              National Level — 2nd Position
            </p>

            <span>
              AR/VR Technology Category
            </span>

          </div>

        </div>

      </div>

      {/* ================= ACHIEVEMENT PILLS ================= */}

      <div className="achievement-list-card">

        <div className="achievement-pill">
          NEP SAARTHI — UGC & AICTE Initiative
        </div>

        <div className="achievement-pill">
          1st Rank — PPDT Competition
        </div>

        <div className="achievement-pill">
          3rd Position — Debate Competition
        </div>

        <div className="achievement-pill">
          1st Position — Elocution Competition
        </div>

        <div className="achievement-pill">
          3rd Position — Essay Writing Competition
        </div>

        <div className="achievement-pill">
          Certified Peer Counsellor
        </div>

      </div>

      {/* ================= COMMUNITY IMPACT ================= */}

      <div className="community-section">

        <div className="community-video">

          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source
              src="/videos/ghar-ngo-volunteering.mp4"
              type="video/mp4"
            />
          </video>

        </div>

        <div className="community-content">

          <p className="section-tag">
            COMMUNITY IMPACT
          </p>

          <h3>
            GHAR NGO (Sant Ishwar Foundation)
          </h3>

          <p>
            Volunteered by teaching spoken English and supporting
            communication skill development among underprivileged
            girls through engaging learning sessions, mentorship,
            and confidence-building activities.
          </p>

        </div>

      </div>

      {/* ================= MEDIA SCROLLER ================= */}

      <CommunityScroller />

    </section>
  );
}