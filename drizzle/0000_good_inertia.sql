-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `tokens` (
	`user` varchar(255) NOT NULL,
	`access_token` varchar(255) NOT NULL,
	`refresh_token` varchar(255) NOT NULL,
	`expiry_date` varchar(255),
	CONSTRAINT `tokens_user` PRIMARY KEY(`user`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`email` varchar(255) NOT NULL,
	`role` enum('creator','editor'),
	CONSTRAINT `users_user` PRIMARY KEY(`user`)
);
--> statement-breakpoint
CREATE TABLE `workspace` (
	`id` varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	`creator` varchar(255) NOT NULL,
	`editor` varchar(255),
	CONSTRAINT `workspace_user` PRIMARY KEY(`user`)
);
--> statement-breakpoint
CREATE INDEX `user_idx` ON `tokens` (`user`);--> statement-breakpoint
CREATE INDEX `user_idx` ON `workspace` (`creator`);
*/