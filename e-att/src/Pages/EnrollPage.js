import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Css/EnrollPage.css';

const EnrollPage = () => {
  const [studentName, setStudentName] = useState('');
  const [email, setEmail] = useState('');
  const [courseId, setCourseId] = useState('');
  const [courses, setCourses] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch courses from the server
    fetch('http://localhost/bridge/enrollment_option_fetch.php')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (studentName && email && courseId) {
      try {
        const submissionData = { student_name: studentName, email, course_id: courseId };
        const { data } = await axios.post('http://localhost/bridge/enrollment_save.php', submissionData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (data.success) {
          alert("Enrolled successfully!");
          setFormSubmitted(true);
          navigate('/courses');
        } else {
          alert("Error: " + data.message);
        }
      } catch (error) {
        console.error(error);
        alert("Error enrolling: " + error.message);
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="enroll-page">
      <h1>Course Enrolment</h1>
      {!formSubmitted ? (
        <form className="enroll-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="studentName">Student Name:</label>
            <input
              type="text"
              id="studentName"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="course">Course:</label>
            <select
              id="course"
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
              required
            >
              <option value="">Select a course</option>
              {courses.map(course => (
                <option key={course.id} value={course.id}>{course.course_name}</option>
              ))}
            </select>
          </div>
          <div className="Enroll-container">
            <button className="Enroll" type="submit">Enroll</button>
          </div>
        </form>
      ) : (
        <p>Thank you for enrolling!</p>
      )}
    </div>
  );
};

export default EnrollPage;
