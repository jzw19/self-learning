# Comparison to Supervised Learning
- In Supervised Learning, data is given with labels already associated with it
- In Unsupervised Learning, data is given unlabelled
  - We use algorithms here to identify patterns that we don't already know about (using techniques like clustering)
- Clustering
  - Example applications
    - Market segmentation
    - Social network analysis
    - Organizing computer clusters
    - Astronomical data analysis

# K-Means Algorithm
- Is the most popular and widely used algorithm
- General steps in K-Means Algorithm:
  1. Cluster assignment
  2. Move centroid
  - Take note that Step 2 is actually done first (by random assignment) in initialization
  - After assigning data to the centroid that is closest to them, we calculate the distance between each data point and its assigned cluster and assign the new position of each centroid by calculating the point that would be considered the "mean" between all of those points. Then we repeat (starting from cluster assignment).
    - At some point, the centroids stop moving
- Formal algorithm
  - Input:
    - $K$ (number of clusters)
    - Training set $\{x^{(1)},x^{(2)},...,x^{(m)}\}$
      - $x^{(i)}\ \epsilon\ \real$ (drop $x_0 = 1$ convention)
  - Steps:
    1. Randomly initialize $K$ cluster centroids $\mu_1,\mu_2,...,\mu_K\ \epsilon\ \real^n$
    2. Repeat {<br/>
      &emsp;for $i=1$ to $m$:<br/>
      &emsp;&emsp;$c^{(i)} :=$ index (from 1 to $K$) of cluster centroid closest to $x^{(i)}$<br/>
      &emsp;for $k=1$ to $K$:<br/>
      &emsp;&emsp;$\mu_k :=$ average (mean) of points assigned to cluster $k$<br/>
    }
- K-means for non-separated clusters
  - One way is to run K-means clustering algorithm on the data anyways, and maybe what will happen is that it determines logical clusters that were not obvious to the human observer

# Optimization Objective
- K-means optimization objective
  - $c^{(i)} =$ index of cluster (1,2,...,$K$) to which example $x^{(i)}$ is currently assigned
    - $k = {1,2,...,K}$
  - $\mu_k =$ cluster centroid $k\ (\mu_k\ \epsilon\ \real^n)$
  - $\mu_{c^{(i)}} =$ cluster centroid of cluster to which example $x^{(i)}$ has been assigned
  - Optimization objective:
    - $J(c^{(1)},...,c^{(m)},\mu_1,...,\mu_K) = \frac{1}{m} \sum_{i=1}^m ||x^{(i)} - \mu_{c^{(i)}}||^2$
    - $min_{c^{(1)},...,c^{(m)},\mu_1,...,\mu_K}J(c^{(1)},...,c^{(m)},\mu_1,...,\mu_K)$

# Random Initialization
- Recommended approach
  - Should have $K < m$
  - Randomly pick $K$ training examples
  - Set $\mu_1,...,\mu_K$ equal to these $K$ examples
  - To put this in another way, you should<br/>
    pick $k$ distinct random integers $i_1,…,i_k$ from ${1,…,m}$.<br/>
    Then set $\mu_1 = x^{(i_1)}, \mu_2 = x^{(i_2)}, ..., \mu_k = x^{(i_k)}$
- K-means can end up at different solutions depending on the random initialization. 
  - This also means K-means can end up at local optima
  - So instead of initializing K-means once and hoping that it works, what is usually done is to initialize K-means many times (typically something between 50 and 1000 times)
- Example
  - For $i = 1$ to $100$:
    - Randomly initialize K-means
    - Run K-means. Get $c^{(1)},...,c^{(m)},\mu_1,...,\mu_K$
    - Compute cost function (distortion): $J(c^{(1)},...,c^{(m)},\mu_1,...,\mu_K)$
  - Pick clustering that gave lowest cost $J(c^{(1)},...,c^{(m)},\mu_1,...,\mu_K)$
- Random initialization is most useful when you have a relatively small number of clusters (e.g. $k = 2\ to\ 10$). Otherwise, the first initialization tends to give a fairly accurate result that doesn't improve much with more iterations

# Choosing the Number of Clusters
- Another way to ask this is "What is the right value of $K$?"
- Most common thing is to choose by hand
- It is generally ambiguous how many clusters there are in the data
- Some methods:
  - Elbow method
    - Vary the number of clusters $K$
    - Compute the cost function $J$
    - Look at the plot of $K$ (x-axis) against $J$ (y-axis)
    - Identify where the "elbow" of the plot is
    - This method is actually not used often because in real situations, it's much more ambiguous where the "elbow" is (the curve is smoother)
  - Ask and answer questions:
    - For what purpose are you running K-means?
      - What is the number of clusters $K$ that serves this purpose?