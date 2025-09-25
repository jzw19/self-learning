# ⚡ Large Scale Machine Learning — Cheat Sheet

## 🎯 Goal
Efficiently train ML algorithms on very large datasets where standard methods (e.g., full-batch gradient descent, normal equation) are too slow.

---

## 🔑 Key Approaches

### 1. Gradient Descent Variants
- **Batch Gradient Descent**  
  - Uses all training examples each step.  
  - Accurate, but slow for large `m`.  

- **Stochastic Gradient Descent (SGD)**  
  - Update parameters using **one training example at a time**.  
  - Much faster; parameters “noisy” but converge on average.  
  - Useful for online learning (data streams).  

- **Mini-batch Gradient Descent**  
  - Update parameters using a **small batch** (e.g., 10–100 examples).  
  - Balances efficiency + stability.  
  - Leverages vectorized operations.

---

### 2. Data Considerations
- **Feature Scaling** important (especially for gradient descent).  
- **Data Shuffling** before SGD/mini-batch to avoid bias.  

---

### 3. Learning Curves
- Plot error vs. training set size.  
- Helps diagnose **high bias vs. high variance**.  

---

### 4. Online Learning
- Useful if data arrives continuously (e.g., web traffic).  
- Update model incrementally as new data comes.  

---

### 5. MapReduce (Distributed Computation)
- Break computation (like summations in gradient descent) across multiple machines.  
- Example: Compute gradient pieces in parallel and sum them.  

---

## 📌 Equations

### Stochastic Gradient Descent update (linear regression)
$$
\theta_j := \theta_j - \alpha \big( h_\theta(x^{(i)}) - y^{(i)} \big) x_j^{(i)}
$$

- Done for each training example \( (x^{(i)}, y^{(i)}) \).

### Mini-batch Gradient Descent update
$$
\theta_j := \theta_j - \alpha \cdot \frac{1}{b} \sum_{i=1}^b \big( h_\theta(x^{(i)}) - y^{(i)} \big) x_j^{(i)}
$$

- Where \(b\) = batch size.

---

## ✅ Tips
- Start with **mini-batch GD** if dataset is huge.  
- Use **SGD** for streaming/online data.  
- Always monitor error over time (noisy convergence is normal).  
- Consider distributed computation (MapReduce, Spark) for extremely large data.  
