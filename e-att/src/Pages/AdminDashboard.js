import React, { useState, useEffect } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserGraduate, faClipboardList, faUpload, faChalkboardTeacher, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import Users from '../Pages/Users';
import Attendance from './Attendance';
import UploadCourse from './UploadCourse';
import Addteachers from './Addteachers';
import Getenrollers from './Getenrollers';
import USSDRequests from './USSDRequests '
import '../Css/AdminDashboard.css';

const AdminDashboard = () => {
    const [adminName, setAdminName] = useState('');

    useEffect(() => {
        const fetchAdminName = async () => {
            try {
                const response = await fetch('http://localhost/bridge/getAdminName.php');
                const data = await response.json();
                setAdminName(data.admin_name);
            } catch (error) {
                console.error('Error fetching admin name:', error);
            }
        };

        fetchAdminName();
    }, []);

    return (
        <div className="admin_dashboard">
            <nav id="nav">
                <div className="adm_cont">
                    <h1 className="adm_n"  >Welcome, {adminName}</h1>
                    <div className="oval"></div>
                    <img className="t1" src="" alt="adm"/>
                </div>
                <div className="dashb">
                    <h1>Admin Dashboard</h1>
                    <hr id="hr"/>
                </div>
                <ul>
                    <li>
                        <NavLink to="users" activeClassName="active">
                            <FontAwesomeIcon className="f-icons" icon={faUsers} />
                            <span>Users</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="getenrollers" activeClassName="active">
                            <FontAwesomeIcon className="f-icons" icon={faUserGraduate} />
                            <span>Enrollments</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="attendance" activeClassName="active">
                            <FontAwesomeIcon className="f-icons" icon={faClipboardList} />
                            <span>Attendance Records</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="upload-course" activeClassName="active">
                            <FontAwesomeIcon className="f-icons" icon={faUpload} />
                            <span>Upload New Course</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="addTeachers" activeClassName="active">
                            <FontAwesomeIcon className="f-icons" icon={faChalkboardTeacher} />
                            <span>Add Lectures</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="USSDRequests" activeClassName="active">
                            <FontAwesomeIcon className="f-icons" icon={faMobileAlt} />
                            <span>USSD Requests</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
           
            <div className="admin-content">
                <Routes>
                    <Route path="/" element={<Users />} />
                    <Route path="users" element={<Users />} />
                    <Route path="getenrollers" element={<Getenrollers />} />
                    <Route path="upload-course" element={<UploadCourse />} />
                    <Route path="addteachers" element={<Addteachers />} />
                    <Route path="USSDRequests" element={<USSDRequests />} />
                </Routes>
            </div>
        </div>
    );
};

export default AdminDashboard;
