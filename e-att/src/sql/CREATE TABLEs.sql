CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('student', 'teacher') NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(15),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Courses (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    course_code VARCHAR(10) NOT NULL,
    description TEXT,
    teacher_id INT,
    FOREIGN KEY (teacher_id) REFERENCES Users(user_id)
);

CREATE TABLE Enrollments (
    enrollment_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    course_id INT,
    enrollment_date DATE,
    FOREIGN KEY (student_id) REFERENCES Users(user_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

CREATE TABLE AttendanceRecords (
    record_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    course_id INT,
    attendance_date DATE,
    status ENUM('present', 'absent', 'excused') NOT NULL,
    ussd_code VARCHAR(10),
    FOREIGN KEY (student_id) REFERENCES Users(user_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

CREATE TABLE USSDRequests (
    request_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    ussd_code VARCHAR(10) NOT NULL,
    request_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    response TEXT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Notifications (
    notification_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Policies (
    policy_id INT AUTO_INCREMENT PRIMARY KEY,
    policy_title VARCHAR(100) NOT NULL,
    policy_text TEXT NOT NULL,
    effective_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE SupportTickets (
    ticket_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    subject VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    status ENUM('open', 'in progress', 'closed') DEFAULT 'open',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
