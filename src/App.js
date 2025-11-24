import React, { useState } from 'react';
import './App.css';
import initialStudents from './data/students';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleAddClick = () => {
    setEditing(null);
    setShowForm(true);
  };

  const handleEdit = (student) => {
    setEditing(student);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (!window.confirm('Xác nhận xóa học sinh?')) return;
    setStudents((list) => list.filter((s) => s.id !== id));
  };

  const handleSave = (student) => {
    if (student.id) {
      // update
      setStudents((list) => list.map((s) => (s.id === student.id ? student : s)));
    } else {
      // add
      const nextId = students.length ? Math.max(...students.map((s) => s.id)) + 1 : 1;
      setStudents((list) => [...list, { ...student, id: nextId }]);
    }
    setShowForm(false);
    setEditing(null);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditing(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quản lý học sinh</h1>
      </header>
      <div className="container">
        <div className="controls">
          <button onClick={handleAddClick}>Thêm học sinh</button>
        </div>
        {showForm && (
          <StudentForm initialData={editing} onSave={handleSave} onCancel={handleCancel} />
        )}

        <StudentList students={students} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
