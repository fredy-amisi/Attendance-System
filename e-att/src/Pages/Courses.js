import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/Styling.css";
import Scrollbutton from "../Components/Scrollbutton";
import { useNavigate } from "react-router-dom";


const Courses = () => {
  const navigate = useNavigate();
  
  const handleClick=()=>{
    navigate('/EnrollPage');

  }
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost/bridge/getcourses.php");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <div className="courses-page">
        <div className="courses-vertical"></div>
        <h1>
          MOST POPULAR<span> ONLINE</span> <br />
          BEST IN <span>COURSES</span>
        </h1>
        <div className="course-container">
          {courses.map((course) => (
            <div className="courses" key={course.id}>
              <img src={`http://localhost/bridge/uploads/${course.course_image}`} alt={course.course_name} className="course-image" />
              <h3>{course.course_name}</h3>
              <p>{course.description}</p>
              <button className="Enroll" onClick={handleClick}>Enroll</button>
            </div>
          ))}
        </div>
      </div>
      <Scrollbutton />
    </div>
  );
};

export default Courses;
