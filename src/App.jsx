import React from "react";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Planner from "./Pages/Planner";
import Subjects from "./Pages/Subjects";
import Notes from "./Pages/Notes";
import Progress from "./Pages/Progress";
import Profile from "./Pages/Profile";

import "./App.css";

function App() {
  return (
    <HashRouter>

  <div className="app">

    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/planner" element={<Planner />} />
      <Route path="/subjects" element={<Subjects />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>

    <Footer />

  </div>

</HashRouter>
  );
}

export default App;