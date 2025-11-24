import React, { useEffect, useState } from 'react';

export default function StudentForm({ initialData = null, onSave, onCancel }) {
    const empty = { id: null, name: '', age: '', grade: '', email: '', address: '' };
    const [student, setStudent] = useState(empty);

    useEffect(() => {
        if (initialData) setStudent(initialData);
        else setStudent(empty);
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent((s) => ({ ...s, [name]: name === 'age' ? (value === '' ? '' : Number(value)) : value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!student.name) return alert('Vui lòng nhập tên học sinh.');
        onSave && onSave({ ...student });
    };

    return (
        <form className="student-form" onSubmit={handleSubmit}>
            <h3>{student.id ? 'Sửa học sinh' : 'Thêm học sinh'}</h3>
            <div className="row">
                <label>Họ tên</label>
                <input name="name" value={student.name} onChange={handleChange} />
            </div>
            <div className="row">
                <label>Tuổi</label>
                <input name="age" type="number" value={student.age} onChange={handleChange} />
            </div>
            <div className="row">
                <label>Lớp</label>
                <input name="grade" value={student.grade} onChange={handleChange} />
            </div>
            <div className="row">
                <label>Email</label>
                <input name="email" value={student.email} onChange={handleChange} />
            </div>
            <div className="row">
                <label>Địa chỉ</label>
                <input name="address" value={student.address} onChange={handleChange} />
            </div>
            <div className="form-actions">
                <button type="submit">{student.id ? 'Lưu' : 'Thêm'}</button>
                <button type="button" onClick={() => onCancel && onCancel()}>Hủy</button>
            </div>
        </form>
    );
}
