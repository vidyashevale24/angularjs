-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 02, 2019 at 01:20 PM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vs`
--

-- --------------------------------------------------------

--
-- Table structure for table `rules`
--

CREATE TABLE `rules` (
  `id` int(11) NOT NULL,
  `ruleName` varchar(55) NOT NULL,
  `created_date` date NOT NULL,
  `modified_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rules`
--

INSERT INTO `rules` (`id`, `ruleName`, `created_date`, `modified_date`) VALUES
(1, 'dfdf', '0000-00-00', '0000-00-00 00:00:00'),
(2, 'gfgf', '0000-00-00', '0000-00-00 00:00:00'),
(3, 'fgfg', '0000-00-00', '0000-00-00 00:00:00'),
(4, 'kkk', '0000-00-00', '0000-00-00 00:00:00'),
(5, 'ffggggggh', '0000-00-00', '0000-00-00 00:00:00'),
(6, 'dfdf', '0000-00-00', '0000-00-00 00:00:00'),
(7, 'dfdfkk', '0000-00-00', '0000-00-00 00:00:00'),
(8, 'wqwqw', '0000-00-00', '0000-00-00 00:00:00'),
(9, 'opopo', '0000-00-00', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `rules`
--
ALTER TABLE `rules`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `rules`
--
ALTER TABLE `rules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
