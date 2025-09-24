# 📓 Notes on Recommender Systems

Outline-style notes from Andrew Ng’s Coursera ML course.

---

## 1. Introduction
- Problem: Predict how a user will rate an item not yet seen.  
- Applications: movies, music, products, social feeds.  

---

## 2. Content-Based Filtering
- Each item has feature vector $x^{(i)}$.  
- Each user has parameter vector $\theta^{(u)}$.  
- Predict rating: $\hat{r}_{u,i} = \theta^{(u)T} x^{(i)}$.  
- Learn $\theta^{(u)}$ via linear regression from known ratings.  

---

## 3. Collaborative Filtering
- Extend to learning both $\theta^{(u)}$ and $x^{(i)}$.  
- Cost function:  
  $$
  J(x,\theta) = \frac{1}{2}\sum_{(u,i): r_{u,i}\text{ known}} 
  (\theta^{(u)T} x^{(i)} - r_{u,i})^2 + \frac{\lambda}{2}
  \Big(\sum_u \|\theta^{(u)}\|^2 + \sum_i \|x^{(i)}\|^2\Big)
  $$
- Simultaneously update both user and item vectors.  

---

## 4. Low-Rank Matrix Factorization
- Sparse ratings matrix $R$ (users × items).  
- Approximate as $R \approx X \Theta^T$.  
- $X$: item features; $\Theta$: user preferences.  
- Learns **latent features** automatically (no need for manual tags).  

---

## 5. Mean Normalization
- Normalize ratings per user to handle bias.  
- Predict deviations from average rating.  

---

## 6. Practical Notes
- Use gradient descent or ALS (alternating least squares).  
- Regularization avoids overfitting to few ratings.  
- Cold start:  
  - New user → need some ratings or metadata.  
  - New item → use item metadata until ratings collected.  

---

## 7. Connections
- Optimization similar to linear regression and anomaly detection.  
- Collaborative filtering ≈ unsupervised learning with supervised flavor.  
