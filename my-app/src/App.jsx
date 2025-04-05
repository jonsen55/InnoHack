// File: src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage.jsx";
import TeacherPanel from "./components/TeacherPanel.jsx";
import StudentPanel from "./components/StudentPanel.jsx";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-6">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/teacher" element={<TeacherPanel />} />
          <Route path="/student/:studentId" element={<StudentPanel />} />
        </Routes>
      </div>
    </Router>
  );
}
