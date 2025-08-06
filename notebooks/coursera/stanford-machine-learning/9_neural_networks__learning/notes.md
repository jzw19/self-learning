# Cost Function and Backpropagation
- Definitions
  - $L$ = total number of layers in the network
  - $s_l$ = number of units (not counting bias unit) in layer $l$
  - $K$ = number of output units/classes
- Cost function for regularized logistic regression:<br/>
  $J(\theta)=-\frac{1}{m}\sum^m_{i=1}[y^{(i)}log(h_\theta(x^{(i)})) + (1-y^{(i)})log(1-h_\theta(x^{(i)})) + \frac{\lambda}{2m}\sum^n_{(j=1)}\theta_j^2]$
- Cost function for neural networks:<br/>
  $J(\Theta)=-\frac{1}{m}\sum^m_{i=1}\sum^K_{k=1}y_k^{(i)}(log(h_\Theta(x^{(i)}))_k) + (1-y_k^{(i)})log(1-(h_\Theta(x^{(i)}))_k) + \frac{\lambda}{2m}\sum^{L-1}_{(l=1)}\sum^{s_l}_{(i=1)}\sum^{s_{l+1}}_{(j=1)}\Theta_j^2$
- Intuition for back propagation:
  - Define $\delta_j^{(l)}$ as the "error" of node $j$ in layer $l$.<br/>
    Recall that $a_j^{(l)}$ represents the "activation" of the $j^{th}$ unit in layer $l$.<br/>
    The "error" of node $j$ in layer $l$ will in some sense capture our error in the activation of that neural node $j$.
    - For the example neural network in the video (with 4 layers), we would have:<br/>
      $\delta_j^{(4)} = a_j^{(4)} - y_j$<br/>
      $\delta^{(3)}=(\Theta^{(3)})^T\delta^{(4)} \cdot g\prime(z^{(3)})$, &nbsp;&nbsp;&nbsp;&nbsp; where &nbsp;&nbsp; $g\prime(z^{(3)})=a^{(3)} \cdot (1-a^{(3)})$<br/>
      $\delta^{(2)}=(\Theta^{(2)})^T\delta^{(3)} \cdot g\prime(z^{(2)})$, &nbsp;&nbsp;&nbsp;&nbsp; where &nbsp;&nbsp; $g\prime(z^{(2)})=a^{(2)} \cdot (1-a^{(2)})$<br/>
      No $\delta^{(1)}$ term because the first layer corresponds to the input layer, which is simply the features that we observed in the training set, so there isn't any error associated with that.
- Backpropagation algorithm:
  - Suppose we have a training set: $\{(x^{(1)},y^{(1)}),...,(x^{(m)},y^{(m)})\}$
  - Set $\Delta_{ij}^{(l)}=0$ (for all $l$,$i$,$j$)
  - For $i=1$ to $m$:
    - Set $a^{(1)}=x^{(i)}$
    - Perform forward propagation to compute $a^{(l)}$ for $l=2,3,...,L$
    - Using $y^{(i)}$, compute $\delta^{(L)}=a^{(L)}-y^{(i)}$
    - Compute $\delta^{(L-1)},\delta^{(L-2)},...,\delta^{(2)}$
    - $\Delta_{ij}^{(l)}:=\Delta_{ij}^{(l)}+a_j^{(l)}\delta_i^{(l+1)}$
  - Finally (outside the "for" loop):
    - $D_{ij}^{(l)} := \frac{1}{m}\Delta_{ij}^{(l)}+\lambda\Theta_{ij}^{(l)}$, &nbsp; if $j \neq 0$<br/>
      $D_{ij}^{(l)} := \frac{1}{m}\Delta_{ij}^{(l)}$, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if $j = 0$<br/>
    - Once the $D$ terms are calculated, we can show that they are equal to the partial derivative of the cost function $J$ with respect to each of the parameters:<br/>
      $\frac{\delta}{\delta\Theta_{ij}^{(l)}}J(\Theta)=D_{ij}^{(l)}$
- Backpropagation Intuition
  - In Forward Propagation, we are given known inputs $x_n^{(i)}$, which we use to calculate $z_n^{(j)}$, which is the weighted sum of inputs from the previous layer, where $j$ represents the current layer of nodes (excluding 1 because we don't need to calculate anything for the input layer).
  - In Backpropagation, we know the actual outputs and we know the desired outputs, so we use the difference to influence the weights in each layer, starting from the output and working our way to the original inputs in the first layer.
- Gradient Checking
  - This is a formulaic way to approximate the next step in gradient descent and is useful when verifying the results in each step of backpropagation
  - Formula for 2-sided difference (slightly more accurate. Typically use this):<br/>
    $\frac{d}{d\theta} \approx \frac{J(\theta + \epsilon) - J(\theta - \epsilon)}{2\epsilon}$
    - The value for $\epsilon$ is something you choose.
    - Usually $10^{-4}$ is a good choice.
    - As $\epsilon$ becomes smaller, your result approches the actual derivative.
    - Don't want to go too small, or you may run into numerical problems.
  - Another formula is for the 1-sided difference. This is less accurate, so we typically don't want to use it:<br/>
    $\frac{d}{d\theta} \approx \frac{J(\theta + \epsilon) - J(\theta)}{\epsilon}$
  - While great for validation and sanity checking, gradient checking is slow and inefficient, so be sure to disable it before training your classifier. Just use backpropogation by itself for learning.
- Random Initialization
  - Initial value of $\Theta$
    - For gradient descent and advanced optimization method, need initial value for $\Theta$<br/>
      `optTheta = fminunc(@costFunction, initialTheta, options)`
    - Consider gradient descent<br/>
      Set `initialTheta = zeros(n,1)`? &rarr; No, this does not work when training a neural network.
      - Why? Because the weights from the input layer will affect every node in the next layer equally. In a second layer with 2 nodes, this means<br/>
        $a_1^{(2)} = a_2^{(2)}$ and $\delta_1^{(2)} = \delta_2^{(2)}$,<br/>
        so<br/>
        $\frac{\delta}{\delta\Theta_{01}^{(1)}}J(\Theta) = \frac{\delta}{\delta\Theta_{02}^{(1)}}J(\Theta)$
  - Random initialization: Symmetry breaking
    - Initialize each $\Theta_{ij}^{(l)}$ to a random value in $[-\epsilon, \epsilon]$
      - Note that this value of $\epsilon$ is not the same as the value of $\epsilon$ that we used in gradient checking
      - Other valid examples:<br/>
        `Theta1 = rand(10,11)*(2*INIT_EPSILON) - INIT_EPSILON`<br/>
        `Theta2 = rand(1,11)*(2*INIT_EPSILON) - INIT_EPSILON`

# Putting it Together
  - Pick a network architecture
    - Number of input units (dimensions of features $x^{(i)}$)
    - Number of output units (number of classes)
    - Number of hidden layers
      - Reasonable default: 1
      - Otherwise (if >1) have same number of units in every hidden layer (usually more is better. The tradeoff is the cost of computation)
  - Training a neural network
    1. Randomly initialize weights
    2. Implement forward propagation to get $h_\Theta(x^{(i)})$ for any $x^{(i)}$
    3. Implement code to compute cost function $J(\Theta)$
    4. Implement backpropagation to compute partial derivatives $\frac{\delta}{\delta\Theta_{jk}^{(l)}}J(\Theta)$
      - Example pseudocode:<br/>
        `for i = 1:m`<br/>
        &nbsp;&nbsp;&nbsp;&nbsp; Perform forward propagation and backpropagation using example $(x^{(i)},y^{(i)})$
        &nbsp;&nbsp;&nbsp;&nbsp; (Get activations $a^{(l)}$ and delta terms $\delta^{(l)}$ for $l = 2, ..., L$)
    5. Use gradient checking to compare $\frac{\delta}{\delta\Theta_{jk}^{(l)}}J(\Theta)$ computed using backpropagation vs. using numerical estimate gradient of $J(\Theta)$.<br/>
      Then disable gradient checking code.
    6. Use gradient descent or advanced optimization model with backpropagation to try to minimize $J(\Theta)$ as a function of parameters $\Theta$
      - Note: For neural networks, $J(\Theta)$ is non-convex, so it can theoretically settle at local optima. In practice, this is usually not a problem.
