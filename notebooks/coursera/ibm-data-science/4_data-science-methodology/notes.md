# Problem to Approach

## Data Science Methodology Overview
- _Methodology_ - a system of methods; a guideline for decision-making during the scientific process
  - Provides practical guidance
- Data science methodology (outlined by John Rollins)
  - 10 stages and questions to ask at each stage:
    1. Business understanding
        - What is the problem you are trying to solve?
    2. Analytic approach
        - How can you use data to answer the question?
    3. Data requirements
        - What data do you need to answer the question?
    4. Data collection
        - Where's the data source from?
        - How will you receive the data?
    5. Data understanding
        - Does the data that you collect represent the problem to be solved?
    6. Data preparation
        - What additional work is required to manipulate and work with the data?
    7. Modeling
        - When you apply data visualizations, do you see answers that address the business problem?
    8. Evaluation
        - Does the data model answer the initial business question or does the data need to be adjusted?
    9. Deployment
        - Can you put the model into practice?
    10. Feedback
        - Can you get constructive feedback from the data and the stakeholder to answer the business question?

## Business Understanding
- Having a clearly defined question is vital because it defines the goal
  - Work towards the wrong goal is wasted
- Breaking down the goals and objectives enables structured discussions

## Analytic Approach
- Identify what type of patterns will be needed to addresss the question efficiently
- Approaches with example use cases:
  - Predictive model
    - Determine probabilities of an action
  - Descriptive approach
    - Show relationships
  - Statistical analysis
    - Problems that require counts
  - Classification approach
    - Yes/no answer is required by the question
  - Machine learning
    - Identify relationships and trends in data that might otherwise not be accessible or identified
  - Clustering Assocaition approaches
    - Learn about human behavior

---

# From Requirements to Collection

## Data Requirements
- Need to identify:
  - Which (kinds of) data are required
  - How to source (collect) the data
  - How to understand or work with the data
  - How to prepare the data to meet the desired outcome

## Data Collection
- Data requirements are revised
- Decisions are made about whether more or less data is needed
- Techniques can be applied to the data set to assess content, quality and initial insights
  - Examples:
    - Descriptive statistics
    - Visualization
- It is alright to defer decisions about unavailable data and attempt to acquire it at a later stage

---

# From Understanding to Preparation

## Data Understanding
- Answer the question: "Is the data that you collected representative of the problem to be solved?
  - Apply the pattern(s) identified in the analytic approach to analyze the data
  - Utilize visualizations to help with analysis
  - Evaluate findings for relevance, redundancy or missing information
  - Make adjustments based on your evaluation

## Data Preparation
- Is often the most time-consuming phase of a project
- Answers the question: "What are the ways in which the data is prepared?"
- Must be prepared in a way that:
  - Adresses missing or invalid values
  - Removes duplicates
  - Ensures proper formatting
- _Feature Engineering_ - The process of using domain knowledge of the data to create features that make machine learning algorithms work
- _Feature_ - A characteristic that might help when solving a problem
  - Features influence results in predictive models
- Correctness is critical in data preparation because a mistake or error could influence and invalidate results, which means all work done during and after this phase is wasted

---

# From Modeling to Evaluation

## Modeling - Concepts
- Focuses on developing models that are either descriptive or predictive
- Models are based on the analytic approach taken, driven by one of:
  - Statistics
  - Machine learning
- Training set
  - Is a set of historical data in which the outcome is already known
  - Acts as a gauge used to determine if the model needs to be callibrated
  - Is useful for experimentation with algorithms that the model can use
- Constant refinement, adjustment and tweaking is needed to ensure confidence in the outcome
- According to John Rollins' descriptive Data Science Methodology, the framework is geared to do 3 things:
  1. Understand the question at hand
  2. Select an analytic approach to solve the problem
  3. Obtain, understand, prepare and model the data

## Evaluation
- Is performed during model development and before model deployment
- Answers the question: "Does the model used really answer the initial question or does it need to be adjusted?"
- 2 main phases:
  1. Diagnostic measures phase
    - Used to ensure the model functions as designed (FAD)
    - For predictive models, a decision tree can be used to evaluate the model's accuracy
    - For descriptive models, comparisons against known outcomes can be used to evaluate the model's accuracy
  2. Statistical and significance testing
    - Used to ensure the data is being properly handled and interpreted within the model
    - Purpose is to avoid unnecessary doubts about the model's output

---

# Deployment

TODO

---

# Acronyms in this Document
  - _FAD_ - Functions as designed

