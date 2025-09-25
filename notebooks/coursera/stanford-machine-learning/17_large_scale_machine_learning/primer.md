# 🌍 Primer on Large Scale Machine Learning

Large datasets can make training too slow if we rely on “vanilla” algorithms.  
This module shows techniques to make learning **practical and scalable**.

---

## Core Ideas
1. **Don’t use the full dataset for every step** → use stochastic or mini-batch updates.  
2. **Exploit parallelism** → distribute heavy computations.  
3. **Think incrementally** → update as new data arrives.  
4. **Use learning curves** → figure out whether to get more data or improve the model.  

---

## Intuition
- Batch GD is like taking careful, precise steps toward the minimum — slow but steady.  
- SGD is like running downhill with some randomness — noisy, but you’ll get close fast.  
- Mini-batch GD is the “sweet spot” between them.  

---

## When to Use What
- **SGD**: When dataset is too large to fit in memory or when data is streaming.  
- **Mini-batch GD**: Default for large datasets with good hardware (GPU/CPU parallelism).  
- **Online learning**: Continuous, never-ending data (e.g., recommendation engines).  
- **MapReduce/Distributed**: Web-scale data, beyond a single machine.  
