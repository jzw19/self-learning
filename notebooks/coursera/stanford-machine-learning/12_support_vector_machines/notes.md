# Optimization Objective
- Alternative view of logistic regression
  - Recall original definition:
    - $h_\theta(x) = \frac{1}{1 + e^{-\theta^Tx}}$
      - $h_\theta(x) = g(z)$
    - If $y = 1$, we want $h_\theta \approx 1$, $\theta^Tx \gg 0$ because $z = \theta^Tx \approx 1$
    - If $y = 0$, we want $h_\theta \approx 0$, $\theta^Tx \ll 0$ because $z = \theta^Tx \approx 0$
  - Cost of example:
    - $-(y\log(h_\theta(x)) + (1-y)\log(1-h_\theta(x))) = -y\log(\frac{1}{1 + e^{-\theta^Tx}}) - (1-y)\log(1 - \frac{1}{1 + e^{-\theta^Tx}})$
    - When $y = 1$ (meaning we want $\theta^Tx \gg 0$):
      - The second term of the cost function ($(1-y)\log(1 - \frac{1}{1 + e^{-\theta^Tx}})$) goes away and we are left with $-\log(\frac{1}{1 + e^{-\theta^Tx}})$
        - This can be approximated with 2 straight line segments (one with negative slope and another with 0 slope)
    - When $y = 0$ (meaning we want $\theta^Tx \ll 0$):
      - The first term of the cost function ($-y\log(\frac{1}{1 + e^{-\theta^Tx}})$) goes away and we are left with $-\log(1 - \frac{1}{1 + e^{-\theta^Tx}})$
        - This can be approximated with 2 straight line segments (one with zero slope and another with positive slope)
- Support Vector Machine
  - Logistic regression:
    - $min_\theta \frac{1}{m}[ \sum_{i=1}^m y^{(i)}(-\log{h_\theta(x^{(i)})}) + (1 - y^{(i)})(-\log{(1 - h_\theta(x^{(i)}))}) ] + \frac{\lambda}{2m} \sum_{j = 1}^{n}\theta_j^2$
  - Support vector machine:
    - From the equation for logistic regression above, define:
      - $cost_1(\theta^T x^{(i)}) = (-\log{h_\theta(x^{(i)})})$
      - $cost_0(\theta^T x^{(i)}) = (-\log{(1 - h_\theta(x^{(i)}))})$
      - where subscripts $_1\ and\ _0$ refer to the value of $y$ we want in our function
    - For a support vector machine:
      - With reference ot the logistic regression equation above:
        - Remove the constant $\frac{1}{m}$ because it has no effect on the minimum
        - Notice the $\lambda$ multiplier on the second term of the equation
          - We can characterize the logistic equation as $A + \lambda B$ to see that $\lambda$ will give term $B$ a high weight when $\lambda$ is very large, or make $B$ negligible when $B$ is very small.
      - By convention for support vector machines, we use $C$ instead of $\lambda$ and attach $C$ to $A$, like so: $CA + B$
        - This is just a different way of controlling the trade-off by affecting different terms
        - You can think of $C$ as playing an equivalent role of $\frac{1}{\lambda}$
    - Final equation for support vector machine:
      - $min_\theta C[ \sum_{i=1}^m y^{(i)}cost_1(\theta^T x^{(i)}) + (1 - y^{(i)})cost_0(\theta^T x^{(i)}) ] + \frac{1}{2} \sum_{j = 1}^{n}\theta_j^2$
- SVM hypothesis
  - Unlike logistic regression, the output of a support vector machine will not output a probability. Instead, it will output a prediction of $y = 1$ or $y = 0$ directly.
    - Put another way, it predicts:
      - $h_\theta(x) = 1\ \ \ \ \ \ if\ \ \theta^T_x \geq 0$
      - $h_\theta(x) = 0\ \ \ \ \ \ otherwise$


# Large Margin Intuition
- Consider the cost function for Support Vector Machines:
  - $min_\theta C[ \sum_{i=1}^m y^{(i)}cost_1(\theta^T x^{(i)}) + (1 - y^{(i)})cost_0(\theta^T x^{(i)}) ] + \frac{1}{2} \sum_{j = 1}^{n}\theta_j^2$
- Think about what it would take to make the overall cost function small:
  - If $y=1$, we want $\theta^Tx \geq 1$ (not just $\geq 0$)
  - If $y=0$, we want $\theta^Tx \leq -1$ (not just $\lt 0$)
  - To rephrase the statements above:
    - Let $\theta^Tx = z$
      - If you have a positive example ($y = 1$), then the $cost_1(z)$ is 0 only when $z \geq 1$
      - If you have a negative example ($y = -1$), then the $cost_0(z)$ is 0 only when $z \leq -1$
  - This effectively builds an extra safety margin into the SVM
- What happens when we set $C$ to a very large number?
  - When minimizing this optimization objective, we'll be highly motivated to choose a value such that the first term is 0
  - When you solve this optimization problem, you will get a particular decision boundary that has a much better fit than when $C$ is small

# Kernels I
- Main technique to develop complex nonlinear classifiers
- Think of a hypothesis as our way to compute a decision boundary
- Problem statement for a Kernel:
  - Given $x$, compute a new feature depending on proximity to landmarks $l^{(1)}$, $l^{(2)}$, $l^{(3)}$
  - Math notation (recall that $exp$ is another way to express $e^n$, where e is the natural number and $n$ is an arbitrary expression)
    - Given x:<br/>
      $f_1 = similarity(x,l^{(1)}) = exp(-\frac{||x - l^{(1)}||^2}{2\sigma^2})$<br/>
      $f_2 = similarity(x,l^{(2)}) = exp(-\frac{||x - l^{(2)}||^2}{2\sigma^2})$<br/>
      $f_3 = similarity(x,l^{(3)}) = exp(-\frac{||x - l^{(3)}||^2}{2\sigma^2})$
      - $similarity(x,l^{(n)})$ is called a kernel
      - $exp(-\frac{||x - l^{(n)}||^2}{2\sigma^2})$ is called a Gaussian kernel
- Kernels and Similarity
  - $f_1 = similarity(x,l^{(1)}) = exp(-\frac{||x - l^{(1)}||^2}{2\sigma^2}) = exp(-\frac{\sum_{j=1}^n(x_j - l_j^{(1)})^2}{2\sigma^2})$
  - If $x \approx l^{(1)}$: <br/>
    $f_1 \approx exp(-\frac{0^2}{2\sigma^2}) \approx 1$
  - If $x$ is far from $l^{(1)}$: <br/>
    $f_1 \approx exp(-\frac{\infty^2}{2\sigma^2}) \approx 0$
- Parameter Effects on the plot of $f$ (the Kernel function)
  - As $\sigma$ &uarr; (increases), the width of the "hill" increases (meaning $f$ decreases more slowly)
    - The amplitude is unaffected
  - As (the distance between $x$ and $l$) &uarr;, $f$ decreases
  - Changes in $l$ shift the center of the hill horizontally (with respect to x, because the point at which the numerator is 0 depends on the value of $l$)
  - Consider the axes of the (contour) plot as:
    - $f_1$
    - $x_1$
    - $x_2$

# Kernels II
- Where to get landmarks $l^{(1)}$, $l^{(2)}$, $l^{(3)}$?
  - Choose them to be at exactly the same locations as corresponding training samples
    - Result should be $m$ landmarks $l^{(1)}$, $l^{(2)}$, $l^{(3)}$...$l^{(m)}$
- SVM with Kernels
  - Given $(x^{(1)},y^{(1)}),\ (x^{(2)},y^{(2)}),...,(x^{(m)},y^{(m)})$<br/>
    choose $l^{(1)}=x^{(1)},\ l^{(2)}=x^{(2)},...,l^{(m)}=x^{(m)}$.<br/>
    Given example $x$:<br/>
    $f_1=similarity(x,l^{(1)})$<br/>
    $f_2=similarity(x,l^{(2)})$<br/>
    ...<br/>
    this gives us:
    $f = \begin{matrix} f_1 \\
    f_2 \\
    \vdots \\
    f_m
    \end{matrix}$, $f_0=1$
  - For training example $(x^{(i)},y^{(i)})$, given $x^{(i)}$, we would map it to:<br/>
    $f_1=similarity(x^{(i)},l^{(1)})$<br/>
    $f_2=similarity(x^{(i)},l^{(2)})$<br/>
    $\vdots$ &larr; $f_i^{(i)} = similarity(x^{(i)},l^{(i)}) = exp(\frac{0}{2\sigma^2}) = 1$<br/>
    $f_m=similarity(x^{(i)},l^{(m)})$
  - Hypothesis: Given $x$, compute features $f\ \epsilon\ \real^{ m + 1 }$
    - Predict "y = 1" if $\theta^Tf^{(i)} \geq 0;\ \ \theta^Tf^{(i)} = \theta_0f_0 + \theta_1f_1 + ... + \theta_mf_m$
  - Training:
    - $min_\theta C[ \sum_{i=1}^m y^{(i)}cost_1(\theta^T f^{(i)}) + (1 - y^{(i)})cost_0(\theta^T f^{(i)}) ] + \frac{1}{2} \sum_{j = 1}^{n}\theta_j^2;\ \ n = m$
- SVM parameters
  - C( = $\frac{1}{\lambda}$ )
    - Large C &rarr; Lower bias, high variance (small $\lambda$)
    - Small C &rarr; Higher bias, low variance (large $\lambda$)
  - $\sigma^2$
    - Large $\sigma^2$: Features $f_i$ vary more smoothly &rarr; Higher bias, low variance (hill gets wider)
    - Small $\sigma^2$: Features $f_i$ vary less smoothly &rarr; Lower bias, high variance (hill gets narrower)

# Using an SVM
- Not recommended to use your own software to solve parameters for SVM. Just use a well-known package (e.g. liblinear, libsvm, ...)
- Typically, you'll need to provide your own kernel similarity function as input to a library function
  - Note - do perform feature scaling before using the Gaussian kernel to make sure the function pays an appropriate amount of attention to each feature
- Other choices of kernel
  - Not all similarity functions $similarity(x,l)$ make valid kernels
    - Need to satisfy a technical condition called "Mercer's Theoren" to make sure SVM packages' optimizations run correctly, and do not diverge
  - Linear and Gaussian kernels are most commonly used
  - Other off-the-shelf kernels available:
    - Polynomial kernel
      - $k(x,l) = (x^Tl + C)^n;\ \ C\ and\ n\ are\ parameters$
      - Typically performs worse than Gaussian kernel
    - More esoteric
      - String kernel
      - Chi-square kernel
      - Histogram intersection kernel
- Knowledge check
  - Suppose you are trying to decide among a few different choices of kernel and are also choosing parameters such as $C$, $\sigma^2$, etc. How should you make the choice?
    - Choose whatever performs best on the cross-validation data.
- Multi-class classification
  - Many SVM packages already have built-in multi-class functionality
    - Otherwise, use one-vs.-all method (Train $K$ SVMs, one to distinguish $y = i$ from the rest, for $i = 1, 2, ..., K$), get $\theta^{(1)}, \theta^{(2)}, ..., \theta^{(K)}$. Pick class $i$ with largets $(\theta^{(i)})^Tx$
- Logistic regression vs. SVMs
  - $n$ = number of features ($x\ \epsilon\ \real^{n+1}$), $m$ = number of training examples
  - If $n$ is large (relative to $m$):
    - Use logistic regression, or SVM without a kernel ("linear kernel")
  - If $n$ is small, $m$ is intermediate:
    - Use SVM with Gaussian kernel
  - If $n$ is small, $m$ is large:
    - Create/add more features, then use logistic regression or SVM without a kernel
  - Neural network likely to work well for most of these settings, but may be slower to train