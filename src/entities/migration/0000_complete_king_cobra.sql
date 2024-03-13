CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`email` text NOT NULL,
	`email_confirmed_at` text,
	`password` text NOT NULL,
	`created_on` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_on` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);