export default function StudentRow({ student, onChange }) {
  return (
    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm">
      <div className="text-lg text-gray-700">{student.name}</div>
      <select
        value={student.attendance}
        onChange={(e) => onChange(student.id, e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-700 focus:ring-2 focus:ring-blue-400"
      >
        <option value="Present">Present</option>
        <option value="Late">Late</option>
        <option value="Absent">Absent</option>
      </select>
    </div>
  );
}
