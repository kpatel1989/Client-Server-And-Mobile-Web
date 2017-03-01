-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 28, 2017 at 09:13 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quiz`
--

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `testId` int(11) NOT NULL,
  `question` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `testId`, `question`) VALUES
(1, 1, 'Which of the following is correct about callbacks?'),
(2, 1, 'Which of the following is the correct syntax to create a cookie using JavaScript?'),
(3, 1, 'Which built-in method combines the text of two strings and returns a new string?'),
(4, 1, 'Which of the following function of Number object forces a number to display in exponential notation?'),
(5, 1, 'Which of the following function of String object combines the text of two strings and returns a new string?'),
(6, 1, 'Which of the following function of String object extracts a section of a string and returns a new string?'),
(7, 1, 'Which of the following function of String object creates a string to blink as if it were in a <blink> tag?'),
(8, 1, 'Which of the following function of String object causes a string to be displayed as struck-out text, as if it were in a <strike> tag?'),
(9, 1, 'Which of the following function of Array object returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found?'),
(10, 1, 'Which of the following function of Array object returns a string representing the array and its elements?'),
(11, 1, 'Which built-in method calls a function for each element in the array?'),
(12, 1, 'Which built-in method reverses the order of the elements of an array?'),
(13, 1, 'Which of the following function of Boolean object returns a string of either \"true\" or \"false\" depending upon the value of the object?'),
(14, 1, 'Which of the following function of String object returns the characters in a string beginning at the specified location through the specified number of characters?'),
(15, 1, 'Which of the following function of String object returns the calling string value converted to lower case?'),
(16, 1, 'Which of the following function of Array object returns a new array comprised of this array joined with other array(s) and/or value(s)?'),
(17, 1, 'Which of the following function of Array object calls a function for each element in the array?'),
(18, 1, 'Which of the following function of Array object removes the first element from an array and returns that element?'),
(19, 1, 'Which of the following type of variable is visible everywhere in your JavaScript code?'),
(20, 1, 'Which built-in method returns the character at the specified index?'),
(21, 2, 'Which of the following is correct?'),
(22, 2, 'jQuery uses CSS selectors to select elements?'),
(23, 2, 'Which sign does jQuery use as a shortcut for jQuery?'),
(24, 2, 'Look at the following selector: $(\"div\"). What does it select?'),
(25, 2, 'Is jQuery a library for client scripting or server scripting?'),
(26, 2, 'Is it possible to use jQuery together with AJAX?'),
(27, 2, 'The jQuery html() method works for both HTML and XML documents'),
(28, 2, 'What is the correct jQuery code to set the background color of all p elements'),
(29, 2, 'With jQuery, look at the following selector: $(\"div.intro\"). What does it'),
(30, 2, 'Which jQuery method is used to hide selected elements?'),
(31, 2, 'Which jQuery method is used to set one or more style properties for selected'),
(32, 2, 'Which jQuery method is used to perform an asynchronous HTTP request?'),
(33, 2, 'What is the correct jQuery code for making all div elements 100 pixels high?'),
(34, 2, 'Which statement is true?'),
(35, 2, 'What scripting language is jQuery written in?'),
(36, 2, 'Which jQuery function is used to prevent code from running, before the'),
(37, 2, 'Which jQuery method should be used to deal with name conflicts?'),
(38, 2, 'Which jQuery method is used to switch between adding/removing one or more'),
(39, 2, 'Look at the following selector: $(\"div p\"). What does it select?'),
(40, 2, 'Is jQuery a W3C standard?');

-- --------------------------------------------------------

--
-- Table structure for table `question_options`
--

CREATE TABLE `question_options` (
  `id` int(11) NOT NULL,
  `questionId` int(11) NOT NULL,
  `optionText` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `isCorrect` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `question_options`
--

INSERT INTO `question_options` (`id`, `questionId`, `optionText`, `isCorrect`) VALUES
(1, 1, '\"A callback is a plain JavaScript function passed to some method as an argument or option.\"', 0),
(2, 1, '\"Some callbacks are just events, called to give the user a chance to react when a certain state is triggered.\"', 0),
(3, 1, '\"Both of the above.\"', 1),
(4, 1, '\"None of the above.\"', 0),
(5, 2, '\"document.cookie = \"key1 = value1; key2 = value2; expires = date\";\"', 1),
(6, 2, '\"browser.cookie = \"key1 = value1; key2 = value2; expires = date\";\"', 0),
(7, 2, '\"window.cookie = \"key1 = value1; key2 = value2; expires = date\";\"', 0),
(8, 2, '\"navigator.cookie = \"key1 = value1; key2 = value2; expires = date\";\"', 0),
(9, 3, '\"append()\"', 0),
(10, 3, '\"concat()\"', 1),
(11, 3, '\"attach()\"', 0),
(12, 3, '\"None of the above.\"', 0),
(17, 4, '\"toExponential()\"', 1),
(18, 4, '\"toFixed()\"', 0),
(19, 4, '\"toPrecision()\"', 0),
(20, 4, '\"toLocaleString()\"', 0),
(21, 5, '\"add()\"', 0),
(22, 5, '\"merge()\"', 0),
(23, 5, '\"concat()\"', 1),
(24, 5, '\"append()\"', 0),
(25, 6, '\"slice()\"', 1),
(26, 6, '\"split()\"', 0),
(27, 6, '\"replace()\"', 0),
(28, 6, '\"search()\"', 0),
(29, 7, '\"anchor()\"', 0),
(30, 7, '\"big()\"', 0),
(31, 7, '\"blink()\"', 1),
(32, 7, '\"italics()\"', 0),
(33, 8, '\"sup()\"', 0),
(34, 8, '\"small()\"', 0),
(35, 8, '\"strike()\"', 1),
(36, 8, '\"sub()\"', 0),
(37, 9, '\"indexOf()\"', 1),
(38, 9, '\"join()\"', 0),
(39, 9, '\"lastIndexOf()\"', 0),
(40, 9, '\"map()\"', 0),
(41, 10, '\"slice()\"', 0),
(42, 10, '\"sort()\"', 0),
(43, 10, '\"splice()\"', 0),
(44, 10, '\"toString()\"', 1),
(45, 11, '\"while()\"', 0),
(46, 11, '\"loop()\"', 0),
(47, 11, '\"forEach()\"', 1),
(48, 11, '\"None of the above.\"', 0),
(49, 12, '\"changeOrder(order)\"', 0),
(50, 12, '\"reverse()\"', 1),
(51, 12, '\"sort(order)\"', 0),
(52, 12, '\"None of the above.\"', 0),
(53, 13, '\"toSource()\"', 0),
(54, 13, '\"valueOf()\"', 0),
(55, 13, '\"toString()\"', 1),
(56, 13, '\"None of the above.\"', 0),
(57, 14, '\"slice()\"', 0),
(58, 14, '\"split()\"', 0),
(59, 14, '\"substr()\"', 1),
(60, 14, '\"search()\"', 0),
(61, 15, '\"toLocaleLowerCase()\"', 0),
(62, 15, '\"toLowerCase()\"', 1),
(63, 15, '\"toString()\"', 0),
(64, 15, '\"substring()\"', 0),
(65, 16, '\"concat()\"', 1),
(66, 16, '\"pop()\"', 0),
(67, 16, '\"push()\"', 0),
(68, 16, '\"some()\"', 0),
(69, 17, '\"concat()\"', 0),
(70, 17, '\"every()\"', 0),
(71, 17, '\"filter()\"', 0),
(72, 17, '\"forEach()\"', 1),
(73, 18, '\"reverse()\"', 0),
(74, 18, '\"some()\"', 0),
(75, 18, '\"shift()\"', 1),
(76, 18, '\"slice()\"', 0),
(77, 19, '\"global variable\"', 1),
(78, 19, '\"local variable\"', 0),
(79, 19, '\"Both of the above.\"', 0),
(80, 19, '\"None of the above.\"', 0),
(81, 20, '\"characterAt()\"', 0),
(82, 20, '\"getCharAt()\"', 0),
(83, 20, '\"charAt()\"', 1),
(84, 20, '\"None of the above.\"', 0),
(85, 21, '\"jQuery is a JavaScript Library\"', 1),
(86, 21, '\"jQuery is a JSON Library\"', 0),
(87, 21, '\"jQuery is a not a Library\"', 0),
(88, 21, '\"jQuery is a different than JavaScript.\"', 0),
(89, 22, '\"false\"', 0),
(90, 22, '\"true\"', 1),
(91, 23, '\"the ? Sign\"', 0),
(92, 23, '\"the $ sign\"', 1),
(93, 23, '\"the % sign\"', 0),
(94, 24, '\"The first div element\"', 0),
(95, 24, '\"All div elements\"', 1),
(96, 25, '\"Client scripting\"', 1),
(97, 25, '\"Server scripting\"', 0),
(98, 26, '\"Yes\"', 1),
(99, 26, '\"No\"', 0),
(100, 27, '\"False\"', 1),
(101, 27, '\"True\"', 0),
(102, 28, '\"$(\"p\").style(\"background-color\",\"red\");\"', 0),
(103, 28, '\"$(\"p\").manipulate(\"background-color\",\"red\");\"', 0),
(104, 28, '\"$(\"p\").layout(\"background-color\",\"red\");\"', 0),
(105, 28, '\"$(\"p\").css(\"background-color\",\"red\");\"', 1),
(106, 29, '\"The first div element with id=\"intro\"\"', 0),
(107, 29, '\"The first div element with class=\"intro\"\"', 0),
(108, 29, '\"All div elements with id=\"intro\"\"', 0),
(109, 29, '\"All div elements with class=\"intro\"\"', 1),
(110, 30, '\"hidden()\"', 0),
(111, 30, '\"visible(false)\"', 0),
(112, 30, '\"display(none)\"', 0),
(113, 30, '\"hide()\"', 1),
(114, 31, '\"css()\"', 1),
(115, 31, '\"html()\"', 0),
(116, 31, '\"style()\"', 0),
(117, 32, '\"jQuery.ajaxAsync()\"', 0),
(118, 32, '\"jQuery.ajaxSetup()\"', 0),
(119, 32, '\"jQuery.ajax()\"', 1),
(120, 33, '\"$(\"div\").height=\"100\"\"', 0),
(121, 33, '\"$(\"div\").yPos(100)\"', 0),
(122, 33, '\"$(\"div\").height(100)\"', 1),
(123, 34, '\"To use jQuery, you can refer to a hosted jQuery library at Google\"', 0),
(124, 34, '\"To use jQuery, you do not have to do anything. Moslibrary,t browsers (Internet Explorer, Chrome, Firefox and Opera) have the jQuery library built in the browser\"', 0),
(125, 34, '\"To use jQuery, you must buy the jQuery library at www.jquery.com\"', 1),
(126, 35, '\"VBScript\"', 0),
(127, 35, '\"JavaScript\"', 1),
(128, 35, '\"C#\"', 0),
(129, 35, '\"C++\"', 0),
(130, 36, '\"$(document).load()\"', 0),
(131, 36, '\"$(document).ready()\"', 1),
(132, 36, '\"$(body).onload()\"', 0),
(133, 37, '\"noConflict()\"', 1),
(134, 37, '\"conflict()\"', 0),
(135, 37, '\"nameConflict()\"', 0),
(136, 37, '\"noNameConflict()\"', 0),
(137, 38, '\"switch()\"', 0),
(138, 38, '\"toggleClass()\"', 1),
(139, 38, '\"switchClass()\"', 0),
(140, 38, '\"altClass()\"', 0),
(141, 39, '\"All div elements with a p element\"', 0),
(142, 39, '\"The first p element inside a div element\"', 0),
(143, 39, '\"All p elements inside a div element\"', 1),
(144, 40, '\"Yes\"', 0),
(145, 40, '\"No\"', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tests`
--

CREATE TABLE `tests` (
  `id` int(11) NOT NULL,
  `testName` varchar(45) DEFAULT NULL,
  `testDisplayImage` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tests`
--

INSERT INTO `tests` (`id`, `testName`, `testDisplayImage`) VALUES
(1, 'Javascript', 'js.png'),
(2, 'jQuery', 'jquery.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(45) DEFAULT NULL,
  `lastName` varchar(45) DEFAULT NULL,
  `emailId` varchar(100) NOT NULL,
  `isSubscriber` binary(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `emailId`, `isSubscriber`) VALUES
(1, 'asd', 'asd', 'asd', 0x30),
(2, 'Kartik', 'Patel', 'katk.1989@gmail.com', 0x31),
(3, NULL, NULL, 'babydaminiverma@gmail.com', 0x31),
(4, 'Damini', 'Verma', 'babydamini@yahoo.in', 0x30),
(5, NULL, NULL, 'deep24kumar24@gmail.com', 0x31),
(6, 'dhruvin', 'shangvi', 'dhruvin@gmail.com', 0x30),
(7, 'fdsfds', 'fwer', 'wr@asd.asd', 0x30),
(8, '13', '123', '123@123.123', 0x30),
(9, '12', '123', '123@asd.seef2', 0x30);

-- --------------------------------------------------------

--
-- Table structure for table `user_credentials`
--

CREATE TABLE `user_credentials` (
  `userId` int(11) NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_credentials`
--

INSERT INTO `user_credentials` (`userId`, `password`) VALUES
(2, '123'),
(4, '123456'),
(6, '123'),
(7, '1234'),
(8, '123'),
(9, '123');

-- --------------------------------------------------------

--
-- Table structure for table `user_tests`
--

CREATE TABLE `user_tests` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `testId` int(11) DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  `testTaken` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_tests`
--

INSERT INTO `user_tests` (`id`, `userId`, `testId`, `score`, `testTaken`) VALUES
(1, NULL, 1, 0, '2017-02-21 01:01:14'),
(2, NULL, 1, 1, '2017-02-21 01:01:14'),
(3, NULL, 1, 0, '2017-02-21 01:01:14'),
(4, NULL, 1, 1, '2017-02-21 01:01:14'),
(5, 2, 1, 1, '2017-02-21 01:01:14'),
(6, 2, 1, 0, '2017-02-21 01:01:14'),
(7, NULL, 1, 0, '2017-02-21 01:01:14'),
(8, NULL, 1, 0, '2017-02-21 01:01:14'),
(9, NULL, 1, 0, '2017-02-21 01:01:14'),
(10, NULL, 1, 0, '2017-02-21 01:01:14'),
(11, NULL, 1, 1, '2017-02-21 01:01:14'),
(12, NULL, 2, 0, '2017-02-21 01:01:14'),
(13, 2, 1, 1, '2017-02-21 01:01:14'),
(14, NULL, 1, 1, '2017-02-21 01:01:14'),
(15, 2, 1, 0, '2017-02-21 01:01:14'),
(16, NULL, 1, 0, '2017-02-21 01:01:14'),
(17, NULL, 1, 0, '2017-02-21 01:01:14'),
(18, NULL, 1, 1, '2017-02-21 01:01:14'),
(19, NULL, 1, 0, '2017-02-21 01:01:14'),
(20, NULL, 1, 0, '2017-02-21 01:01:14'),
(21, NULL, 1, 1, '2017-02-21 01:01:14'),
(22, NULL, 1, 0, '2017-02-21 01:01:14'),
(23, NULL, 1, 0, '2017-02-21 01:01:14'),
(24, NULL, 1, 0, '2017-02-21 01:01:14'),
(25, 2, 1, 0, '2017-02-21 01:01:14'),
(26, 2, 1, 0, '2017-02-21 01:01:14'),
(27, 2, 1, 0, '2017-02-21 01:01:14'),
(28, 2, 1, 1, '2017-02-21 01:04:36'),
(29, 4, 1, 0, '2017-02-21 01:46:50'),
(30, NULL, 1, 1, '2017-02-21 01:50:15'),
(31, NULL, 1, 0, '2017-02-21 01:55:48'),
(32, 2, 1, 0, '2017-02-21 02:15:41'),
(33, 2, 2, 0, '2017-02-21 02:17:20'),
(34, 2, 1, 0, '2017-02-21 02:20:10'),
(35, 2, 2, 0, '2017-02-21 02:25:05'),
(36, 2, 1, 0, '2017-02-21 02:26:25'),
(37, 2, 2, 1, '2017-02-21 02:44:31'),
(38, 2, 2, 0, '2017-02-21 02:48:36'),
(39, 2, 2, 0, '2017-02-21 03:13:09'),
(40, 2, 1, 0, '2017-02-21 03:19:50'),
(41, 2, 1, 0, '2017-02-21 03:19:50'),
(42, 7, 1, 3, '2017-02-28 03:16:06'),
(43, 7, 2, 5, '2017-02-28 03:27:33'),
(44, 8, 2, 3, '2017-02-28 03:28:33'),
(45, 9, 1, 1, '2017-02-28 03:32:34'),
(46, 9, 2, 2, '2017-02-28 03:39:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `question_options`
--
ALTER TABLE `question_options`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_question_options_questionId` (`questionId`);

--
-- Indexes for table `tests`
--
ALTER TABLE `tests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_credentials`
--
ALTER TABLE `user_credentials`
  ADD PRIMARY KEY (`userId`),
  ADD KEY `fk_user_cred_user_id_idx` (`userId`);

--
-- Indexes for table `user_tests`
--
ALTER TABLE `user_tests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_tests_userId_idx` (`userId`),
  ADD KEY `fk_user_tests_testid_idx` (`testId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
--
-- AUTO_INCREMENT for table `question_options`
--
ALTER TABLE `question_options`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=146;
--
-- AUTO_INCREMENT for table `tests`
--
ALTER TABLE `tests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `user_tests`
--
ALTER TABLE `user_tests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `question_options`
--
ALTER TABLE `question_options`
  ADD CONSTRAINT `fk_question_options_questionId` FOREIGN KEY (`questionId`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_credentials`
--
ALTER TABLE `user_credentials`
  ADD CONSTRAINT `fk_user_cred_user_id` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_tests`
--
ALTER TABLE `user_tests`
  ADD CONSTRAINT `fk_user_tests_testId` FOREIGN KEY (`testId`) REFERENCES `tests` (`id`),
  ADD CONSTRAINT `fk_user_tests_userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
