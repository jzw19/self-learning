# Deciding What to Try Next
- Debugging a learning algorithm
  - Suppose you have implemented regularized linear regression to predict housing prices.<br/>
    However, when you test your hypothesis on a new set of houses, you find that the margin of error in predictions is unacceptably large.<br/>
    What should you try next to improve the learning algorithm?
    - Get more training examples
      - This may or may not help. It can become a time sink.
    - Try a smaller set of features (to prevent overfitting)
    - Try getting additional features (if your current set of features aren't informative enough)
      - This may become a time sink, so it would be better to know in advance if this would help or not.
    - Try adding polynomial features
    - Try decreasing or increasing $\lambda$
  - There are some simple techniques to rule out many of the options above, referred to as "machine learning diagnostics"
    - <u>Diagnostic</u> - a test that you can run to gain insight into what is/isn't working with a learning algorithm, and to gain guidance as to how to improve its performance.
    - Diagnostics can take time to implement, but doing so can be a very good way to prevent wasting time.

# Evaluating a Hypothesis
- How to tell if a hypothesis is overfitting?
  - Split the data set into a "training set" and a "test set" (e.g. 70% goes into the "training set" and 30% goes into the "test set")
    - In the context of linear regression, we could see if the training error is low and the test error is high
    - Typically would want to randomly shuffle the data set before splitting
- Training/testing procedure for linear regression
  - Learn parameter $\theta$ from training data (minimizing training error $J(\theta)$)
    $J(\theta)$ represents the 70%
  - Compute test set error:<br/>
    $J_{test}(\theta) = \frac{1}{2m_{test}}\sum_{i=1}^{m_{test}}(h_\theta(x_{test}^{(i)}) - y_{test}^{(i)})^2$
- Training/testing procedure for logistic regression
  - Learn parameter $\theta$ from training data ($m_{test}$)
  - Compute test set error:<br/>
    $J_{test}(\theta) = \frac{1}{m_{test}} \sum_{i=1}^{m_{test}}{y_{test}^{(i)}\log{h_\theta(x_{test}^{(i)})}} + (1 - y_{test}^{(i)})\log{h_\theta(x_{test}^{(i)})}$
    - Sometimes, there is an alternative test set metric that may be easier to interpret. This is the "misclassification error" (0/1 misclassification error). The 0/1 means the result is binary - it's either right or wrong.
      - Example:<br/>
        $err(h_\theta^{(x)},y) = \begin{cases}
        {
          1 \quad if \quad h_\theta(x) < 0.5 \quad and \quad y = 1
        }\\
        {
          1 \quad if \quad h_\theta(x) \geq 0.5 \quad and \quad y = 0
        }\\
        {0 \quad otherwise}
        \end{cases}$<br/>
        $Test\ error = \frac{1}{m_{test}} \sum_{i=1}^{m_{test}}err(h_\theta(x_{test}^{(i)},y_{test}^{(i)}))$

# Model Selection and Train/Validation/Test Sets
- Problem
  - How do you choose what degree polynomial to fit your data to when forming your hypothesis? You want to be accurate enough without overfitting, otherwise your hypothesis won't generalize well to unseen data.
  - It's as if there is an extra parameter in any algorithm, which is the degree of the polynomial (denoted as $d$ in these lessons)
- Naive solution
  - Take each hypothesis with the corresponding parameters and simply measure the performance (min error) on the test set.
  - This will not be a fair estimate of how well the hypothesis generalizes
- Better solution
  - Split the data set into 3 groups (typical percentage of full data set noted in parentheses):
    - Training set (60%)
    - Cross-validation set (a.k.a. CV set or Validation set) (20%)
    - Test set (20%)
  - Instead of using the training set to select the model, use the CV set.
    - Minimize the function for this set to get parameter vector $\theta$ for the new model.
    - Test the hypothesis on the CV set
    - Measure $J_{CV}$ to see how well each hypothesis does on the CV set
    - Pick the hypothesis with the lowest cross validation error
      - This will give us the value of $d$ (the degree of the polynomial)
      - This means $d$ is not fit to the test set, so it can be used to evaluate the selection of the model

# Diagnosing Bias vs. Variance
- Consider these examples for error functions $J(\theta)$ taken from previous lessons:<br/>
  Training error: $J_{train}(\theta) = \frac{1}{2m}\sum_{i=1}^m (h_\theta(x^{(i)}) - y^{(i)})^2$<br/>
  Cross validation error: $J_{cv}(\theta) = \frac{1}{2m_{cv}}\sum_{i=1}^m (h_\theta(x_{cv}^{(i)}) - y_{cv}^{(i)})^2$
- Diagnosing bias vs. variance
  - High bias (underfitting)
    - $J_{train}(\theta)$ will be high
    - $J_{cv}(\theta) \approx J_{train}(\theta)$
  - High variance (overfitting)
    - $J_{train}(\theta)$ will be low
    - $J_{cv}(\theta) \gg J_{train}(\theta)$

# Regularization and Bias/Variance
- How does regularization affect bias and variances in a learning algorithm?
- The regularization term is usually denoted by $\lambda$
- For this lesson, consider the use of regularization in linear regression. In the equation, it would look like this:<br/>
  Model: $h_\theta(x)\ =\ \theta_0 + \theta_1x + \theta_2x^2 + \theta_3x^3 + \theta_4x^4$<br/>
  &emsp;&emsp;&emsp;&ensp;$J(\theta)\ =\ \frac{1}{2m} \sum_{i=1}^{m}(h_\theta(x^{(i)}) - y^{(i)})^2 + \frac{\lambda}{2m} \sum_{j=1}^{m}\theta_j^2$
  - As $\lambda$ increases, the fit becomes more rigid (straight line, high bias, underfit)
  - As $\lambda$ decreases, the fit becomes overfitted (squiggly line, high variance)
- In order to choose the model and an appropriate value for our regularization term $\lambda$, we need to:
  1. Create a set of $\lambda$ values to test with
  2. Create a set of models with different degrees or any other variants
  3. Iterate through the $\lambda$ values and for each $\lambda$  go through all models to learn some $\Theta$
  4. Compute the cross validation error using the learned $\Theta$ (computed with $\lambda$) on the $J_{CV}(\Theta)$ without regularization ($\lambda = 0$)
  5. Select the best combination that produces the lowest error on the cross validation set
  6. Using the best combination of $\Theta$ and $\lambda$, apply it on $J_{test}(\Theta)$ to see if it has a good generalization of the problem

# Learning Curves
- Plotting learning curves is very useful for diagnosing whether a learning algorithm is suffering from bias, variance or both
- To plot a learning curve, plot<br/>
  $J_{train}$ (average squared error on training set) or $J_{CV}$ (average squared error on cross validation set)<br/>
  against<br/>
  $m$ (the number of training examples that you have)
- When the size of the training set is small (say &leq; 3), then it is easy to fit the data perfectly (0 error)
- As the size of the training set grows, so does the average training error
- The error value will plateau after a certain value for $m$ (the training set size)
- **Experiencing high bias:**
  - **Low training set size:** causes $J_{train}(\Theta)$ and $J_{CV}(\Theta)$ to be high
  - **Large training set size:** causes both $J_{train}(\Theta)$ and $J_{CV}(\Theta)$ to be high with $J_{train}(\Theta) \approx J_{CV}(\Theta)$
  - If a learning algorithm is suffering from **high bias**, then getting more training data will not **(by itself)** help much<br/>
    ![image](learning_curve_high_bias.png)
- **Experiencing high variance**
  - **Low training set size:** $J_{train}(\Theta)$ is low and $J_{CV}(\Theta)$ is high
  - **Large training set size:** $J_{train}(\Theta)$ increases with training set size and $J_{CV}(\Theta)$ continues to decrease without leveling off.<br/>
    Also, $J_{train}(\Theta) \lt J_{CV}(\Theta)$ but the difference remains significant
  - If a learning algorithm is suffering from **high variance**, then getting more training data is likely to help<br/>
    ![image](learning_curve_high_variance.png)

# Deciding What to Try Next (Revisited)
- Debugging a learning algorithm
  - Get more training examples
    - fixes high variance
  - Try smaller sets of features
    - fixes high variance
  - Try getting additional features
    - fixes high bias
  - Try adding polynomial features ($x_1^2,x_2^2,x_1,x_2$, etc.)
    - fixes high bias
  - Try decreasing $\lambda$
    - fixes high bias
  - Try increasing $\lambda$
    - fixes high variance
- Neural networks and overfitting
  - "Small" neural network
    - Fewer parameters
    - More prone to underfitting
    - Computationally cheaper
  - "Large" neural network
    - More parameters
    - More prone to overfitting
      - Use regularization ($\lambda$) to address overfitting
    - Computationally more expensive
  - Need to decide how many hidden layers
    - Often a good idea to start with 1
