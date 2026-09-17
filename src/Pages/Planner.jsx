
import React, { useState } from "react";

function Planner() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "React Router Practice",
      subject: "React JS",
      time: "10:00 AM",
      completed: false,
    },
    {
      id: 2,
      title: "CSS Flexbox & Grid",
      subject: "CSS",
      time: "12:00 PM",
      completed: true,
    },
    {
      id: 3,
      title: "JavaScript Functions",
      subject: "JavaScript",
      time: "03:00 PM",
      completed: false,
    },
  ]);

  const [newTask, setNewTask] = useState("");

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const addTask = (e) => {
    e.preventDefault();

    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      title: newTask,
      subject: "Study",
      time: "Today",
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const progress =
    tasks.length === 0
      ? 0
      : Math.round((completedTasks / tasks.length) * 100);

  return (
    <main className="planner-page">

      {/* HEADER */}
      <section className="planner-header">

        <div>
          <span className="page-label">
            ✦ YOUR STUDY PLAN
          </span>

          <h1>Study Planner</h1>

          <p>
            Organize your tasks, manage your study time and
            stay consistent with your goals.
          </p>
        </div>

        <div className="planner-date">
          <span>Today</span>
          <strong>My Study Plan</strong>
        </div>

      </section>


      {/* OVERVIEW */}
      <section className="planner-overview">

        <div className="planner-stat">
          <div className="planner-stat-icon">📋</div>

          <div>
            <strong>{tasks.length}</strong>
            <span>Total Tasks</span>
          </div>
        </div>


        <div className="planner-stat">
          <div className="planner-stat-icon green">✓</div>

          <div>
            <strong>{completedTasks}</strong>
            <span>Completed</span>
          </div>
        </div>


        <div className="planner-stat">
          <div className="planner-stat-icon orange">⏰</div>

          <div>
            <strong>{tasks.length - completedTasks}</strong>
            <span>Remaining</span>
          </div>
        </div>


        <div className="planner-stat">
          <div className="planner-stat-icon purple">📈</div>

          <div>
            <strong>{progress}%</strong>
            <span>Progress</span>
          </div>
        </div>

      </section>


      {/* ADD TASK */}
      <section className="planner-add">

        <div>
          <span className="page-label">ADD NEW TASK</span>
          <h2>What do you want to study?</h2>
        </div>

        <form onSubmit={addTask}>

          <input
            type="text"
            placeholder="Enter your study task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />

          <button type="submit">
            + Add Task
          </button>

        </form>

      </section>


      {/* TASK LIST */}
      <section className="planner-tasks">

        <div className="planner-section-title">
          <div>
            <span className="page-label">
              TODAY'S SCHEDULE
            </span>

            <h2>Study Tasks</h2>
          </div>

          <span className="task-count">
            {tasks.length} Tasks
          </span>
        </div>


        <div className="task-list">

          {tasks.length === 0 ? (

            <div className="empty-tasks">
              <div>📚</div>
              <h3>No tasks yet</h3>
              <p>Add your first study task above.</p>
            </div>

          ) : (

            tasks.map((task) => (

              <div
                className={`task-card ${
                  task.completed ? "completed" : ""
                }`}
                key={task.id}
              >

                <button
                  className="task-check"
                  onClick={() => toggleTask(task.id)}
                >
                  {task.completed ? "✓" : ""}
                </button>


                <div className="task-info">

                  <h3>{task.title}</h3>

                  <div className="task-meta">

                    <span>📖 {task.subject}</span>

                    <span>⏰ {task.time}</span>

                  </div>

                </div>


                <div className="task-status">

                  {task.completed
                    ? "Completed"
                    : "In Progress"}

                </div>

              </div>

            ))

          )}

        </div>

      </section>


      {/* PROGRESS */}
      <section className="planner-progress-card">

        <div>

          <span className="page-label">
            DAILY PROGRESS
          </span>

          <h2>
            Keep your study streak going 🔥
          </h2>

          <p>
            Complete your planned tasks to improve your
            daily study progress.
          </p>

        </div>


        <div className="planner-progress">

          <div className="planner-progress-top">

            <span>Today's Progress</span>

            <strong>{progress}%</strong>

          </div>

          <div className="planner-progress-bar">

            <div
              style={{
                width: `${progress}%`,
              }}
            ></div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Planner;

