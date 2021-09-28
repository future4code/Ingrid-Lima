EXERCICIO 1

a) VARCHAR(n) - strings de no máximo n caracteres
DATE - representa uma data
CREATE TABLE - criar tabela

b) SHOW DATABASE - mostra informações sobre o banco de dados disponivel.

SHOW TABLE - mostra as tabelas disponiveis.

c)  DESCRIBE Actor - mostra todas a informações referente a tabela que foi criada 


EXERCICIO 2

a) 
````sql 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

````

b) erro de duplicação da chave primaria, cada item deve ter sua chave.

c) a quantidade de colunas não bate com a quantidade de informações passadas.

````sql
INSERT INTO Actor (id, name, salary, **birth_date, gender**) 
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

**= informação faltante para que o erro ocorra.
````

d) O campo 'nome' não tem um valor padrão

````sql
INSERT INTO Actor (id, **name**, salary, birth_date, gender)
VALUES(
  "004",
  **"Joãozinho",**
  400000,
  "1949-04-18", 
  "male"
);

**= informação faltante para que o erro ocorra.
````

e) Data declarada de forma incorreta, faltando o uso das aspas

````sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
````

f) 
````sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Carla Diaz",
  719333.33,
  "1990-03-26", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007",
  "Rodrigo Simas",
  400000,
  "1988-04-18", 
  "male"
);

````

EXERCICIO 3

a)

```sql
select * from Actor where gender = "female";
```

b)

```sql
select salary from Actor where name = "Tony Ramos";
```

c) Não retorna nenhuma linha.

d)

```sql
select id, name, salary from Actor where salary <= 500000;
```

e)A query está buscando o nome usando o termo "nome" e não o termo "name".

