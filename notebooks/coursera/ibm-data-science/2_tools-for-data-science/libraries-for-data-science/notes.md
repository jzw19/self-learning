# Libraries, APIs, Datasets and Models

## Libraries for Data Science
- Scientific computing libraries
  - a.k.a. frameworks
  - Examples
    - Pandas
      - Primary instrument is the Data Frame
        - 2D table
      - Can provide easy indexing
      - Based on NumPy
    - NumPy
      - Based on arrays and matrices
      - Good for application of matrix operations
- Visualization libraries
  - Examples
    - Matplotlib
      - Great for graphs and plots
    - Seaborn
      - Based on Matplotlib
      - Good for heat maps, time series and violin plots
- Deep learning libraries in Python
  - Examples
    - Scikit-learn
      - Tools for statistical modeling, like:
        - Regression
        - Classification
        - Clustering
      - Built on NumPy, SciPy and matplotlib
    - Keras
      - Good for building deep learning models
      - Can function using GPUs, but often requires lower-level environment
    - Tensorflow
      - Designed for production
      - Troublesome for experimentation
    - Pytorch
      - Good for experimentation
    - Apache Spark
      - General purpose cluster-computing framework
      - Enables processing data using compute clusters (parallel processing on multiple computers)
      - Predominantly used in data engineering and data science
    - Scala libraries
      - Vegas
        - Statistical data visualizations
      - big DL
        - Deep learning
      - ggplot2
        - Data visualization in R


## Application Programming Interfaces (APIs)
- Allows communication between pieces of software
- Data transmitted using Hypertext Transfer Protocol (HTTP) methods
- Is the surface that is exposed for other programs to interact with
- Abstracts away the internal details of a program (often a library)


## Data Sets - Powering Data Science
- Defined as a structured collection of data
- One popular tabular data format is comma-separated values (CSV)
- Hierarchical or network data structures are typically used to represent relationships between data
  - Hierarchical is organized in tree-like format
  - Network data is stored as a graph
- The Modified National Institute of Standards and Technology (MNIST) dataset is popular for data science
  - Contains images of handwritten numbers
- Like open-source, there is a concept of "open data"
  - Find a comprehensive list at https://datacatalogs.org
  - Kaggle is a popular data science community
- Open data distribution and use might be restricted, as defined by certain licensing terms


## Machine Learning (ML) Models - Learning from Models to Make Predictions
- "Model" is synonymous with "algorithm" in the context of ML
- Models are used to identify patterns in data
  - The process by which models learn these patterns from data is called "model training"
  - After being trained, a model can then make predictions
- 3 basic classes:
  - Supervised learning
  - Unsupervised learning
  - Reinforcement learning
- Supervised learning
  - Most commonly used
  - Human provides input data and correct outputs
  - Model's objective is to identify relationships and dependencies between input and correct output
  - Comprises 2 types of models:
    - Regression
      - Used to predict numeric (a.k.a. "real") values
    - Classification
      - Used to predict categories (a.k.a. "classes") that values belong in
- Unsupervised learning
  - Data not labelled by humans
  - Model's objective is to identify patterns and structure within the data based on its characteristics
  - Examples:
    - Clustering
      - Divide records of a dataset into similar groups
      - Examples:
        - Purchase recommendations
        - Anomaly detection
          - Identifies outliers in a dataset
- Reinforcement Learning
  - Model learns the best set of actions to take based on a reward and punishment system
- Deep learning
  - Refers to a general set of models and techniques that loosely emulate the way the human brain solves problems
  - Commonly used to analyze natural language, images, audio, forecast time series, and more
  - Requires large datasets of labeled data to train a model
  - Is compute intensive
  - Typically requires special hardware
  - Pre-trained models can be downloaded from repositories (referred to as model zoos)
    - Popular providers include:
      - Tensorflow
      - PyTorch
      - Keras
      - ONNX


---


# Jupyter Notebooks and JupyterLab
- Enables user to write markdown and runnable code blocks side-by-side
- Has a "slides" feature
- _Kernel_ - a computational engine that executes the code contained in a Notebook file
  - Can switch between different kernels as per your own requirement
- Hyperlinks use the same format as Github (markdown)
- Images use the same format as hyperlinks, but prefixed with an exclamation mark "!"
- Jupyter Architecture
  - 2-process model:
    - Kernel
      - Executes the code and returns the result to the client to display
    - Client
      - Interface that offers the user the ability to send code to the kernel
  - When an online Notebook is saved, the file is sent to the Notebook server
    - Notebook server saves and loads notebooks
    - NB convert tool is used to convert files to other formats
      - Notebook is first modified by a preprocessor
      - Postprocessor works on the exported file to give final output


---


# RStudio IDE
- R:
  - Is known for producing great visualizations
  - Supports importing data from a variety of different sources
  - Contains standard packages to handle data analysis
- RStudio features:
  - Syntax highlighting in editor
  - Direct code execution
  - Record of work
  - Console
  - Workspace
  - History tab for objects created during session
  - Files tab to display working directory
  - Plots tab to display history of plots created
  - Ability to export plots in different file formats
  - Packages tab to display external packages available locally
  - Help tab
  - Common libraries for plotting:
    - Inbuilt plot function
    - Libraries:
      - ggplot
        - Data visualization
          - Histograms
          - Bar charts
          - Scatterplots
      - Plotly
        - Web-based data visualizations
        - Displayed directly on web page
        - Exported as HTML
      - Lattice
        - Complex, multi-variable data sets
        - Handles graphics without customizations
      - Leaflet
        - Interactive plots
      - GGally
        - Extends ggplot


---


# Acronyms in this Document
- _GPU_ - Graphics Processing Unit
- _API_ - Application Programming Interface
- _HTTP_ - Hypertext Transfer Protocol
- _CSV_ - Comma-separated values
- _MNIST_ - Modified National Institute of Standards and Technology
- _ML_ - Machine learning
