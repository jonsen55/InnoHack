// File: src/components/StudentPanel.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { students, routineData } from "../data";

const StudentPanel = () => {
  const { studentId } = useParams();  // Get student ID from URL params
  const [student, setStudent] = useState(null);
  const [attendance, setAttendance] = useState([]);
  
  // Fetch student data by ID and attendance (this could come from an API or static data)
  useEffect(() => {
    const studentData = students.find((s) => s.studentId === studentId);
    if (studentData) {
      setStudent(studentData);
      // Mock attendance data based on studentId
      setAttendance([
        { date: "2025-04-01", status: "Present" },
        { date: "2025-04-02", status: "Absent" },
        { date: "2025-04-03", status: "Late" },
      ]);
    }
  }, [studentId]);

  if (!student) {
    return <div className="p-4">Student not found</div>;
  }

  const routine = routineData[`Group ${student.groupName.toUpperCase()}`];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Student Dashboard</h2>
      
      {/* Profile Section */}
      <div className="mb-6 p-4 bg-white rounded shadow">
        <h3 className="text-xl font-semibold mb-2">Profile</h3>
        <p><strong>Name:</strong> {student.studentName}</p>
        <p><strong>Group:</strong> {student.groupName}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Course:</strong> {student.course}</p>
      </div>

      {/* Attendance Section */}
      <div className="mb-6 p-4 bg-white rounded shadow">
        <h3 className="text-xl font-semibold mb-2">Attendance</h3>
        {attendance.length > 0 ? (
          <ul className="list-disc pl-5">
            {attendance.map((entry, index) => (
              <li key={index}>{entry.date}: {entry.status}</li>
            ))}
          </ul>
        ) : (
          <p>No attendance data available</p>
        )}
      </div>

      {/* Routine Section */}
      <div className="p-4 bg-white rounded shadow">
        <h3 className="text-xl font-semibold mb-2">Routine</h3>
        {routine ? (
          Object.entries(routine).map(([day, periods]) => (
            <div key={day} className="mb-3">
              <h4 className="font-bold">{day}</h4>
              <ul className="list-disc pl-5">
                {periods.map((p, i) => (
                  <li key={i}>{p.time} - {p.subject} ({p.room})</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No routine data available for this group</p>
        )}
      </div>
    </div>
  );
};

export default StudentPanel;
