CREATE TABLE IF NOT EXISTS `todos` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `text` varchar(45) NOT NULL,
  `status` varchar(20) NOT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `admin` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;