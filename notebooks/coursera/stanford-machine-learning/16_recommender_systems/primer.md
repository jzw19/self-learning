# 📘 Primer: Recommender Systems

Recommender Systems try to **predict user preferences** for unseen items and suggest the most relevant ones.  

---

## Why Important?
- Keeps users engaged (Netflix, YouTube, Spotify).  
- Drives sales and conversions (Amazon, eBay).  
- Powers personalization across modern platforms.  

---

## Key Ideas
1. **Content-Based**  
   - Uses item features.  
   - Example: If you like action movies with actor X, recommend others with similar attributes.  

2. **Collaborative Filtering**  
   - Uses patterns in ratings across many users.  
   - Example: “People who liked the same movies you liked also enjoyed Y.”  

3. **Matrix Factorization**  
   - Decomposes user–item interactions into hidden features.  
   - Learns *latent dimensions* of preferences.  

---

## Practical Challenges
- **Cold start:** What if a new user or new item has no ratings?  
- **Sparsity:** Ratings matrix is mostly empty.  
- **Scalability:** Millions of users and items → need efficient algorithms.  

---

## Connection to Anomaly Detection
- Both use **probability or similarity measures** to infer missing/rare data.  
- Both optimize model parameters with **regularization**.  
