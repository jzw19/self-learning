# Model and Cost Function
- General flow of supervised learning:
  - Training set --> Learning Algorithm --> h (hypothesis)
    - Hypothesis is expressed as a function that takes input and outputs a prediction
    - The term "hypothesis" is not the best choice of terminology, but it is there for historical reasons and it stuck
- The following notes and examples are in the context of linear regression:
  - Cost Function
    - Hypothesis: h<sub>&theta;</sub>(x) = &theta;<sub>0</sub> + &theta;<sub>1</sub>x
      - Each &theta;<sub>i</sub> represents a parameter
    - How to choose parameters?
      - Determine which values for parameters minimize half the mean squared error and produce the line of best fit
        - Formula for mean squared error:
          - MSE=$\frac{1}{n}\displaystyle\sum_{i=1}^n​ (y_i - \hat{y}_i)^2$
        - multiply MSE by $\frac{1}{2}$, so the equation becomes $\frac{1}{2n}\displaystyle\sum_{i=1}^n​ (y_i - \hat{y}_i)^2$
          - This is referred to as the "squared error function"
          - The "squared error function" is abbreviated in this video series as J(&theta;<sub>0</sub>,&theta;<sub>1</sub>)
    


# Parameter Learning
- Gradient Descent
  - General algorithm used in many places in ML
  - Formula: $\theta_j := \theta_j - \alpha\frac{\delta}{\delta\theta_j}J(\theta_0,\theta_1)$
    - $\alpha$ represents the learning rate
      - This controls "how big of a step" you take between recalculations of $\theta$
      - This cannot be too large, or else the function may fail to converge
    - $\theta_j$ on the left-hand side represents the next value that needs to be calculated, while $\theta_j$ on the right-hand side represents the current value
    - When there are multiple $\theta$, all of them need to be udpates simultaneously. This means all of the values in one instance need to be used in each recalculation of the new values. Using newly calculated values in calculations from one point to the next is not gradient descent and is likely to produce unexpected results or behavior when you are trying to use gradient descent
  - Once gradient descent reaches a local optimum (minimum or maximum), it stops changing (because the derivative is 0, so the output becomes a constant, and that constant is the previous value)
  - No need to change $\alpha$ over time because it is multiplied by the derivative, which decreases in magnitude and approaches 0 anyways, which in turn decreases the "size" of each step as it approaches a local optimum
  - <bold>The cost function for linear regression will ALWAYS be a convex (bowl-shaped) function</bold>, so it will never have any local optima. Just the one global optimum
  - "Batch" gradient descent is when each step of gradient descent uses <em>all</em> the training examples
