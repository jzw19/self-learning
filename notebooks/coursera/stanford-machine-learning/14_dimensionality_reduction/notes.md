# Motivation I: Data Compression
- What is dimensionality reduction?
  - It's the reduction of features/variables (dimensions) to represent the same data
    - As an example, if you have data that is a mix of measurements in inches and centimeters, then representing the data as-is would require 2 dimensions to plot it, or otherwise a conversion from one measurement to the other
- Benefits
  - Reduced memory requirement
  - Faster runtime
- Suppose we apply dimensionality reduction to a dataset of $m$ examples ${x^{(1)},x^{(2)},...,x^{(m)}}$ where $x^{(i)}\ \epsilon\ \real^n$. As a result of this, we will get out:
  - A lower dimensional dataset ${z^{(1)},z^{(2)},...,z^{(m)}}$ where $z^{(i)}\ \epsilon\ \real^k$ for some value of $k$ and $k \leq n$

# Motivation II: Visualization
- Being able to plot the data and see patterns is helpful for understanding patterns in the data better
  - Ideally, try to reduce dimensionality down to 2 or 3 dimensions because humans can't visualize anything above 3 dimensions

# Principal Component Analysis (PCA) Problem Formulation
- This is the most commonly used algorithm
- Problem formulation
  - Goals:
    - Reduce the dimensionality of the data set (e.g. 2D to 1D)
    - Minimize projection error (the distance between the projected line and actual data points after dimension reduction)
- Note: it's standard practice to first perform mean normalization and feature scaling before using PCA
- Result:
  - PCA will produce one or more vectors that define a lower dimension (line, plane, etc.) on which we can project data
  - Formally, we'll find the set of $k$ vectors $\vec{u_1}, \vec{u_2}, ..., \vec{u_k}$ onto which we can project the data, so as to minimize projection error
- PCA is NOT the same as linear regression, but is often compared to it
  - Visually:
    - Linear regression minimizes the vertical distance between all data points and the best fit line
    - PCA minimizes the perpendicular (shortest) distance between all data points and the best fit line
  - Goals:
    - Linear regression tries to predict a distinguishable variable $y$ by using all values of $x$
    - In PCA, there is no variable $y$ that we are trying to predict, so all features are treated equally  
- By convention, we choose $u^{(1)}$ so that $||u^{(1)}|| = \sqrt{(u_1^{(1)})^2 + (u_2^{(1)})^2}$ and the length of vector $u^{(1)}$ equals 1

# Principal Component Analysis (PCA) Algorithm
- Before applying PCA, there is a data pre-processing step that should always be done
  - e.g.
    - Feature scaling
    - Mean normalization
      - Compute the mean of each feature
        - $\mu_j = \frac{1}{m} \sum_{i=1}^mx_j^{(i)}$
      - Replace each feature $x_j$ with $x_j - \mu_j$
- PCA algorithm
  - Reduce data from $n$-dimensions to $k$-dimensions
  - Compute "covariance matrix" $\Sigma$
    - $\Sigma = /frac{1}{m} \sum_{i=1}^{n}(x^{(i)})(x^{(i)})^T$
  - Compute eigenvectors of matrix $\Sigma$
    - Octave code: `[U,S,V] = svd(Sigma)`
      - "svd" means "singular value decomposition"
    - The result will be an `n x n` matrix referred to as `U`
  - Given `U`, we want to reduce the number of dimensions from `n` to `k`, so we take the first `k` vectors (columns) in matrix `U` and call this $U_{reduce}$
  - We'll define `z` as $z = U_{reduce}^Tx$
    - `z` will be a k-dimensional vector (`k x 1`)

# Choosing the Number of Principal Components (k)
- Choosing $k$
  - Average squared projection error: $\frac{1}{m} \sum_{i=1}^m ||x^{(i)} - x_{approx}^{(i)}||^2$
  - Total variation in the data: $\frac{1}{m} \sum_{i=1}^m ||x^{(i)}||^2$
  - Typically, choose $k$ to be the smallest value such that:
    $\frac{average\ squared\ projection\ error}{total\ variation\ in\ the\ data} \leq 0.01$ &emsp;(1%)
    - Another way to think about this is to choose $k$ such that "99% of variance is retained"

# Advice for Applying PCA
- Recall that PCA can sometimes be used to speed up the runtime of a learning algorithm
- Note that PCA should only be run on training sets, NOT cross-validation or test sets
  - After running PCA on the training set, you can _apply_ the result on the CV and/or test sets
- Compression
  - Reduce memory/disk needed to store data
  - Speed up learning algorithm
  - Choose $k$ by % of variance to retain
- Visualization
  - Choose $k = 2$ or $k = 3$
- Bad use of PCA: to prevent overfitting
  - Use $z^{(i)}$ instead of $x^{(i)}$ to reduce the number of features to $k < n$. Thus, fewer features, less likely to overfit
    - Again, this is BAD
    - This may work OK (only sometimes), but isn't a good way to address overfitting because you may throw out valuable information. Use regularization instead
- Another issue - PCA is sometimes used where it shouldn't be
  - Before implementing PCA, first try running whatever you want to do with the original/raw data $x^{(i)}$. Only if that doesn't do what you want, then implement PCA and consider using $z^{(i)}$
