export default function Projects() {
  return (
    <section id="projects" className="projects-section">

      <div className="projects-header">

        <p className="section-tag">
          PROJECTS
        </p>

        <h2 className="section-title">
          Research & Development.
        </h2>

      </div>

      <div className="projects-grid">

        <div className="project-card featured-project">

          <span className="project-type">
            RESEARCH PUBLICATION
          </span>

          <h3>
            Exploring AR/VR for Dyslexic Students in Education
          </h3>

          <p>
            Designed and developed an AR/VR-based learning
            system for dyslexic students using Unity, XR Toolkit,
            Vuforia and WebAR. The project focused on improving
            letter recognition, visual association and immersive
            learning through multisensory experiences.
          </p>

          <a
            href="https://link.springer.com/chapter/10.1007/978-3-032-19678-1_22"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View Publication →
          </a>

        </div>

        <div className="project-card">

          <span className="project-type">
            AI AUTOMATION
          </span>

          <h3>
            Smart Task Agent
          </h3>

          <p>
            Built an AI agent capable of transforming
            user goals into structured workflows through
            automated planning, decomposition and task
            execution. Integrated tool orchestration and
            LLM capabilities for autonomous completion of
            multi-step objectives.
          </p>

          <a
            href="https://github.com/Tehseen-dataenthusiastic/smart-task-agent"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View GitHub →
          </a>

        </div>

      </div>

    </section>
  );
}