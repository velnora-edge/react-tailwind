
import React, { useState } from "react";

function Subjects() {
  const [search, setSearch] = useState("");

  const subjects = [
    {
      name: "HTML",
      icon: "🌐",
      progress: 85,
      lessons: 18,
      completed: 15,
      color: "blue",
    },
    {
      name: "CSS",
      icon: "🎨",
      progress: 75,
      lessons: 20,
      completed: 15,
      color: "purple",
    },
    {
      name: "JavaScript",
      icon: "⚡",
      progress: 65,
      lessons: 25,
      completed: 16,
      color: "yellow",
    },
    {
      name: "React JS",
      icon: "⚛️",
      progress: 55,
      lessons: 22,
      completed: 12,
      color: "cyan",
    },
    {
      name: "Database",
      icon: "🗄️",
      progress: 45,
      lessons: 16,
      completed: 7,
      color: "green",
    },
    {
      name: "Python",
      icon: "🐍",
      progress: 35,
      lessons: 24,
      completed: 8,
      color: "orange",
    },
  ];

  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="subjects-page">

      {/* HEADER */}
      <section className="subjects-header">

        <div>
          <span className="page-label">
            ✦ YOUR LEARNING
          </span>

          <h1>My Subjects</h1>

          <p>
            Track your learning progress and keep improving
            every day.
          </p>
        </div>

        <div className="subjects-total">
          <strong>{subjects.length}</strong>
          <span>Active Subjects</span>
        </div>

      </section>


      {/* SEARCH */}
      <section className="subjects-toolbar">

        <div className="subject-search">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search subjects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="subjects-summary">
          <span>Overall Progress</span>
          <strong>60%</strong>
        </div>

      </section>


      {/* SUBJECT CARDS */}
      <section className="subjects-list">

        {filteredSubjects.length === 0 ? (

          <div className="subjects-empty">
            <div>🔎</div>
            <h3>No subject found</h3>
            <p>Try searching for another subject.</p>
          </div>

        ) : (

          <div className="subjects-page-grid">

            {filteredSubjects.map((subject) => (

              <div
                className={`subject-large-card ${subject.color}`}
                key={subject.name}
              >

                <div className="subject-large-top">

                  <div className="subject-large-icon">
                    {subject.icon}
                  </div>

                  <span className="subject-percent">
                    {subject.progress}%
                  </span>

                </div>


                <h2>{subject.name}</h2>

                <p className="subject-description">
                  Keep practicing and complete your lessons
                  to improve your skills.
                </p>


                <div className="subject-large-progress">

                  <div className="subject-large-progress-top">
                    <span>Course Progress</span>
                    <strong>{subject.progress}%</strong>
                  </div>

                  <div className="subject-large-bar">
                    <div
                      style={{
                        width: `${subject.progress}%`,
                      }}
                    ></div>
                  </div>

                </div>


                <div className="subject-details">

                  <div>
                    <strong>{subject.completed}</strong>
                    <span>Completed</span>
                  </div>

                  <div>
                    <strong>{subject.lessons}</strong>
                    <span>Total Lessons</span>
                  </div>

                  <div>
                    <strong>
                      {subject.lessons - subject.completed}
                    </strong>
                    <span>Remaining</span>
                  </div>

                </div>


                <button className="continue-btn">
                  Continue Learning →
                </button>

              </div>

            ))}

          </div>

        )}

      </section>

    </main>
  );
}

export default Subjects;
