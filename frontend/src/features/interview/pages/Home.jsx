import React from "react";
import "../style/home.scss";

const Home = () => {
  return (
    <main className="home">
      <header className="interview-header">
        <h1>
          Create Your Custom <span>Interview Plan</span>
        </h1>
        <p>
          Let our AI analyze the job requirements and your unique profile to
          <br className="desktop-break" /> build a winning strategy.
        </p>
      </header>

      <section className="interview-card" aria-label="Interview plan details">
        <div className="interview-input-group">
          <div className="job-description-panel">
            <div className="section-heading">
              <h2>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M8 6V4.8A1.8 1.8 0 0 1 9.8 3h4.4A1.8 1.8 0 0 1 16 4.8V6" />
                  <rect x="3.5" y="6" width="17" height="14" rx="2" />
                  <path d="M3.5 11h17M9 11v2h6v-2" />
                </svg>
                Target Job Description
              </h2>
              <span className="field-badge">Required</span>
            </div>

            <div className="job-description-field">
              <label className="visually-hidden" htmlFor="jobDescription">
                Target job description
              </label>
              <textarea
                id="jobDescription"
                name="jobDescription"
                maxLength={5000}
                placeholder="Paste the full job description here...&#10;e.g. 'Senior Frontend Engineer at Google requires proficiency in React, TypeScript, and large-scale system design...'"
              />
              <span className="character-count">0 / 5000 chars</span>
            </div>
          </div>

          <div className="profile-panel">
            <div className="section-heading profile-heading">
              <h2>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="12" cy="7" r="3.5" />
                  <path d="M5.5 20v-1.5A5.5 5.5 0 0 1 11 13h2a5.5 5.5 0 0 1 5.5 5.5V20" />
                </svg>
                Your Profile
              </h2>
            </div>

            <div className="resume-field">
              <div className="field-label-row">
                <label htmlFor="resume">Upload Resume</label>
                <span className="field-badge">Best results</span>
              </div>
              <label className="resume-dropzone" htmlFor="resume">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5" />
                  <path d="M5 14.5v3A2.5 2.5 0 0 0 7.5 20h9a2.5 2.5 0 0 0 2.5-2.5v-3" />
                </svg>
                <span>Click to upload or drag &amp; drop</span>
                <small>PDF or DOCX (Max 5MB)</small>
              </label>
              <input
                className="visually-hidden"
                type="file"
                name="resume"
                id="resume"
                accept=".pdf,.doc,.docx"
              />
            </div>

            <div className="or-divider" aria-hidden="true">
              <span />
              <small>OR</small>
              <span />
            </div>

            <div className="self-description-field">
              <label htmlFor="selfDescription">Quick Self-Description</label>
              <textarea
                name="selfDescription"
                id="selfDescription"
                maxLength={2000}
                placeholder="Briefly describe your experience, key skills, and years of experience if you don't have a resume handy..."
              />
            </div>

            <div className="requirement-note">
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 1.67a8.33 8.33 0 1 0 0 16.66 8.33 8.33 0 0 0 0-16.66Zm0 3.75a1.04 1.04 0 1 1 0 2.08 1.04 1.04 0 0 1 0-2.08Zm1.04 9.16H8.96v-1.25h.42V9.58h-.42V8.33h1.66v5h.42v1.25Z" />
              </svg>
              <p>
                Either a <strong>Resume</strong> or a{" "}
                <strong>Self Description</strong> is required to generate a
                personalized plan.
              </p>
            </div>
          </div>
        </div>

        <footer className="interview-card-footer">
          <p>AI-Powered Strategy Generation · Approx 30s</p>
          <button className="button primary-button" type="button">
            <span aria-hidden="true">★</span>
            Generate My Interview Strategy
          </button>
        </footer>
      </section>
    </main>
  );
};

export default Home;
