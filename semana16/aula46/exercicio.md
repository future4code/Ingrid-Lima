EXERCICIO 1

a) Esse comando irá excluir da tabela Actor a coluna salary.
b) Esse comando irá alterar o genero de todos atores para female.
c) Esse comando irá alterar para que a coluna gênero aceite strings de até 255 caracteres.
d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

EXERCICIO 2

a)
````SQL
UPDATE Actor
SET
name = "Moacyr Franco da Silva",
birth_date = "2010-05-24"
WHERE id= 003;

b)

UPDATE Actor
SET name = "JULIANA PAES"
WHERE name= "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name= "JULIANA PAES";

c)

UPDATE Actor
SET
name = "Moacyr Franco Souza",
birth_date = "2021-02-10",
salary = 300000,
gender = "male"
WHERE id = "005";
````

EXERCICIO 3
````SQL
a)

DELETE FROM Actor WHERE name = "Fernanda Montenegro"

b)

DELETE FROM Actor WHERE
gender = "male" AND salary < 1.000.000,00
````

EXERCICIO 4
````SQL
a) SELECT MAX(salary) FROM Actor
b) SELECT MIN(salary) FROM Actor WHERE gender = "female"
c) SELECT COUNT(\*) FROM Actor WHERE gender = "female"
d) SELECT SUM(salary) FROM Actor
````

EXERCICIO 5

a) A última query retorna um grupo com a quantidade de atores conforme o gênero.
````SQL
b) SELECT id, name FROM Actor ORDER BY name DESC
c) SELECT _ FROM Actor ORDER BY salary
d) SELECT _ FROM Actor ORDER BY salary DESC LIMIT 3
e) SELECT AVG(salary), gender FROM Actor GROUP BY gender
````

EXERCICIO 6

````SQL
a) ALTER TABLE Movie ADD playing_limit_date DATE;
b) ALTER TABLE Movie CHANGE rating FLOAT;
c) UPDATE Movie SET playing_limit_date = "2020-12-31" WHERE id = "001";  
 UPDATE Movie SET playing_limit_date = "2021-12-31" WHERE id = "001";

d) DELETE FROM Movie WHERE id = "0001";
````
EXERCICIO 7

a) 
````SQL
SELECT COUNT(*) FROM Movie WHERE rate > 7.5;
 2 filmes

b)

SELECT AVG(rate) FROM Movie;
 Média de 7.5

c)
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
 1 filme

 d)
SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();
 0 filmes

e)
SELECT MAX(rate) FROM Movie;
 nota 9
f)
SELECT MIN(rate) FROM Movie;
 nota 6
````

EXERCICIO 8
````SQL
a) SELECT _ FROM Movie ORDER BY title ASC;
b) SELECT _ FROM Movie ORDER BY title ASC LIMIT 5;
c) SELECT _ FROM Movie WHERE release_date < CURDATE() ORDER BY release_date DESC LIMIT 3;
d) SELECT _ FROM MOVIE ORDER BY rating DESC LIMIT 3
````