import React from 'react';
import './Hirefromus.css';

const HireFromUs = () => {
  const students = [
    { id: 1, name: 'John Doe', qualification: 'Bachelor of Science in Computer Science', passoutYear: 2020, contact: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', qualification: 'Master of Business Administration', passoutYear: 2019, contact: 'jane.smith@example.com' },
    { id: 3, name: 'Alice Johnson', qualification: 'Bachelor of Arts in Economics', passoutYear: 2021, contact: 'alice.johnson@example.com' },
    { id: 4, name: 'Michael Brown', qualification: 'Bachelor of Engineering in Mechanical', passoutYear: 2018, contact: 'michael.brown@example.com' },
    { id: 5, name: 'Emily Davis', qualification: 'Bachelor of Science in Mathematics', passoutYear: 2022, contact: 'emily.davis@example.com' },
    { id: 6, name: 'David Wilson', qualification: 'Master of Science in Physics', passoutYear: 2023, contact: 'david.wilson@example.com' },
    // Additional students
    { id: 7, name: 'Sarah Lee', qualification: 'Bachelor of Arts in English Literature', passoutYear: 2017, contact: 'sarah.lee@example.com' },
    { id: 8, name: 'Kevin Johnson', qualification: 'Bachelor of Technology in Computer Engineering', passoutYear: 2016, contact: 'kevin.johnson@example.com' },
    { id: 9, name: 'Lisa Wang', qualification: 'Master of Computer Applications', passoutYear: 2020, contact: 'lisa.wang@example.com' },
    { id: 10, name: 'Daniel Kim', qualification: 'Bachelor of Science in Electrical Engineering', passoutYear: 2019, contact: 'daniel.kim@example.com' },
    { id: 11, name: 'Michelle Rodriguez', qualification: 'Bachelor of Science in Chemistry', passoutYear: 2021, contact: 'michelle.rodriguez@example.com' },
    { id: 12, name: 'Ryan Patel', qualification: 'Master of Science in Data Science', passoutYear: 2018, contact: 'ryan.patel@example.com' },
    { id: 13, name: 'Emma White', qualification: 'Bachelor of Fine Arts in Graphic Design', passoutYear: 2022, contact: 'emma.white@example.com' },
    { id: 14, name: 'Samuel Clark', qualification: 'Bachelor of Science in Biology', passoutYear: 2023, contact: 'samuel.clark@example.com' },
    { id: 15, name: 'Olivia Garcia', qualification: 'Bachelor of Commerce in Accounting', passoutYear: 2017, contact: 'olivia.garcia@example.com' },
    // Add more dummy students as needed
  ];

  return (
    <div>
      <h2>Hire From Us</h2>
      <h3>Check out our talented pool of students:</h3>
      <ul className="student-list">
        {students.map(student => (
          <li key={student.id} className="student-box">
            <strong>{student.name}</strong> - {student.qualification}, Passout Year: {student.passoutYear}, Contact: {student.contact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HireFromUs;
