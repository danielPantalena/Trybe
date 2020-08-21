-- DIV e MOD
-- 1
SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';
-- 2
SELECT 220 DIV 12;
-- 3
SELECT 220 MOD 12;

-- Gerando valores aleatórios
-- 1
SELECT FLOOR(15 + (RAND() * 6));
-- Arredondamnto
-- 2
SELECT ROUND(15.75, 5);
-- 3
SELECT FLOOR(39.494);
-- 4
SELECT CONCAT(CEIL(85.234), '%');

-- Trabalhando com datas
-- 1
SELECT DATEDIFF('2030-01-20', NOW());