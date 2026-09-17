import React, { useState } from "react";

function Profile() {
  const [name, setName] = useState("Areeba");
  const [email, setEmail] = useState("areeba@example.com");
  const [goal, setGoal] = useState("Become a Full Stack Developer");

  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  const achievements = [
    {
      icon: "🔥",
      title: "7 Day Streak",
      text: "Studied for 7 days in a row",
    },
    {
      icon: "📚",
      title: "120+ Hours",
      text: "Completed 120+ study hours",
    },
    {
      icon: "✅",
      title: "35 Tasks",
      text: "Completed 35 study tasks",
    },
    {
      icon: "🎯",
      title: "Goal Setter",
      text: "Created your learning goal",
    },
  ];

  return (
    <main className="profile-page">

      {/* HEADER */}
      <section className="profile-header">
        <div>
          <span className="page-label">
            ✦ YOUR ACCOUNT
          </span>

          <h1>My Profile</h1>

          <p>
            Manage your profile, learning goals and
            StudyFlow preferences.
          </p>
        </div>
      </section>

      {/* PROFILE TOP */}
      <section className="profile-card">

        <div className="profile-main">

          <div className="profile-avatar">
            A
          </div>

          <div className="profile-main-info">
            <h2>{name}</h2>

            <p>
              {email}
            </p>

            <span>
              ✦ StudyFlow Student
            </span>
          </div>

        </div>

        <div className="profile-streak">
          <span>Current Streak</span>
          <strong>🔥 7 Days</strong>
        </div>

      </section>

      {/* PROFILE CONTENT */}
      <section className="profile-content">

        {/* LEFT */}
        <div className="profile-settings">

          <div className="profile-section-title">
            <span className="page-label">
              PERSONAL INFORMATION
            </span>

            <h2>Profile Details</h2>
          </div>

          <form onSubmit={handleSave}>

            <div className="profile-form-row">

              <div className="profile-field">
                <label>Full Name</label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                />
              </div>

              <div className="profile-field">
                <label>Email Address</label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                />
              </div>

            </div>

            <div className="profile-field">
              <label>Learning Goal</label>

              <input
                type="text"
                value={goal}
                onChange={(e) =>
                  setGoal(e.target.value)
                }
              />
            </div>

            <div className="profile-field">
              <label>About My Journey</label>

              <textarea
                rows="5"
                defaultValue="I am working on improving my web development skills and building consistent study habits with StudyFlow."
              ></textarea>
            </div>

            <button
              type="submit"
              className="save-profile-btn"
            >
              {saved ? "✓ Changes Saved" : "Save Changes"}
            </button>

          </form>

        </div>

        {/* RIGHT */}
        <div className="profile-goal-card">

          <div className="goal-card-icon">
            🎯
          </div>

          <span className="page-label">
            CURRENT GOAL
          </span>

          <h2>{goal}</h2>

          <p>
            Keep learning consistently and complete your
            weekly study targets.
          </p>

          <div className="profile-goal-progress">

            <div className="profile-goal-top">
              <span>Goal Progress</span>
              <strong>68%</strong>
            </div>

            <div className="profile-goal-bar">
              <div></div>
            </div>

          </div>

          <div className="profile-goal-stats">

            <div>
              <strong>120+</strong>
              <span>Hours</span>
            </div>

            <div>
              <strong>35</strong>
              <span>Tasks</span>
            </div>

            <div>
              <strong>7</strong>
              <span>Streak</span>
            </div>

          </div>

        </div>

      </section>

      {/* ACHIEVEMENTS */}
      <section className="achievements-section">

        <div className="profile-section-title">
          <span className="page-label">
            YOUR MILESTONES
          </span>

          <h2>Achievements</h2>
        </div>

        <div className="achievements-grid">

          {achievements.map((achievement, index) => (
            <div
              className="achievement-card"
              key={index}
            >

              <div className="achievement-icon">
                {achievement.icon}
              </div>

              <div>
                <h3>{achievement.title}</h3>

                <p>
                  {achievement.text}
                </p>
              </div>

              <span className="achievement-check">
                ✓
              </span>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}

export default Profile;