# 🤝 Collaborative Filtering — Notes

These notes summarize the key concepts from the videos on **Collaborative Filtering** and the **Collaborative Filtering Algorithm** in Andrew Ng’s Machine Learning course.  

---

## 1. Ratings as a Matrix
We represent user ratings as a matrix:

|         | Movie 1 | Movie 2 | Movie 3 | Movie 4 |
|---------|---------|---------|---------|---------|
| User 1  | 5       | ?       | 4       | ?       |
| User 2  | ?       | 3       | ?       | 1       |
| User 3  | 4       | ?       | ?       | 2       |

- Each row = a **user**  
- Each column = a **movie**  
- Some entries are missing → we want to predict them.  

---

## 2. Features & Preferences
We assume:
- Each movie has a **feature vector**: $x_i$  
- Each user has a **preference vector**: $\theta_u$  

Predicted rating:

$$
\hat{r}_{ui} = \theta_u^T x_i
$$

---

## 3. Cost Function
We minimize the error on **only the ratings we observe**:

$$
J(X,\Theta) = \frac{1}{2}\sum_{(u,i)\; \text{rated}} \big(\theta_u^T x_i - r_{ui}\big)^2
+ \frac{\lambda}{2}\left( \sum_u \|\theta_u\|^2 + \sum_i \|x_i\|^2 \right)
$$

- First term = squared error  
- Second term = regularization  

---

## 4. Learning Both at Once
- We do **gradient descent** on both $X$ (movie features) and $\Theta$ (user preferences).  
- This learns **latent features** (hidden structure in the data).  

---

## 5. Mean Normalization
Different users rate differently:
- Some rate harshly (1–3 range)  
- Some rate generously (4–5 range)  

👉 Fix: subtract the mean rating for each movie before training, then add it back later for predictions.

---

## 6. Key Intuition
- Users with **similar tastes** → similar $\theta$.  
- Movies watched by similar users → similar $x$.  
- The system learns tastes and flavors simultaneously.  

---

# 🔢 Tiny Worked Example

Let’s use a toy case with **2 users** and **2 movies**.

### Step 1. Ratings matrix
$$
R =
\begin{bmatrix}
5 & ? \\
? & 3
\end{bmatrix}
$$

We only know two ratings:
- User 1 gave **Movie A = 5**  
- User 2 gave **Movie B = 3**

---

### Step 2. Initialize features
Suppose we assume each movie has **1 hidden feature** (e.g., “action level”).  

Let’s start with guesses:
- $x_A = 2.0$ (Movie A’s feature)  
- $x_B = 1.0$ (Movie B’s feature)  
- $\theta_1 = 2.5$ (User 1’s preference)  
- $\theta_2 = 1.5$ (User 2’s preference)  

---

### Step 3. Predictions
Predicted ratings:

- User 1 → Movie A:  
  $$
  \hat{r}_{1A} = \theta_1 \cdot x_A = 2.5 \cdot 2.0 = 5.0
  $$
  ✅ matches rating!  

- User 2 → Movie B:  
  $$
  \hat{r}_{2B} = \theta_2 \cdot x_B = 1.5 \cdot 1.0 = 1.5
  $$
  (a bit low vs. actual 3)  

---

### Step 4. Gradient descent (conceptual)
We adjust values to reduce error:
- Because $1.5 < 3$, increase either $\theta_2$ or $x_B$.  
- After updates, suppose we get:
  - $x_B = 2.0$  
  - $\theta_2 = 1.5$  

Now prediction for User 2 → Movie B:
$$
\hat{r}_{2B} = 1.5 \cdot 2.0 = 3.0
$$

Perfect fit!

---

### Step 5. Filling the missing entries
- User 1 → Movie B:  
  $$
  \hat{r}_{1B} = \theta_1 \cdot x_B = 2.5 \cdot 2.0 = 5.0
  $$  

- User 2 → Movie A:  
  $$
  \hat{r}_{2A} = \theta_2 \cdot x_A = 1.5 \cdot 2.0 = 3.0
  $$  

So now we have a completed prediction matrix:

$$
\hat{R} =
\begin{bmatrix}
5 & 5.0 \\
3.0 & 3
\end{bmatrix}
$$

---

# ✅ Takeaway
- Collaborative filtering finds both **movie features** and **user preferences**.  
- Predictions are simple dot products:  

$$
\hat{r}_{ui} = \theta_u^T x_i
$$

- With real data, we’d use gradient descent to scale this to thousands of users/movies.  

---
