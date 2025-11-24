import React from 'react';

export default function StudentList({ students, onEdit, onDelete }) {
    return (
        <div className="student-list">
            <table className="students-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Họ tên</th>
                        <th>Tuổi</th>
                        <th>Lớp</th>
                        <th>Email</th>
                        <th>Địa chỉ</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((s) => (
                        <tr key={s.id}>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>{s.age}</td>
                            <td>{s.grade}</td>
                            <td>{s.email}</td>
                            <td>{s.address}</td>
                            <td className="actions">
                                <button onClick={() => onEdit(s)}>Sửa</button>
                                <button onClick={() => onDelete(s.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
