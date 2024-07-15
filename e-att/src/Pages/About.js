import React, { useEffect, useRef, useState } from "react";
import e1 from "../Images/e1.jpg";
import Scrollbutton from "../Components/Scrollbutton";
import ScrollAnimation from "../Components/ScrollAnimation";
import '../Css/ScrollAnimation.css';

const About = () => {
  const { ref, isVisible } = ScrollAnimation();

  useEffect(() => {
    let classesCount = 200;
    let studentsCount = 1000;
    let teachersCount = 50;
    let departmentsCount = 10;

    function updateCountsOnScroll() {
      if (window.scrollY > 300) {
        updateCount("classesCount", classesCount);
        updateCount("studentsCount", studentsCount);
        updateCount("teachersCount", teachersCount);
        updateCount("departmentsCount", departmentsCount);
      }
    }

    // Function to update count for a specific section
    function updateCount(elementId, count) {
      let element = document.getElementById(elementId);
      let currentCount = 0;
      let updateInterval = setInterval(function () {
        if (element) {
          element.textContent = currentCount;
          currentCount++;
          if (currentCount > count) {
            clearInterval(updateInterval);
            element.textContent = count;
          }
        }
      }, 10);
    }

    // Attach the scroll event listener
    window.addEventListener("scroll", updateCountsOnScroll);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("scroll", updateCountsOnScroll);
    };
  }, []);

  return (
    <div className="about">
      <div className={`scroll-animation ${isVisible ? 'isVisible' : ''}`} ref={ref}>
        <div className="vertical-about"></div>
        <h3>About<span> E-Attendance System</span></h3>
      </div>
      <div className="all-containers">
        <div className="about-container1">
          <img className="a-image" src={e1} alt="E-Attendance System" />
        </div>
        <div className="about-container2">
          <h4>Enhancing Attendance Management: <br /><span>Crafting a Seamless Digital Platform </span> for Efficient Class Tracking</h4>
        </div>
      </div>
      <div className="about-container3">
        <h3>Revolutionizing Attendance:</h3>
        <p><span>Discover the philosophy guiding our endeavor. From ensuring seamless <br />attendance tracking to championing the efficiency of educational management,<br />explore how we're transforming the landscape<br />of academic administration.</span></p>
        <button className="Learn-more-button">Learn more</button>
      </div>
      <div className="division">
        <div className="section">
          <h2>Classes</h2>
          <p id="classesCount">0</p>
        </div>
        <div className="section">
          <h2>Students</h2>
          <p id="studentsCount">0</p>
        </div>
        <div className="section">
          <h2>Teachers</h2>
          <p id="teachersCount">0</p>
        </div>
        <div className="section">
          <h2>Departments</h2>
          <p id="departmentsCount">0</p>
        </div>
      </div>
      <Scrollbutton />
    </div>
  );
}

export default About;
