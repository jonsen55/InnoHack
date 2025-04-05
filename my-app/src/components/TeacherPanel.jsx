// File: src/components/TeacherPanel.jsx
import React, { useState } from "react";
import { students, routineData } from "../data";

const TeacherPanel = () => {
  const [selectedGroup, setSelectedGroup] = useState("c1");
  const [attendanceData, setAttendanceData] = useState({});

  const groupStudents = students.filter((s) => s.groupName === selectedGroup);

  const handleAttendance = (studentId, status) => {
    setAttendanceData((prev) => ({ ...prev, [studentId]: status }));
  };

  const handleSubmit = () => {
    console.log("Attendance Submitted:", attendanceData);
    alert("Attendance Submitted Successfully!");
    setAttendanceData({}); // Reset attendance data after submission
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Teacher Dashboard</h2>

      {/* Group Selection */}
      <div className="mb-6">
        <label className="mr-2 font-semibold">Select Group:</label>
        <select
          value={selectedGroup}
          onChange={(e) => setSelectedGroup(e.target.value)}
          className="border p-1 rounded"
        >
          <option value="c1">C1</option>
          <option value="c2">C2</option>
        </select>
      </div>

      {/* Attendance Section */}
      <div className="mb-6 p-4 bg-white rounded shadow">
        <h3 className="text-xl font-semibold mb-2">Mark Attendance</h3>
        {groupStudents.map((student) => (
          <div key={student.studentId} className="flex items-center justify-between mb-2">
            <span>{student.studentName}</span>
            <div>
              {["Present", "Absent", "Late"].map((status) => (
                <button
                  key={status}
                  onClick={() => handleAttendance(student.studentId, status)}
                  className={`px-4 py-2 mx-1 rounded transition-all duration-300 ${
                    attendanceData[student.studentId] === status
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        ))}
        <button
          onClick={handleSubmit}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-all duration-300"
        >
          Submit Attendance
        </button>
      </div>
    </div>
  );
};

export default TeacherPanel;
