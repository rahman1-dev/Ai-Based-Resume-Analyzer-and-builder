import React from "react";
import "../style/interview.scss";

const Interview = () => {
  return (
    <div className="interview-page">
      <div className="interview-layout">
        <input
          className="interview-section-input"
          type="radio"
          name="interview-section"
          id="technical-tab"
          defaultChecked
        />
        <input
          className="interview-section-input"
          type="radio"
          name="interview-section"
          id="behavioral-tab"
        />
        <input
          className="interview-section-input"
          type="radio"
          name="interview-section"
          id="roadmap-tab"
        />
        <nav className="interview-nav" aria-label="Interview sections">
          <div className="nav-content">
            <p className="interview-nav__label">Sections</p>

            <label htmlFor="technical-tab" className="interview-nav__item">
              <span className="interview-nav__icon" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </span>
              Technical Questions
            </label>

            <label htmlFor="behavioral-tab" className="interview-nav__item">
              <span className="interview-nav__icon" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </span>
              Behavioral Questions
            </label>

            <label htmlFor="roadmap-tab" className="interview-nav__item">
              <span className="interview-nav__icon" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
              </span>
              Road Map
            </label>
          </div>

          <button className="button primary-button" type="button">
            <svg
              height="0.8rem"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M10.6144 17.7956 11.492 15.7854C12.2731 13.9966 13.6789 12.5726 15.4325 11.7942L17.8482 10.7219C18.6162 10.381 18.6162 9.26368 17.8482 8.92277L15.5079 7.88394C13.7092 7.08552 12.2782 5.60881 11.5105 3.75894L10.6215 1.61673C10.2916.821765 9.19319.821767 8.8633 1.61673L7.97427 3.75892C7.20657 5.60881 5.77553 7.08552 3.97685 7.88394L1.63658 8.92277C.868537 9.26368.868536 10.381 1.63658 10.7219L4.0523 11.7942C5.80589 12.5726 7.21171 13.9966 7.99275 15.7854L8.8704 17.7956C9.20776 18.5682 10.277 18.5682 10.6144 17.7956ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899Z" />
            </svg>
            Download Resume
          </button>
        </nav>

        <div className="interview-divider" />

        <main className="interview-content">
          <section id="technical-questions" className="questions-panel">
            <div className="content-header">
              <h2>Technical Questions</h2>
              <span className="content-header__count">10 questions</span>
            </div>

            <div className="q-list">
              <details className="q-card" open>
                <summary className="q-card__header">
                  <span className="q-card__index">Q1</span>
                  <p className="q-card__question">
                    What is the difference between let, const, and var in
                    JavaScript?
                  </p>
                  <span className="q-card__chevron" aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>

                <div className="q-card__body">
                  <div className="q-card__section">
                    <span className="q-card__tag q-card__tag--intention">
                      Intention
                    </span>
                    <p>
                      Tests your understanding of JavaScript variable
                      declarations and scope.
                    </p>
                  </div>

                  <div className="q-card__section">
                    <span className="q-card__tag q-card__tag--answer">
                      Model Answer
                    </span>
                    <p>
                      var is function-scoped, while let and const are
                      block-scoped. const cannot be reassigned after
                      initialization.
                    </p>
                  </div>
                </div>
              </details>

              <details className="q-card">
                <summary className="q-card__header">
                  <span className="q-card__index">Q2</span>
                  <p className="q-card__question">
                    Explain the concept of closures in JavaScript.
                  </p>
                  <span className="q-card__chevron" aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>

                <div className="q-card__body">
                  <div className="q-card__section">
                    <span className="q-card__tag q-card__tag--intention">
                      Intention
                    </span>
                    <p>
                      Checks whether you can explain state retention and
                      function scope in practical terms.
                    </p>
                  </div>

                  <div className="q-card__section">
                    <span className="q-card__tag q-card__tag--answer">
                      Model Answer
                    </span>
                    <p>
                      A closure is created when an inner function keeps access
                      to variables from its parent scope even after the parent
                      has finished executing.
                    </p>
                  </div>
                </div>
              </details>

              <details className="q-card">
                <summary className="q-card__header">
                  <span className="q-card__index">Q3</span>
                  <p className="q-card__question">
                    What is the virtual DOM in React?
                  </p>
                  <span className="q-card__chevron" aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>

                <div className="q-card__body">
                  <div className="q-card__section">
                    <span className="q-card__tag q-card__tag--intention">
                      Intention
                    </span>
                    <p>
                      Evaluates knowledge of React rendering and performance
                      optimization.
                    </p>
                  </div>

                  <div className="q-card__section">
                    <span className="q-card__tag q-card__tag--answer">
                      Model Answer
                    </span>
                    <p>
                      The virtual DOM is a lightweight in-memory representation
                      of the UI that React updates before applying the smallest
                      efficient DOM changes.
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </section>

          <section id="behavioral-questions" className="questions-panel">
            <div className="content-header">
              <h2>Behavioral Questions</h2>
              <span className="content-header__count">6 questions</span>
            </div>

            <div className="q-list">
              <details className="q-card" open>
                <summary className="q-card__header">
                  <span className="q-card__index">B1</span>
                  <p className="q-card__question">
                    Tell me about a time you handled a difficult teammate
                    conflict.
                  </p>
                  <span className="q-card__chevron" aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>

                <div className="q-card__body">
                  <div className="q-card__section">
                    <span className="q-card__tag q-card__tag--intention">
                      Intention
                    </span>
                    <p>
                      Measures communication, empathy, and professional judgment
                      under pressure.
                    </p>
                  </div>

                  <div className="q-card__section">
                    <span className="q-card__tag q-card__tag--answer">
                      Strong Answer
                    </span>
                    <p>
                      Focus on the situation, your actions, and the outcome.
                      Highlight listening, calm communication, and a solution
                      that protected team performance.
                    </p>
                  </div>
                </div>
              </details>

              <details className="q-card">
                <summary className="q-card__header">
                  <span className="q-card__index">B2</span>
                  <p className="q-card__question">
                    Describe a time you made a mistake and how you fixed it.
                  </p>
                  <span className="q-card__chevron" aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>

                <div className="q-card__body">
                  <div className="q-card__section">
                    <span className="q-card__tag q-card__tag--intention">
                      Intention
                    </span>
                    <p>
                      Looks for accountability, reflection, and ownership of
                      outcomes.
                    </p>
                  </div>

                  <div className="q-card__section">
                    <span className="q-card__tag q-card__tag--answer">
                      Strong Answer
                    </span>
                    <p>
                      Explain the mistake clearly, the corrective steps taken,
                      what you learned, and how it improved your process moving
                      forward.
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </section>

          <section id="road-map" className="questions-panel interview-roadmap">
            <div className="content-header">
              <h2>Road Map</h2>
              <span className="content-header__count">3 steps</span>
            </div>

            <div className="roadmap-card">
              <div className="roadmap-item">
                <span className="roadmap-index">1</span>
                <div>
                  <h3>Prepare the story</h3>
                  <p>
                    Map your strongest technical and behavioral examples to the
                    role requirements.
                  </p>
                </div>
              </div>

              <div className="roadmap-item">
                <span className="roadmap-index">2</span>
                <div>
                  <h3>Practice the flow</h3>
                  <p>
                    Use the STAR structure to keep your answers clear, concise,
                    and convincing.
                  </p>
                </div>
              </div>

              <div className="roadmap-item">
                <span className="roadmap-index">3</span>
                <div>
                  <h3>Review and refine</h3>
                  <p>
                    Rehearse your answers and tune them to the language used in
                    the job description.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <div className="interview-divider" />

        <aside className="interview-sidebar">
          <div className="match-score">
            <p className="match-score__label">Match Score</p>

            <div className="match-score__ring score--high">
              <span className="match-score__value">85</span>
              <span className="match-score__pct">%</span>
            </div>

            <p className="match-score__sub">Strong match for this role</p>
          </div>

          <div className="sidebar-divider" />

          <div className="skill-gaps">
            <p className="skill-gaps__label">Skill Gaps</p>

            <div className="skill-gaps__list">
              <span className="skill-tag skill-tag--high">React</span>
              <span className="skill-tag skill-tag--medium">Node.js</span>
              <span className="skill-tag skill-tag--low">JavaScript</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Interview;
