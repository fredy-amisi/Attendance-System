-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 15, 2024 at 08:01 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `e-attendance`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `id` int(11) NOT NULL,
  `student_id` varchar(50) NOT NULL,
  `session_id` varchar(50) NOT NULL,
  `attendance_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `course_name` varchar(255) NOT NULL,
  `course_code` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `teacher_id` int(11) NOT NULL,
  `course_image` varchar(255) DEFAULT NULL,
  `upload_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `course_name`, `course_code`, `description`, `teacher_id`, `course_image`, `upload_date`) VALUES
(6, 'Networking', 'CIT4342', 'Networking', 1, 'WhatsApp Image 2024-06-11 at 12.15.21_66c81d45.jpg', '2024-06-21 07:35:24'),
(9, 'Python', 'CIT4343', 'Learn Python basics, data analysis, web development with Flask, and data visualization in 8 weeks.', 1, 'p.jpg', '2024-06-21 07:35:24'),
(11, 'Java', 'CIT4040', 'Java course covers fundamentals, OOP, GUI, data structures, web development, and databases in 10 weeks.', 1, 'j.jpg', '2024-06-21 07:35:24');

-- --------------------------------------------------------

--
-- Table structure for table `enrollments`
--

CREATE TABLE `enrollments` (
  `id` int(11) NOT NULL,
  `student_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `course_id` int(11) NOT NULL,
  `enrollment_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `enrollments`
--

INSERT INTO `enrollments` (`id`, `student_name`, `email`, `course_id`, `enrollment_date`) VALUES
(1, 'Fred Amisi', 'amisifredy20@gmail.com', 11, '2024-06-21 07:28:40'),
(2, 'Essie', 'essie@gmail.com', 6, '2024-06-21 07:35:50'),
(3, 'Abu', 'abuu1573@gmail.com', 9, '2024-06-21 07:44:58');

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `signin_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`id`, `name`, `email`, `signin_date`) VALUES
(1, 'Fred Amisi', 'freddy@gmail.com', '2024-06-21 07:34:42');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `role` enum('student','teacher','admin') NOT NULL,
  `phonenumber` varchar(15) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `is_admin` tinyint(1) GENERATED ALWAYS AS (if(`role` = 'Admin',1,NULL)) STORED,
  `signin_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `username`, `role`, `phonenumber`, `password`, `signin_date`) VALUES
(2, 'Esther Mwongeli', 'esther@gmail.com', 'essie', 'teacher', '113918190', '$2y$10$/NhuYirM45OQ61CSjhJPiepp5iAt0XqetFXsjxyUpIXoWERRaywkm', '2024-06-21 07:33:23'),
(3, 'John Doe', 'john@example.com', 'User1', 'student', '1234567890', '$2y$10$eImiTXuWVxfM37uY4JANjQeGq.GpJAfk9KPdMniUhPx4C3l0yG6Xu', '2024-06-21 07:33:23'),
(4, 'Jane Smith', 'jane@example.com', 'User2', 'teacher', '2345678901', '$2y$10$eImiTXuWVxfM37uY4JANjQeGq.GpJAfk9KPdMniUhPx4C3l0yG6Xu', '2024-06-21 07:33:23'),
(5, 'Mike Johnson', 'mike@example.com', 'User3', 'student', '3456789012', '$2y$10$eImiTXuWVxfM37uY4JANjQeGq.GpJAfk9KPdMniUhPx4C3l0yG6Xu', '2024-06-21 07:33:23'),
(6, 'Essie', 'essie@gmail.com', 'essie', 'teacher', '113918190', '$2y$10$1Y6kjq0u5/DRhKi2uWZfSeTFRHCVQvabujQFvE53YxxDPIIJaQJVG', '2024-06-21 07:33:23'),
(8, 'bro', 'bro@gmail.com', 'bro', 'student', '113918190', '$2y$10$4TPhb08M9/bpLbOFzOVQWOagmBKwKDr.3rNwOjA.KUdvkrpbH72Ti', '2024-06-21 07:33:23'),
(9, 'Fred', 'freddy@gmail.com', 'fred', 'admin', '113918190', '$2y$10$JeOcuu23OgtyRXVDQteyO.S7FaJYHmn.Hr3KOofmDKCqiQhney5xO', '2024-06-21 08:50:31'),
(10, 'Fred Amisi', 'freddy@gmail.com', 'fred', 'student', '113918190', '$2y$10$hSyumWMDtL6Zk6dguqesNuRatNQrU/hGYlQ38aLO4gkClUL7y5u9W', '2024-06-23 11:13:36'),
(11, 'Fred Amisi', 'freddy@gmail.com', 'fred', '', '113918190', '$2y$10$uj/CHBuXKEtgARJVZRevu.w5TcfYGbeYUr/RX7YVOXCZfjBNih7Ym', '2024-06-23 11:14:16');

--
-- Triggers `users`
--
DELIMITER $$
CREATE TRIGGER `before_insert_user` BEFORE INSERT ON `users` FOR EACH ROW BEGIN
    IF NEW.role = 'Admin' THEN
        IF (SELECT COUNT(*) FROM Users WHERE role = 'Admin') >= 1 THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'There can only be one admin.';
        END IF;
    END IF;
END
$$
DELIMITER ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_attendance` (`student_id`,`session_id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `course_code` (`course_code`),
  ADD KEY `fk_teacher_id` (`teacher_id`);

--
-- Indexes for table `enrollments`
--
ALTER TABLE `enrollments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `course_id` (`course_id`);

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `unique_email` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_admin` (`is_admin`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attendance`
--
ALTER TABLE `attendance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `enrollments`
--
ALTER TABLE `enrollments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `fk_teacher_id` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `enrollments`
--
ALTER TABLE `enrollments`
  ADD CONSTRAINT `enrollments_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
