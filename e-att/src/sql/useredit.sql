-- Drop the trigger if it exists
DROP TRIGGER IF EXISTS before_insert_user;

-- Ensure the column and constraint setup is correct
ALTER TABLE Users DROP COLUMN IF EXISTS is_admin;
ALTER TABLE Users ADD COLUMN is_admin TINYINT(1) AS (IF(role = 'Admin', 1, NULL)) STORED;
CREATE UNIQUE INDEX unique_admin ON Users(is_admin);

-- Create the trigger to enforce single admin rule
CREATE TRIGGER before_insert_user 
BEFORE INSERT ON Users
FOR EACH ROW
BEGIN
    IF NEW.role = 'Admin' THEN
        IF (SELECT COUNT(*) FROM Users WHERE role = 'Admin') >= 1 THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'There can only be one admin.';
        END IF;
    END IF;
END;
