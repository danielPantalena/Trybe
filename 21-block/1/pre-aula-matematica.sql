-- -- DIV e MOD
-- -- 1
-- SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';
-- -- 2
-- SELECT 220 DIV 12;
-- -- 3
-- SELECT 220 MOD 12;

-- -- Gerando valores aleatórios
-- -- 1
-- SELECT FLOOR(15 + (RAND() * 6));
-- -- Arredondamnto
-- -- 2
-- SELECT ROUND(15.75, 5);
-- -- 3
-- SELECT FLOOR(39.494);
-- -- 4
-- SELECT CONCAT(CEIL(85.234), '%');

-- -- Trabalhando com datas
-- -- 1
-- SELECT DATEDIFF('2030-01-20', NOW());
-- -- 2
-- SELECT TIMEDIFF('10:25:45', '11:00:00');

-- -- Utilizando as funções de agregação AVG, MIN, MAX, SUM e COUNT
-- -- 1
-- SELECT 
--   AVG(length) AS 'Média de Duração',
--   MIN(length) AS 'Duração Mínima',
--   MAX(length) AS 'Duração Máxima',
--   SUM(length) AS 'Tempo de Exibição Total',
--   COUNT(*) AS 'Filmes Registrados',
--   SUM(length)/COUNT(*) AS 'Soma Total/número de filmes (AVG)'
-- FROM sakila.film

-- -- Exibindo e filtrando dados de forma agrupada com GROUP BY e HAVING
-- -- 1
-- SELECT active, COUNT(active) 
-- FROM sakila.customer 
-- GROUP BY active;
-- 2
SELECT store_id, active, COUNT(*)
FROM sakila.customer
GROUP BY store_id, active;