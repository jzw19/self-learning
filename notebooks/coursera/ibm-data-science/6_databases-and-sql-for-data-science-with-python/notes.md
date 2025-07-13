# Basic SQL
- RDBMS - Relational database management system
  - Examples
    - MySQL
    - MyOracle Database
    - DB2 warehouse
    - DB2 on Cloud
- Primary operations on a database:
  - Create
  - Insert
  - Select
  - Update
  - Delete
- Data Manipulation Language (DML) statements are use dto read and modify data
- SELECT statement is called a query. Output from a query is called a result set or a result table
- SELECT
  - Selects columns from a table
  - (Self-explanatory) expressions used within SELECT clause:
    - COUNT
    - DISTINCT
  - Syntax:
    ```sql
    SELECT COUNT(*)
    FROM TableName;
    ```
- INSERT
  - Adds row(s) into a table
  - Syntax:
    ```sql
    INSERT INTO TableName
      (column0, column1, ...)
    VALUES
      (value00, value01, ...),
      (value10, value11, ...),
      ...
      (valuenN0, valueN1, ...);
    ```
- UPDATE
  - Modifies one or more rows in a table
  - Syntax:
    ```sql
    UPDATE TableName
    SET column0='new0', column1='new1'
    WHERE column0='old';
    ```
  - IMPORTANT - failing to specify a WHERE clause in an UPDATE statement will update all rows in the table. Use with caution.
- DELETE
  - Syntax:
    ```sql
    DELETE
    FROM TableName
    WHERE column0='new0';
    ```
  - IMPORTANT - failing to specify a WHERE clause in a DELETE statement will delete all rows in the table. Use with caution.
- 