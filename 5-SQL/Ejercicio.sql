USE world;


SELECT Name, Population FROM country ORDER BY Population DESC;

SELECT Name, Population FROM country WHERE Name='Mexico';
SELECT * FROM country WHERE Name='Mexico';

SELECT * FROM Country WHERE LifeExpectancy < 50 ORDER BY LifeExpectancy ASC;

