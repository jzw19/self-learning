# Solving the Problem of Overfitting
- What is overfitting?
  - A line that doesn't fit the data very well or doesn't fit the data at all is called "underfit" (or "high bias")
  - Conversely, a line that tries to fit the data too well (and curves all over the place due to all the terms with different exponents in the equation) is called "overfit" (or "high variance")
    - The intuition here is that the equation could fit almost any function and the space of possible hypotheses is too large (too variable)
    - The problem with this is that the hypothesis could fail to generalize to new examples
- Addressing overfitting
  - Options
    - Reduce number of features
      - Manually select which features to keep (based on importance)
      - Model selection algorithm
        - Algorithms to automatically decide which features to keep or throw out
        - Disadvantage - by throwing out features, we risk throwing out some information that could be useful for the purpose of our model
      - Regularization
        - Keep all features, but reduce magnitude/values of parameters $\theta_j$
        - Works well when we have a lot of features, each of which contributes a bit to predicting $y$
- Cost Function
  - Regularization
    - Reduce values of certain or all parameters to the point where they are close to zero. This reduces the effects of larger exponents in polynomial equations, thus making the model less prone to overfitting. In a sense, this "simplifies" the hypothesis.
- Regularized Linear Regression
  - On every iteration, multiply $\theta_j$ by a number between 0 and 1 so that the parameter multiplied by $\theta_j$ has a smaller effect on the result in that step
  - Mathematically on gradient descent, this looks like: <br/>
    $Repeat \{\newline
    \ \ \ \ \theta_0 := \theta_0 - \alpha\frac{1}{m}\sum_{i=1}^m(h_\theta(x^{(i)})-y^{(i)})x_0^{(i)},\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \sum_{i=1}^m(h_\theta(x^{(i)})-y^{(i)})x_0^{(i)}=\frac{\delta}{\delta\theta_0}J(\theta) \newline
    \ \ \ \ \theta_j := \theta_j - \alpha[\frac{1}{m}\sum_{i=1}^m(h_\theta(x^{(i)})-y^{(i)})x_j^{(i)} + \frac{\lambda}{m}\theta_j],\ \ \ \ (j=1,2,3,...,n)
    \newline\}\newline$
  - Regularized, it looks like this: <br/>
    $\theta_j := \theta_j(1 - \alpha\frac{\lambda}{m}) - \alpha\frac{1}{m}\sum_{i=1}^m(h_\theta(x^{(i)})-y^{(i)})x_j^{(i)},\ \ \ \ \alpha\frac{1}{m}\sum_{i=1}^m(h_\theta(x^{(i)})-y^{(i)})x_j^{(i)} = J(\theta),\ \ \ \ \frac{\delta}{\delta\theta_0}J(\theta)=\frac{1}{m}\sum_{i=1}^m(h_\theta(x^{(i)})-y^{(i)})x_j^{(i)} + \frac{\lambda}{m}\theta_j$
- Regularized Logistic Regression
  - Base cost function for logistic regression: <br/>
    $J(\theta)=-[\frac{1}{m}\sum_{i=1}^m(y^{(i)}\log(h_\theta(x^{(i)})) + (1-y^{(i)})(\log(1-h_\theta(x^{(i)}))))]$
  - Regularized cost function for logistic regression: <br/>
    $J(\theta)=-[\frac{1}{m}\sum_{i=1}^m(y^{(i)}\log(h_\theta(x^{(i)})) + (1-y^{(i)})(\log(1-h_\theta(x^{(i)}))))] + \frac{\lambda}{2m}\sum_{j=1}^n\theta_j^2,\ |\ \theta_1,\theta_2,\theta_3,...,\theta_n$
  - Mathematical representation (indentical to regularized linear regression, but with a different hypothesis): <br/>
    $h_\theta(x)=\frac{1}{1+e^{-\theta^Tx}},\newline
    Repeat \{\newline
    \ \ \ \ \theta_0 := \theta_0 - \alpha\frac{1}{m}\sum_{i=1}^m(h_\theta(x^{(i)})-y^{(i)})x_0^{(i)},\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \sum_{i=1}^m(h_\theta(x^{(i)})-y^{(i)})x_0^{(i)}=\frac{\delta}{\delta\theta_0}J(\theta) \newline
    \ \ \ \ \theta_j := \theta_j - \alpha[\frac{1}{m}\sum_{i=1}^m(h_\theta(x^{(i)})-y^{(i)})x_j^{(i)} + \frac{\lambda}{m}\theta_j],\ \ \ \ (j=1,2,3,...,n)
    \newline\}\newline$
  - Regularized, it looks like this: <br/>
    $\theta_j := \theta_j(1 - \alpha\frac{\lambda}{m}) - \alpha\frac{1}{m}\sum_{i=1}^m(h_\theta(x^{(i)})-y^{(i)})x_j^{(i)},\ \ \ \ \alpha\frac{1}{m}\sum_{i=1}^m(h_\theta(x^{(i)})-y^{(i)})x_j^{(i)} = J(\theta),\ \ \ \ \frac{\delta}{\delta\theta_0}J(\theta)=\frac{1}{m}\sum_{i=1}^m(h_\theta(x^{(i)})-y^{(i)})x_j^{(i)} + \frac{\lambda}{m}\theta_j$