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
-- Arredendamnto
-- 2
SELECT ROUND(15.75, 2);