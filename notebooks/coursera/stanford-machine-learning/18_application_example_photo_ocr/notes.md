# 📝 Detailed Notes – Photo OCR

## 1. Problem Setup
- Task: Extract characters/text from natural photos.  
- Real-world ML systems often = pipelines of multiple classifiers.  

---

## 2. Pipeline Steps
### (a) Text Detection
- Sliding window approach: apply classifier to sub-regions of the image.  
- Multi-scale (vary window size).  
- Outputs bounding boxes around text.

### (b) Character Segmentation
- Split detected words into individual letters.  
- Use vertical projection histograms, or classifier-based segmentation.  
- Needs to handle kerning, touching characters.

### (c) Character Recognition
- Train supervised classifier (logistic regression, SVM, NN).  
- Features: raw pixels, HOG descriptors, etc.  
- Add artificial data to increase dataset size.

### (d) Post-Processing
- Language modeling:  
  - Correct unlikely sequences (“hte” → “the”).  
  - Use dictionary or n-gram probabilities.  

---

## 3. Evaluation
- Metrics: Precision, Recall, F1.  
- Evaluate each stage separately, and the full pipeline.  
- Example: low recall in detection stage limits overall pipeline.  

---

## 4. Error Analysis
- Inspect where pipeline fails most.  
- Prioritize fixes (data, features, algorithms).  
- Useful for modular ML systems.

---

## 5. Artificial Data Synthesis
- Crucial for limited labeled data.  
- Generate synthetic examples:  
  - Random fonts, rotations, noise, backgrounds.  
  - Simulate natural distortions.  
- Leads to robustness in recognition.  

---

## 6. Key Takeaways
- Modular design = easier debugging.  
- Error analysis = efficient improvement.  
- Synthetic data = practical hack for real-world tasks.  
