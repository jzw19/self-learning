# 📓 Notes on the Gaussian Distribution

These notes summarize the Gaussian (normal) distribution as presented in Andrew Ng’s Coursera Machine Learning course (Anomaly Detection module).  
Equations are written in LaTeX/KaTeX style so they render nicely in markdown viewers that support math.

---

## Notation
- $m$ — number of training examples  
- $n$ — number of features  
- $x^{(i)}$ — the $i$-th training example (column vector for multivariate)  
- $x_j^{(i)}$ — the $j$-th feature of example $i$  
- $\mu$ or $\mu_j$ — mean (scalar for univariate / element for multivariate)  
- $\sigma^2$ or $\sigma_j^2$ — variance (scalar)  
- $\sigma$ — standard deviation $\;(\sqrt{\sigma^2})$  
- $\Sigma$ — covariance matrix (multivariate)  
- Notational shortcuts used below:  
  - Univariate: $x \sim \mathcal{N}(\mu,\sigma^2)$  
  - Multivariate: $x \sim \mathcal{N}(\mu,\Sigma)$

---

## Univariate Gaussian (1D)

Probability density function (pdf):

$$
p(x; \mu, \sigma^2) = \frac{1}{\sqrt{2\pi\sigma^2}}
\exp\!\left(-\frac{(x - \mu)^2}{2\sigma^2}\right)
$$

Compact notation:  

$$
x \sim \mathcal{N}(\mu,\sigma^2)
$$

Sample estimates used in Andrew Ng’s course (maximum likelihood estimates with the $1/m$ normalization):

$$
\mu = \frac{1}{m}\sum_{i=1}^{m} x^{(i)},
\qquad
\sigma^2 = \frac{1}{m}\sum_{i=1}^{m} \big(x^{(i)} - \mu\big)^2
$$

> **Note:** This uses the ML estimator with $1/m$. The unbiased sample variance uses $1/(m-1)$; Andrew Ng uses the $1/m$ form for the anomaly detection derivation.

**Log-likelihood (for ML derivation):**

$$
\ell(\mu,\sigma^2) = \sum_{i=1}^m \log p(x^{(i)};\mu,\sigma^2)
$$

Setting derivatives $\frac{\partial \ell}{\partial \mu}=0$, $\frac{\partial \ell}{\partial \sigma^2}=0$ yields the ML estimates shown above.

---

## Multivariate Gaussian (nD)

If features are correlated, the multivariate Gaussian models joint behavior:

$$
p(x;\mu,\Sigma) = \frac{1}{(2\pi)^{n/2}|\Sigma|^{1/2}}
\exp\!\left(-\tfrac{1}{2}(x-\mu)^T \Sigma^{-1} (x-\mu)\right)
$$

Compact notation:  

$$
x \sim \mathcal{N}(\mu, \Sigma)
$$

ML parameter estimates (from data $x^{(1)},\dots,x^{(m)}$):

$$
\mu = \frac{1}{m} \sum_{i=1}^m x^{(i)},
\qquad
\Sigma = \frac{1}{m} \sum_{i=1}^m \big(x^{(i)} - \mu\big)\big(x^{(i)} - \mu\big)^T
$$

**Practical notes:**
- $|\Sigma|$ is the determinant; $\Sigma^{-1}$ is the inverse. If $\Sigma$ is singular or near-singular (not enough data), add a small value $\epsilon$ to the diagonal (regularization): $\Sigma \leftarrow \Sigma + \epsilon I$.  
- Multivariate captures correlations between features that the independent-univariate model cannot.

---

## Independence assumption vs Multivariate

**Independent (feature-wise) Gaussian model** (Andrew Ng’s simple approach used in the course):

Assume each feature $x_j$ is independent:

$$
p(x) = \prod_{j=1}^n p(x_j; \mu_j, \sigma_j^2)
$$

This is simple and works well when features are (approximately) uncorrelated or when you lack enough data for full $\Sigma$.

**Multivariate Gaussian**:

Use when features are correlated and you have enough training data to estimate $\Sigma$ reliably.

---

## How this ties to Anomaly Detection

1. Fit parameters using (mostly) normal examples.  
2. For a new example $x$, compute $p(x)$ (either product of univariate PDFs or full multivariate PDF).  
3. Pick threshold $\epsilon$. If $p(x) < \epsilon$ then label as **anomaly**.  
4. Tune $\epsilon$ using a validation set (if labeled anomalies exist) and optimize F1 (balance precision & recall).

---

## Common identities & intuition
- Changing $\sigma^2$ scales the width of the pdf: small $\sigma^2$ → narrow peak.  
- In 2D, multivariate Gaussian contours are ellipses aligned with eigenvectors of $\Sigma$.

---

## Example graphs (generated in the `.ipynb`)
- Univariate Gaussian plots for different $\sigma$ values (narrow vs wide).  
- Histogram of data + fitted Gaussian curve.  
- 2D contour plot (elliptical) for a bivariate Gaussian.

---

## Minimal numeric example (to include in the notebook)

This snippet computes 1D and 2D pdf values for demonstration:

```python
import numpy as np
from scipy.stats import norm, multivariate_normal

# 1D example
mu_1d = 0.0
sigma2_1d = 1.0
x_val = 1.5
p1 = norm.pdf(x_val, loc=mu_1d, scale=np.sqrt(sigma2_1d))
# prints p(x=1.5)
print("1D p(x=1.5) =", p1)

# 2D (multivariate) example
mu_2d = np.array([0.0, 0.0])
Sigma_2d = np.array([[1.0, 0.5],
                     [0.5, 1.0]])
x_point = np.array([1.5, -0.2])
p2 = multivariate_normal.pdf(x_point, mean=mu_2d, cov=Sigma_2d)
print("2D p(x) =", p2)

# Independent-feature approximation (product of marginals)
p_indep = norm.pdf(x_point[0], loc=mu_2d[0], scale=np.sqrt(Sigma_2d[0,0])) * \
          norm.pdf(x_point[1], loc=mu_2d[1], scale=np.sqrt(Sigma_2d[1,1]))
print("2D p(x) under independent assumption =", p_indep)
