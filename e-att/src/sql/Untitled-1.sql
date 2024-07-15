-- Ensure AUTO_INCREMENT is set for the primary key
ALTER TABLE `teachers` MODIFY `id` INT(11) NOT NULL AUTO_INCREMENT;

-- Add a UNIQUE constraint to the email column if it doesn't exist
ALTER TABLE `teachers` ADD CONSTRAINT `unique_email` UNIQUE (`email`);
