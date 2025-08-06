# Classification and Representation
- Linear regression is typically not suitable for classification problems. Instead, we look to logistic regression
  - The hypothesis can output values that are much larger than the expected range [0, 1]
- The term "regression" in "logistic regression" is a bit misleading. It's actually an algorithm suited for classification
  - Logistic regression has the property that the output is always between 0 and 1
- Logistic Regression Model
  - Want $0 \leq h_\theta(x) \leq 1$
  - $h_\theta(x) = g(\theta^Tx)$
  - $g(z) = \frac{1}{1 + e^{-z}}$
    - This is called the "sigmoid function" or "logistic function" - hence the name "logistic regression"
  - Alternative form: $h_\theta(x) = \frac{1}{1 + e^{-\theta^Tx}}$
  - On a graph, this looks like the graph for a single line in the cotangent function graph, rotated clockwise $90^\circ$, where the y-intercept is at 0.5 and asymptotes are at 0 (as x approaches $-\infty$) and 1 (as x approaches $\infty$)
  - Interpretation of hypothesis output:
    - $h_\theta(x) =$ estimated probability that y=1 on input x
- Decision Boundary
  - Linear
    - Given vector $\theta$, this line is determined by plugging in the values of $\theta$ in $h_\theta(x) = g(\theta_0 + \theta_1x_1 + \theta_2x_2)$ and plotting the resulting equation on a graph where $x_1$ is on the horizontal axis and $x_2$ is on the vertical axis
  - Non-linear
    - Example: $h_\theta(x) = g(\theta_0 + \theta_1x_1 + \theta_2x_2 + \theta_3x_1^2 + \theta_4x_2^2)$, $\theta = \left[ { \begin{array}{c} -1 \\ 0 \\ 0 \\ 1 \\ 1 \end{array} } \right]$

# Logistic Regression Model
- Cost function
  - For linear regression slightly rearranged: $\frac{1}{m}\sum_{i=1}^m\frac{1}{2}(h_\theta(x^{(i)}) - y^{(i)})^2$
  - Notation definition:
    - $Cost(h_\theta(x), y) = \frac{1}{2}(h_\theta(x) - y)^2$
  - A "non-convex" function is one where gradient descent is _not_ guaranteed to reach the global optimum (imagine a parabola that is very squiggly and chock full of local minima)
    - Conversely, a "convex" function is one where gradient descent _is_ guaranteed to reach the global optimum (imagine a regular parabola for $y = x^2$)
  - For logistic regression, the cost function looks like this:
    - $J(\theta) = \frac{1}{m}\sum_{i=1}^mCost(h_\theta(x^{(i)}),y^{(i)})$ <br/>
      where&nbsp;&nbsp;&nbsp;&nbsp;$Cost(h_\theta(x^{(i)}),y^{(i)}) = -log(h_\theta(x^{(i)}))$&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;&nbsp;$y=1$ <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$Cost(h_\theta(x^{(i)}),y^{(i)}) = -log(1 - h_\theta(x^{(i)}))$&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;&nbsp;$y=0$
    - $Cost(h_\theta(x),y) = 0$ if $h_\theta(x)=y$
    - $Cost(h_\theta(x),y) \rarr \infty$ if $y=0$ and $h_\theta(x) \rarr 1$
    - $Cost(h_\theta(x),y) \rarr \infty$ if $y=1$ and $h_\theta(x) \rarr 0$
    - Writing the cost function in this way guarantees that $J(θ)$ is convex for logistic regression.
- Simplified Cost Function (for logistic regression) and Gradient Descent
  - Simplified Cost Function (for logistic regression)
    - $Cost(h_\theta(x),y) = -y\log(h_\theta(x)) - (1-y)(\log(1-h_\theta(x)))$
    - This cost function can be derived from statistics using the principle of maximum likelihood estimation (this is an idea in statistics for how to efficiently find parameters' data for different models. One of its properties is that it's convex)
    - The mathematical difference between linear regression and logistic regression is the definition of the hypothesis $h_\theta(x)$
    - A vectorized implementation of this cost function is: <br/>
      $h=g(X\theta)$ <br/>
      $g(z) = \frac{1}{1+e^{-z}}$ <br/>
      $J(\theta)=\frac{1}{m}\cdot-y^T\log(h)-(1-y)^T\log(1-h)$
  - Gradient Descent
    - General form: <br/>
      $Repeat\{\theta_j:=\theta_j-\alpha\frac{\delta}{\delta\theta_j}J(\theta)\}$
      - Derivative part: <br/>
        $Repeat\{\theta_j:=\theta_j-\frac{a}{m}\sum_{i=1}^m(h_\theta(x^{(i)}) - y^{(i)})x_j^{(i)}\}$
      - This algorithm is identical to the one used for linear regression
      - Still need to update all values in theta simultaneously
    - Vectorized implementation: <br/>
      $\theta:=\theta-\frac{\alpha}{m}X^T(g(X\theta)-\vec{y})$
- Advanced Optimization
  - Optimization algorithms other than gradient descent:
    - Conjugate gradient
    - BFGS (Broyden-Fletcher-Goldfarb-Shanno)
    - L-BFGS (Limited-memory BFGS)
  - Advantages of the above algorithms:
    - No need to manually pick $\alpha$ (learning rate)
      - They effectively have a smart way to pick a good learning rate
    - Often faster than gradient descent
  - Disadvantages of the above algorithms:
    - More complex
  - Recommended that you don't try to implement these advanced algorithms yourself unless you're an expert in numerical computing. Instead, just understand the concept and use an existing library (in Python, MATLAB or Octave. Otherwise, really test and evaluate results of using libraries in other languages)
  - To use these algorithms, you need to provide a function that evaluates $J(\theta)$ (the cost function) and $\frac{\delta}{\delta\theta_j}J(\theta)$ (partial derivative(s) used to find an optimum). Then use an imported library to calculate the optimum (e.g. `fminunc()` in Octave)

# Multiclass Classification
- Examples of Multiclass Classification problems:
  - Email foldering/tagging: Work, Friends, Family, Hobby
    - 4 classes
  - Medical diagnoses: Not ill, cold, flu
    - 3 classes
  - Weather: Sunny, Cloudy, Rainy, Snowy
    - 4 classes
- Basically, it's any classification where there are more than 2 classes or "buckets" that data can fall into
- One-vs-all (one-vs-rest)
  - Imagine that you have a problem with multiple "buckets" that data can fall into (3 or more clusters of data points). You need to calculate boundary (best fit) lines that separate these into their different classes, so it can't be done with a single straight line.
  - Take a single class and evaluate it against all the rest, identify the boundary (best fit) line, then repeat for each class using logistic regression. Finally, when given a (multidimensional) data point $x$, we just run all of our classifiers (equations for the boundary lines) on the input $x$ and pick the class that maximizes those classifiers, which gives our final result (prediction) of $y$.
