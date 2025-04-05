import { useState } from "react";
import StudentRow from "./StudentRow";

const initialStudents = [
  { id: 1, name: "Alice Johnson", attendance: "Present" },
  { id: 2, name: "Bob Smith", attendance: "Absent" },
  { id: 3, name: "Charlie Brown", attendance: "Late" },
];

export default function TeacherPanel() {
  const [students, setStudents] = useState(initialStudents);

  const handleAttendanceChange = (id, newStatus) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, attendance: newStatus } : student
      )
    );
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-2xl">
      <h2 className="text-xl font-semibold text-center mb-6 text-gray-800">
        Attendance Panel
      </h2>
      <div className="space-y-4">
        {students.map((student) => (
          <StudentRow
            key={student.id}
            student={student}
            onChange={handleAttendanceChange}
          />
        ))}
      </div>
    </div>
  );
}
