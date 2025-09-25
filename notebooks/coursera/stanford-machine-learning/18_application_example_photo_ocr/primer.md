# 📘 Photo OCR – Primer

The Photo OCR problem is about **extracting text from images**, broken into a sequence of supervised learning tasks.

---

## Why it matters
- Real-world ML applications = *pipelines*.  
- Each stage is its own learning problem.  
- Success depends on error analysis and focusing effort where it matters.  

---

## Key Components
1. **Text detection**:  
   - Sliding window classifier checks if a region contains text.  
   - Can use convolutional NN, logistic regression, or SVM.  

2. **Character segmentation**:  
   - Separate words into letters.  
   - Possible with projection methods or classifiers on character boundaries.  

3. **Character recognition**:  
   - Train classifier on labeled characters.  
   - Add synthetic data to simulate different fonts, sizes, and distortions.  

4. **Post-processing**:  
   - Use a dictionary or n-gram model to reduce recognition errors.  

---

## Practical Strategies
- **Error analysis**: Where’s the biggest mistake happening? Improve that.  
- **Data synthesis**: Augment small datasets by simulating realistic distortions.  
- **Pipeline evaluation**: Treat each stage as its own learning problem.  
