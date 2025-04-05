// File: src/components/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import studentsData from '../../student.json';
import teachersData from '../../teacher.json';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Dummy password for demonstration
    const validPassword = '12345';

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Invalid email format');
      return;
    }

    const student = studentsData.students.find(s => s.email === email);
    const teacher = teachersData.find(t => `${t.name.toLowerCase().replace(/ /g, '.')}` + '@icp.edu.np' === email);

    if ((student || teacher) && password === validPassword) {
      const role = student ? 'student' : 'teacher';
      localStorage.setItem('user', JSON.stringify({ email, role }));

      if (role === 'student') {
        const studentId = student.studentId;
        navigate(`/student/${studentId}`);
      } else {
        navigate('/teacher');
      }
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 mb-2 text-sm">{error}</p>}
        <button 
          onClick={handleLogin} 
          className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
