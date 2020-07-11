INSERT INTO 
  burgers (burger_name, devoured)
VALUES 
  ("Mushroom Swiss", false),
  ("Impossible Burger", false),
  ("Black Bean Burger", false);

SELECT 
    id, 
    burger_name, 
IF 
  (devoured, 'true', 'false') devoured
FROM
    burgers;

