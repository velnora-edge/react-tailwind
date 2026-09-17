
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const stats = [
    { number: "120+", label: "Study Hours", icon: "📚" },
    { number: "35", label: "Completed Tasks", icon: "✅" },
    { number: "12", label: "Subjects", icon: "📖" },
    { number: "7 Days", label: "Current Streak", icon: "🔥" },
  ];

  const subjects = [
    { name: "HTML", progress: 85, icon: "🌐" },
    { name: "CSS", progress: 75, icon: "🎨" },
    { name: "JavaScript", progress: 65, icon: "⚡" },
    { name: "React JS", progress: 55, icon: "⚛️" },
    { name: "Database", progress: 45, icon: "🗄️" },
    { name: "Python", progress: 35, icon: "🐍" },
  ];

  return (
    <main className="home">

  
{/* HERO */}

<section className="hero">

  <img
    className="hero-bg"
    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=90"
    alt="Students studying"
  />

  <div className="hero-overlay"></div>

  <div className="hero-content">

    <span className="hero-tag">
      ✦ SMART STUDY PLANNER
    </span>

    <h1 className="hero-title">
      Plan Smarter.
      <br />
      Study Better.
    </h1>

    <p>
      Organize your study routine, track your progress,
      manage your subjects and stay focused on your goals
      with StudyFlow.
    </p>

    <div className="hero-buttons">

      <Link to="/planner" className="btn-primary">
        Start Planning →
      </Link>

      <Link to="/progress" className="btn-secondary">
        View Progress
      </Link>

    </div>

    <div className="hero-mini-info">

      <div>
        <strong>12+</strong>
        <span>Subjects</span>
      </div>

      <div>
        <strong>35+</strong>
        <span>Tasks Done</span>
      </div>

      <div>
        <strong>7</strong>
        <span>Day Streak</span>
      </div>

    </div>

  </div>

</section>


{/* HOW IT WORKS */}
<section className="how-section">

  <div className="how-heading">
    <div>
      <span>YOUR STUDY JOURNEY</span>
      <h2>Study smarter, one step at a time.</h2>
    </div>

    <p>
      Everything you need to stay organized, focused,
      and consistent throughout your learning journey.
    </p>
  </div>

  <div className="how-grid">

    <div className="how-card">
      <div className="how-number">01</div>

      <div className="how-icon">📅</div>

      <h3>Plan Your Day</h3>

      <p>
        Create your daily study tasks and organize
        your subjects with a clear learning plan.
      </p>

      <span className="how-arrow">→</span>
    </div>


    <div className="how-card featured">
      <div className="how-number">02</div>

      <div className="how-icon">⚡</div>

      <h3>Stay Focused</h3>

      <p>
        Follow your plan, complete your tasks,
        and build a consistent study routine.
      </p>

      <span className="how-arrow">→</span>
    </div>


    <div className="how-card">
      <div className="how-number">03</div>

      <div className="how-icon">📈</div>

      <h3>Track Progress</h3>

      <p>
        See your progress, celebrate completed goals,
        and keep improving every day.
      </p>

      <span className="how-arrow">→</span>
    </div>

  </div>

</section>


    </main>
  );
}

export default Home;
