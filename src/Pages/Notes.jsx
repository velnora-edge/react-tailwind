import React, { useState } from "react";

function Notes() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "React Components",
      content:
        "Components are reusable building blocks of a React application. They help divide the UI into smaller and manageable parts.",
      subject: "React JS",
      date: "Today",
    },
    {
      id: 2,
      title: "CSS Flexbox",
      content:
        "Flexbox is useful for creating flexible layouts. Important properties include display, justify-content, align-items and gap.",
      subject: "CSS",
      date: "Yesterday",
    },
    {
      id: 3,
      title: "JavaScript Functions",
      content:
        "Functions are reusable blocks of code designed to perform a particular task. They can accept parameters and return values.",
      subject: "JavaScript",
      date: "2 Days ago",
    },
  ]);

  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [subject, setSubject] = useState("General");

  const addNote = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      return;
    }

    const newNote = {
      id: Date.now(),
      title: title.trim(),
      content: content.trim(),
      subject,
      date: "Just now",
    };

    setNotes([newNote, ...notes]);

    setTitle("");
    setContent("");
    setSubject("General");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase()) ||
      note.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="notes-page">

      {/* HEADER */}
      <section className="notes-header">
        <div>
          <span className="page-label">
            ✦ YOUR KNOWLEDGE
          </span>

          <h1>Notes Library</h1>

          <p>
            Save important concepts, ideas and study notes
            in one organized place.
          </p>
        </div>

        <div className="notes-total">
          <strong>{notes.length}</strong>
          <span>Total Notes</span>
        </div>
      </section>

      {/* ADD NOTE */}
      <section className="notes-add-card">

        <div className="notes-add-heading">
          <div className="notes-add-icon">✎</div>

          <div>
            <span className="page-label">
              CREATE NEW
            </span>

            <h2>Add a New Note</h2>

            <p>
              Write down something you want to remember.
            </p>
          </div>
        </div>

        <form className="notes-form" onSubmit={addNote}>

          <div className="notes-input-row">

            <div className="notes-field">
              <label>Note Title</label>

              <input
                type="text"
                placeholder="e.g. React Hooks"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="notes-field">
              <label>Subject</label>

              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                <option>General</option>
                <option>HTML</option>
                <option>CSS</option>
                <option>JavaScript</option>
                <option>React JS</option>
                <option>Database</option>
                <option>Python</option>
              </select>
            </div>

          </div>

          <div className="notes-field">
            <label>Note Content</label>

            <textarea
              placeholder="Write your study note here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="5"
            ></textarea>
          </div>

          <button type="submit" className="add-note-btn">
            + Save Note
          </button>

        </form>
      </section>

      {/* NOTES TOOLBAR */}
      <section className="notes-toolbar">

        <div>
          <span className="page-label">
            YOUR NOTES
          </span>

          <h2>Recent Notes</h2>
        </div>

        <div className="notes-search">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search your notes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

      </section>

      {/* NOTES LIST */}
      <section className="notes-list">

        {filteredNotes.length === 0 ? (
          <div className="notes-empty">

            <div className="notes-empty-icon">
              📝
            </div>

            <h3>No notes found</h3>

            <p>
              Try another search or create a new note.
            </p>

          </div>
        ) : (
          <div className="notes-grid">

            {filteredNotes.map((note) => (
              <article className="note-card" key={note.id}>

                <div className="note-card-top">

                  <div className="note-icon">
                    📝
                  </div>

                  <button
                    className="delete-note"
                    onClick={() => deleteNote(note.id)}
                    title="Delete note"
                  >
                    🗑
                  </button>

                </div>

                <div className="note-subject">
                  {note.subject}
                </div>

                <h3>{note.title}</h3>

                <p>{note.content}</p>

                <div className="note-footer">
                  <span>{note.date}</span>

                  <span className="note-read">
                    Study Note
                  </span>
                </div>

              </article>
            ))}

          </div>
        )}

      </section>

    </main>
  );
}

export default Notes;