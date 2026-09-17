import React from "react";

function Progress() {
  const subjects = [
    {
      name: "HTML",
      icon: "🌐",
      progress: 85,
      completed: 15,
      total: 18,
    },
    {
      name: "CSS",
      icon: "🎨",
      progress: 75,
      completed: 15,
      total: 20,
    },
    {
      name: "JavaScript",
      icon: "⚡",
      progress: 65,
      completed: 16,
      total: 25,
    },
    {
      name: "React JS",
      icon: "⚛️",
      progress: 55,
      completed: 12,
      total: 22,
    },
    {
      name: "Database",
      icon: "🗄️",
      progress: 45,
      completed: 7,
      total: 16,
    },
    {
      name: "Python",
      icon: "🐍",
      progress: 35,
      completed: 8,
      total: 24,
    },
  ];

  const totalLessons = subjects.reduce(
    (total, subject) => total + subject.total,
    0
  );

  const completedLessons = subjects.reduce(
    (total, subject) => total + subject.completed,
    0
  );

  const overallProgress =
    totalLessons === 0
      ? 0
      : Math.round((completedLessons / totalLessons) * 100);

  const studyStats = [
    {
      icon: "📚",
      number: "120+",
      label: "Study Hours",
      color: "blue",
    },
    {
      icon: "✅",
      number: "35",
      label: "Tasks Completed",
      color: "green",
    },
    {
      icon: "🔥",
      number: "7",
      label: "Day Streak",
      color: "orange",
    },
    {
      icon: "🎯",
      number: `${overallProgress}%`,
      label: "Overall Progress",
      color: "purple",
    },
  ];

  return (
    <main className="progress-page">

      {/* HEADER */}
      <section className="progress-header">
        <div>
          <span className="page-label">
            ✦ YOUR ACHIEVEMENT
          </span>

          <h1>My Progress</h1>

          <p>
            See how far you have come and keep working
            toward your learning goals.
          </p>
        </div>

        <div className="progress-date">
          <span>Study Goal</span>
          <strong>Keep Improving 🚀</strong>
        </div>
      </section>

      {/* MAIN PROGRESS */}
      <section className="overall-progress-card">

        <div className="overall-progress-content">
          <span className="page-label">
            OVERALL PROGRESS
          </span>

          <h2>
            You are making great progress!
          </h2>

          <p>
            Keep completing your lessons and stay consistent
            with your daily study routine.
          </p>

          <div className="overall-progress-bar">
            <div
              style={{
                width: `${overallProgress}%`,
              }}
            ></div>
          </div>

          <div className="overall-progress-bottom">
            <span>
              {completedLessons} of {totalLessons} lessons completed
            </span>

            <strong>{overallProgress}%</strong>
          </div>
        </div>

        <div className="progress-circle">
          <div className="progress-circle-inner">
            <strong>{overallProgress}%</strong>
            <span>Completed</span>
          </div>
        </div>

      </section>

      {/* STATISTICS */}
      <section className="progress-stats-section">

        <div className="progress-section-heading">
          <span className="page-label">
            YOUR NUMBERS
          </span>

          <h2>Study Statistics</h2>
        </div>

        <div className="progress-stats-grid">

          {studyStats.map((stat, index) => (
            <div
              className={`progress-stat-card ${stat.color}`}
              key={index}
            >
              <div className="progress-stat-icon">
                {stat.icon}
              </div>

              <div>
                <strong>{stat.number}</strong>
                <span>{stat.label}</span>
              </div>
            </div>
          ))}

        </div>

      </section>

      {/* SUBJECT PROGRESS */}
      <section className="subject-progress-section">

        <div className="progress-section-heading">
          <span className="page-label">
            SUBJECT PERFORMANCE
          </span>

          <h2>Progress by Subject</h2>
        </div>

        <div className="progress-subject-grid">

          {subjects.map((subject) => (
            <div
              className="progress-subject-card"
              key={subject.name}
            >

              <div className="progress-subject-top">

                <div className="progress-subject-name">
                  <div className="progress-subject-icon">
                    {subject.icon}
                  </div>

                  <div>
                    <h3>{subject.name}</h3>
                    <span>
                      {subject.completed} / {subject.total} lessons
                    </span>
                  </div>
                </div>

                <strong>{subject.progress}%</strong>

              </div>

              <div className="subject-progress-track">
                <div
                  style={{
                    width: `${subject.progress}%`,
                  }}
                ></div>
              </div>

              <div className="progress-subject-footer">
                <span>
                  {subject.progress >= 70
                    ? "Excellent progress"
                    : subject.progress >= 50
                    ? "Keep going"
                    : "Needs more practice"}
                </span>

                <span>
                  {subject.total - subject.completed} remaining
                </span>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* WEEKLY GOAL */}
      <section className="weekly-goal-card">

        <div className="weekly-goal-icon">
          🎯
        </div>

        <div className="weekly-goal-content">
          <span className="page-label">
            THIS WEEK
          </span>

          <h2>Keep your learning streak alive!</h2>

          <p>
            You have completed 5 out of 7 planned study days
            this week.
          </p>

          <div className="weekly-days">
            <span className="day completed">M</span>
            <span className="day completed">T</span>
            <span className="day completed">W</span>
            <span className="day completed">T</span>
            <span className="day completed">F</span>
            <span className="day">S</span>
            <span className="day">S</span>
          </div>
        </div>

        <div className="weekly-number">
          <strong>5/7</strong>
          <span>Days</span>
        </div>

      </section>

    </main>
  );
}

export default Progress;