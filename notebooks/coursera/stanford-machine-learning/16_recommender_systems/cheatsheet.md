# 🎬 Recommender Systems Cheat Sheet

## 🎯 Goal
Suggest items (movies, products, songs) to users by predicting ratings or preferences.  

---

## 🔑 Approaches

### 1. Content-Based Recommendations
- Recommend items similar to what the user liked before.  
- Represent each item by feature vector (e.g., genre, actors).  
- Predict rating with linear regression:  
  $$
  r_{u,i} \approx \theta^{(u)T} x^{(i)}
  $$
  where  
  - $x^{(i)}$ = feature vector for item $i$  
  - $\theta^{(u)}$ = preference vector for user $u$  

---

### 2. Collaborative Filtering
- Learn both user preferences and item features **from ratings data**.  
- No manual features required.  

**Model:**
- Each user $u$ has parameter vector $\theta^{(u)}$.  
- Each item $i$ has feature vector $x^{(i)}$.  
- Predicted rating:  
  $$
  r_{u,i} \approx \theta^{(u)T} x^{(i)}
  $$

**Learning Objective (with regularization):**
$$
J(x,\theta) = \frac{1}{2}\sum_{(u,i): r_{u,i} \text{ known}} 
\Big( \theta^{(u)T} x^{(i)} - r_{u,i} \Big)^2 
+ \frac{\lambda}{2}\Bigg(\sum_u \|\theta^{(u)}\|^2 + \sum_i \|x^{(i)}\|^2\Bigg)
$$

---

### 3. Low-Rank Matrix Factorization
- Ratings form a sparse matrix $R$.  
- Factorize into $R \approx X \Theta^T$ where:  
  - $X$ = item-feature matrix  
  - $\Theta$ = user-feature matrix  

**Gradient Descent Updates:**
- Update $x^{(i)}$ and $\theta^{(u)}$ simultaneously.  
- Each learns to represent **latent features** (e.g., “romantic vs. action,” “dark vs. light humor”).  

---

## ⚖️ Normalization
- Some users consistently rate higher/lower than others.  
- Normalize ratings before training: subtract user average.  

---

## 📈 Evaluation
- Mean Squared Error (MSE) on known ratings.  
- Cross-validation with held-out ratings.  
- Watch for **cold start problem** (new users/items with few ratings).

---

## ✅ Tips
- Content-based works well with rich item metadata.  
- Collaborative filtering is more powerful with large user–item rating data.  
- Regularization ($\lambda$) is crucial to avoid overfitting.  
- Gradient descent requires good initialization (small random values).  

---

## 📌 Example Use Cases
- Movie/TV (Netflix, YouTube)  
- E-commerce (Amazon)  
- Music (Spotify, Apple Music)  
- Social feeds (Twitter/X, TikTok, Instagram)  

---

👉 Quick mental model:  
**“Users ≈ feature vectors. Items ≈ feature vectors.  
Good recommendations ≈ dot products that match actual ratings.”**
