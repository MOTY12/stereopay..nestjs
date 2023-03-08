-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 08, 2023 at 02:48 PM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stereopay`
--

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

CREATE TABLE `media` (
  `type` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `status` enum('active','inactive') NOT NULL DEFAULT 'active',
  `id` varchar(36) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `media`
--

INSERT INTO `media` (`type`, `name`, `description`, `url`, `status`, `id`, `created_at`, `updated_at`, `deleted_at`) VALUES
('audio', 'holiday', 'rema launch this song on trip to dubai', 'https://i0.wp.com/thescoove.africa/wp-content/uploads/2023/02/images-50.jpeg?fit=500%2C457&ssl=1', 'active', '145bf120-00ef-4a88-b0c3-1ab52ca76496', '2023-03-08 10:24:20.538159', '2023-03-08 12:41:08.545705', NULL),
('audio', 'gwagalada', 'seyi vibes launch this song on trip to dubai', 'https://i0.wp.com/thescoove.africa/wp-content/uploads/2023/02/images-50.jpeg?fit=500%2C457&ssl=1', 'active', '57bf202b-2548-4f6b-bc11-ab654922a319', '2023-03-08 13:31:07.453368', '2023-03-08 13:31:07.453368', NULL),
('image', 'sability', 'ayra star launch this song on trip to dubai', 'https://i0.wp.com/thescoove.africa/wp-content/uploads/2023/02/images-50.jpeg?fit=500%2C457&ssl=1', 'inactive', '94b2d152-3bd2-4822-9470-5dcf21be1fa8', '2023-03-08 10:57:59.768293', '2023-03-08 13:31:17.000000', '2023-03-08 13:31:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
