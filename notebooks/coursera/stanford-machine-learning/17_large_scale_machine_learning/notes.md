# 📝 Detailed Notes on Large Scale Machine Learning

## 1. Motivation
- Standard ML algorithms assume dataset fits in memory.  
- With millions of examples, training is too slow.  
- Need scalable algorithms.

---

## 2. Gradient Descent Variants
### Batch Gradient Descent
- Each update uses **all training examples**.  
- Time per update = O(mn).  
- Impractical for large m.

### Stochastic Gradient Descent (SGD)
- Each update uses a **single training example**.  
- Fast updates; noisy trajectory.  
- Converges to region near the optimum.  
- Often works better for large datasets.

### Mini-batch Gradient Descent
- Update using small subsets of data.  
- Vectorized operations improve efficiency.  
- Batch size `b` typically 10–100.  
- Best of both worlds.

---

## 3. Online Learning
- Data arrives continuously.  
- Update parameters incrementally.  
- Useful in recommendation systems, click prediction, etc.

---

## 4. MapReduce & Distributed Learning
- Used when dataset too large for one machine.  
- Divide data into chunks.  
- Compute partial results (e.g., gradient contributions).  
- Aggregate results.  

---

## 5. Learning Curves
- Train algorithm on increasing subsets of data.  
- Plot error (training vs. cross-validation).  
- Diagnosing bias vs. variance:  
  - High bias → training error high, adding data won’t help.  
  - High variance → training error low, validation error high, more data helps.  

---

## 6. Practical Tips
- Normalize features.  
- Shuffle training examples before SGD/mini-batch.  
- Monitor learning curves and convergence.  
- Consider system architecture (parallelism, GPUs, distributed computing).  
