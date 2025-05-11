# Data Literacy for Data Science
## Data Sources
- Relational Databases
- Flat files, XML datasets, Spreadsheets
  - Flat files
    - Plain text format
    - New line = new record
    - Each value is separated by a delimiter
    - e.g. CSV
  - Spreadsheets
    - e.g. Excel file (.xls, .xlsx)
- APIs and Web Services
- Web Scraping
  - Extract data from relevant sources
  - a.k.a.:
    - screen scraping
    - web harvesting
    - web data extraction
- Data streams and feeds
  - Aggregating streams of data from instruments, IoT devices & applications, GPS data, programs, websites, social media posts, etc.

## Data Literacy
- _Data Repository_ - A general term used to refer to data that has been collected, organized and isolated

### Data Collection and Organization
- Data repositories include:
  
  - Databases
    - Collections of data for input, storage, search, retrieval and modification of that data
    - Typically handled by a _database management system (DBMS)_ - a set of programs for creating, handling and maintaining the database
    - Categorized as 2 types: relational (SQL) or non-relational (NoSQL)
      - Relational DB
        - Data is organized in tables
        - Follows well-defined structure or schema
        - Optimized for data ops and querying
      - Non-relational DB
        - Built for speed, flexibility and scale
        - Data is stored in schema-less form
        - Widely used for processing big data
  
  - Data warehouses
    - Consolidates data through the extract, transform and load (ETL) process into 1 database for analytics and business intelligence (BI)
    - Have historically been relational, but aren't restricted to being relational

  - Big data stores
    - Distributed computational and storage infrastructure to store, scale and process very large data sets

### Relational Database Management System (RDBMS)
- _Relational Database_ - A collection of data organized into a table structure, where tables can be linked based on data common to each
- Use SQL for querying data
- Each table has a unique set of rows and columns
- Fields can be restricted by data type and value
- Optimized for querying large records of data quickly
- Security architecture of relational DBs provides greater access control and governance
- Examples of popular RDBMSs:
  - IBM DB2
  - Microsoft SQL Server 
  - MySQL
  - Oracle Database
  - PostgreSQL
- Examples of popular cloud relational DBs (a.k.a. DB-as-a-Service):
  - Amazon Relational Database Service
  - Google Cloud SQL
  - IBM DB2 on Cloud
  - Oracle Cloud
  - SQL Azure
- RDBMS is not suitable for semi-structured or unstructured data

### NoSQL
- Provides flexible schemas for storage and retrieval of data
- Chosen for their attributes around scale, performance and ease of use
- Built for specific data models 
- Have flexible schemas
- May support SQL, but typically don't
- 4 common types:

  - Key-value store
    - Great for in-memory data caching
    - Bad if you need need relationships between data values or have a use case for duplicate keys
    - Examples:
      - Redis
      - Memcached
      - DynamoDB

  - Document-based
    - Good for:
      - Flexible indexing
      - Powerful ad hoc queries
      - Analytics over collections of documents
    - Bad for:
      - Complex search queries
      - Multi-operation transactions
    - Examples:
      - MongoDB
      - DocumentDB
      - CouchDB
      - Cloudant

  - Column-based
    - Data is stored in cells grouped by column instead of row
    - _Column family_ - A logical grouping of columns (that are usually accessed together)
    - Accessing and searching data is very fast
    - Good for:
      - Handling heavy write requests
      - Storing time-series data, weather data and IoT data
    - Bad for:
      - Complex queries
      - Querying patterns that change frequently
    - Examples:
      - Cassandra
      - HBase

  - Graph-based
    - Use a graphical model to represent and store data
    - Good for:
      - Visualizing, analyzing and finding connections between data
      - Connected data
    - Bad for:
      - Processing high volumes of transactions
    - Examples:
      - Neo4j
      - CosmosDB

### Data Marts, Data Lakes, ETL, and Data Pipelines
- Data Warehouse
  - Single source of truth
  - Multi-purpose enabler of operational and performance analytics
- Data Mart
  - Sub-section of a data warehouse, built specifically for a particular business function, purpose or community of users
- Data Lake
  - Storage repository that can store large amounts of structured, semi-structured and unstructured data in their native format, classified and tagged with metadata
  - Opt for a data lake if you generate (or have access to) large volumes of data on an ongoing basis, but don't want to be restricted to specific or pre-defined use cases
  - Retains all source data, no exclusions
  - Has an important role in predictive and advanced analytics
- ETL
  - Is the generic, automated process that converts raw data into analysis-ready data
  - E: Extract
    - Batch processing
      - Source data is moved in large chunks at scheduled intervals
      - Example tools:
        - Stitch
        - Blendo
    - Stream processing
      - Source data is pulled in real-time and transformed during transit before being loaded into the data repository
      - Example tools:
        - Apache Samza
        - Apache Storm
        - Apache Kafka
  - T: Transform
    - Involves the execution of rules and functions that convert raw data into data that can be used for analysis
    - Examples:
      - Conversions on date formats and units of measurement to normalize them and make them consistent
      - Filtering out unnecessary data
      - Applying business rules and validations
  - L: Load
    - Transportation of processed data to its destination
    - Examples:
      - Initial loading
        - Populating all data in destination at once
      - Incremental loading
        - Applying ongoing updates and modifications as needed periodically
      - Full refresh
        - Delete first, then upload with fresh data
- Data Pipeline
  - Broader term than ETL
  - Refers to the entire journey of moving data from one system to another. ETL is a subset of this
  - Can be architected for batch processing, streaming data or a mix of both
  - Is a high performing system that supports both long-running batch queries and smaller interactive queries
  - Destination of date through a data pipeline is typically a data lake, but this isn't a hard restriction
  - Example tools:
    - Apache Beam
    - DataFlow


---


# Acronyms in this Document
  - _XML_ - Extensible Markup Language
  - _CSV_ - Comma-Separated Values
  - _GPS_ - Global Positioning System
  - _DB_ - Database
  - _DBMS_ - Database Management System
  - _SQL_ - Structured Query Language
  - _NoSQL_ - Not only Structured Query Language
  - _BI_ - Business Intelligence
  - _ETL_ - Extract, Transform, Load
