-- Insert predefined values into Courses table
INSERT INTO Courses (course_name, course_code, description, teacher_id)
VALUES
    ('Introduction to Programming', 'CS101', 'Learn the basics of programming using Python.', 1),
    ('Database Management Systems', 'CS102', 'Understand the concepts of database management systems and SQL.', 2),
    ('Web Development', 'CS103', 'Build modern web applications using HTML, CSS, and JavaScript.', 3),
    ('Data Structures and Algorithms', 'CS104', 'Learn about various data structures and algorithms.', 4),
    ('Operating Systems', 'CS105', 'Explore the fundamentals of operating systems.', 5),
    ('Computer Networks', 'CS106', 'Study the principles of computer networking.', 6),
    ('Software Engineering', 'CS107', 'Introduction to software engineering principles and practices.', 7),
    ('Artificial Intelligence', 'CS108', 'Understand the basics of artificial intelligence and machine learning.', 8),
    ('Cyber Security', 'CS109', 'Learn about the various aspects of cyber security.', 9)
ON DUPLICATE KEY UPDATE
    course_name = VALUES(course_name),
    course_code = VALUES(course_code),
    description = VALUES(description),
    teacher_id = VALUES(teacher_id);
