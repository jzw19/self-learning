# Non-linear Hypotheses

- Motivations
  - Non-linear Hypotheses

    - The number of quadratic features grows at roughly a rate of $O(n^2)$ and is actually closer to $\frac{n^2}{2}$

      - Example:
        - Suppose you have a grayscale image and you want to identify whether a portion of that image is a car door handle. The size of the image is 50x50 pixels. <br/>
          $50*50=2500 \rarr n=2500$, where n is the dimension of our feature size <br/>
          With 2500 pixels, we plug this into the equation that estimates the number of quadratic features to get $\frac{2500^2}{2}=\frac{6250000}{2}\approx3*10^6\ quadratic\ features$

  - Neurons and the Brain

    - Neural Networks
      - Algorithms that try to mimic the human brain

- Neural Networks

  - Neurons accept inputs and produce outputs as electrical signals

  - A node in a neural network is analagous to a neuron in this sense. It accepts one or more inputs and produces one or more outputs that change in magnitude based on changes in its inputs

  - A neural network contains many nodes, organized by layers

  - The first layer is the input layer

  - The last layer is the output layer

  - All layers in between are referred to as part of the "hidden layer"

  - Generally, if a network has [$s_j$ units in layer $j$] and [$s_{j+1}$ units in layer $j + 1$],<br/>
    then $\Theta^{(j)}$ will be of dimension $s_{j+1} \times (s_j + 1)$

  - Example: Layer 1 has 2 input nodes and layer 2 has 4 activation nodes, <br/>
    so the dimension of $\Theta^{(1)}$ is going to be 4×3 where $s_j=2$ and $s_{j+1}=4$,<br/>
    so $s_{j+1} \times (s_j + 1) = 4 \times 3$

  - Example set of equations representing a neural network:<br/>
    $a_1^{(2)} = g(\Theta_{10}^{(1)}x_0 + \Theta_{11}^{(1)}x_1 + \Theta_{12}^{(1)}x_2 + \Theta_{13}^{(1)}x_3)$<br/>
    $a_2^{(2)} = g(\Theta_{20}^{(1)}x_0 + \Theta_{21}^{(1)}x_1 + \Theta_{22}^{(1)}x_2 + \Theta_{23}^{(1)}x_3)$<br/>
    $a_3^{(2)} = g(\Theta_{30}^{(1)}x_0 + \Theta_{31}^{(1)}x_1 + \Theta_{32}^{(1)}x_2 + \Theta_{33}^{(1)}x_3)$<br/>
    $h_\Theta(x) = a_1^{(3)} = g(\Theta_{10}^{(2)}a_0^{(2)} + \Theta_{11}^{(2)}a_1^{(2)} + \Theta_{12}^{(2)}a_2^{(2)} + \Theta_{13}^{(2)}a_3^{(2)})$<br/>

  - New notation - define $z_k^{(j)}$ as the representation of everything inside of $g(...)$ in the equation above.<br/>
    e.g. for layer $j=2$ and node $k$,<br/>
    $z_k^{(2)} = \Theta_{k,0}^{(1)}x_0 + ... + \Theta_{k,n}^{(1)}x_n$

  - Setting $x=a^{(1)}$, the equation above can be rewritten as:<br/>
    $z^{(j)}=\Theta^{(j-1)}a^{(j-1)}$

  - Equation for a vector of the activation nodes for layer $j$:<br/>
    $a^{(j)}=g(z^{(j)})$, where function $g$ can be applied element-wise to vector $z^{(j)}$

  - Then add a bias unit (equal to 1) to layer $j$ after computing $a^{(j)}$
    - This bias unit will be element $a_0^{(j)}$ and will be equal to 1

  - Next, compute another $z$ vector:<br/>
    $z^{(j+1)}=\Theta^{(j)}a^{(j)}$

  - Finally, compute the final result:<br/>
    $h_\Theta(x) = a^{(j+1)} = g(z^{(j+1)})$
    - Take note that in this last step, between layer $j$ and $j+1$, we are doing **exactly the same thing** as we did in logistic regression

- Applications
  - Boolean logic
    - Inputs can be weighted by binary values (0 or 1) to apply or negate them in each layer. This effectively applies boolean logic to nodes
    