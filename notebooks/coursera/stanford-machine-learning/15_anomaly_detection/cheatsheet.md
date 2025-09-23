# 📝 Anomaly Detection Cheat Sheet

## 🎯 Goal
Detect data points that **don’t look like the rest** (outliers).  

---

## 🔑 Workflow
1. **Choose features** that capture important behavior.  
2. **Fit a Gaussian model** on training data (assume normal = training).  
3. **Compute probability** $p(x)$ for each new example.  
4. **Set threshold** $\epsilon$.  
   - If $p(x) < \epsilon$ → anomaly.  

---

## 📊 Model
- **Univariate Gaussian (independent features)**  
  For each feature $j$:  

  $$
  \mu_j = \frac{1}{m} \sum_{i=1}^m x_j^{(i)}, \quad 
  \sigma_j^2 = \frac{1}{m} \sum_{i=1}^m \big(x_j^{(i)} - \mu_j\big)^2
  $$

  Probability:  

  $$
  p(x) = \prod_{j=1}^n \frac{1}{\sqrt{2\pi\sigma_j^2}} 
         \exp\!\left(-\frac{(x_j - \mu_j)^2}{2\sigma_j^2}\right)
  $$

- **Multivariate Gaussian (correlated features)**  
  - Learn mean vector $\mu$ and covariance matrix $\Sigma$.  
  - More powerful, but needs more data.  

---

## ⚖️ Threshold $\epsilon$
- Pick using a **validation set** (with some labeled anomalies if possible).  
- Optimize **F1 score** (balance between precision and recall).  

---

## 📈 Performance
- **Accuracy is misleading** (because anomalies are rare).  
- Use **precision/recall/F1**.  
  - Precision = $\frac{TP}{TP + FP}$ = % flagged that are real anomalies.  
  - Recall = $\frac{TP}{TP + FN}$ = % of real anomalies caught.  

---

## ✅ Tips
- Normalize/scale features before training.  
- Try adding features that highlight anomalies (e.g., ratios, rates of change).  
- Start with independent Gaussian — only move to multivariate if needed.  
- Visualize data distributions to confirm Gaussian assumption is reasonable.  

---

## 📌 Example Use Cases
- Fraud detection (credit cards, banking).  
- Server monitoring (CPU, memory, traffic).  
- Manufacturing (sensors, defect detection).  
- Medical (vitals, lab results).  

---

👉 Quick mental model:  
**“Learn what normal looks like. Anything too improbable = anomaly.”**

---

# 📊 Anomaly Detection vs. Supervised Learning

| Aspect | Anomaly Detection | Supervised Learning |
|--------|------------------|---------------------|
| **When to Use** | Few or no labeled anomalies; anomalies are rare | Plenty of labeled anomalies and normal examples |
| **Training Data** | Mostly (or only) normal data | Balanced set of normal + anomalies |
| **Output** | Probability of normality → flag if below threshold | Direct classification into “normal” or “anomaly” |
| **Adaptability** | Can catch new/unseen anomalies | Works only for types of anomalies seen in training |
| **Performance Metric** | Precision, recall, F1 (accuracy is misleading) | Standard metrics (accuracy, precision, recall, F1) |
| **Feature Dependence** | Works best if anomalies stand out in chosen features | Learns boundaries from data, less dependent on Gaussian assumption |
| **Examples** | Fraud detection, machine monitoring, medical sensors | Spam detection, image classification (cats vs. dogs) |

---
