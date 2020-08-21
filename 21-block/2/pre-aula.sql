-- 1
SELECT
  a.actor_id,
  a.first_name,
  f.film_id
FROM
  sakila.actor a
  INNER JOIN sakila.film_actor f ON (a.actor_id = f.actor_id);

-- 2 
SELECT
  s.first_name,
  s.last_name,
  a.address
FROM
  sakila.staff s
  INNER JOIN sakila.address a ON (s.address_id = a.address_id);

-- 3
SELECT
  c.customer_id,
  c.first_name,
  c.email,
  c.address_id,
  a.address
FROM
  sakila.customer c
  INNER JOIN sakila.address a ON c.address_id = a.address_id
ORDER BY
  c.first_name DESC
LIMIT
  100;