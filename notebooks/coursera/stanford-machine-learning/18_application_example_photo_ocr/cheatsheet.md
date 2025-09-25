# 📑 Photo OCR – Cheatsheet

Quick reference for Andrew Ng’s *Photo OCR* module (Machine Learning course).

---

## Pipeline
1. **Text Detection** – Find text regions in the image.  
2. **Character Segmentation** – Break text regions into individual characters.  
3. **Character Classification** – Recognize each character.  
4. **Post-Processing / Language Modeling** – Correct errors using dictionary / grammar rules.

---

## Sliding Window Classifier
- Use a classifier (e.g., logistic regression, neural net, SVM) over patches of the image.  
- Run across image with different window positions/sizes.  
- Produces candidate text regions.

---

## Evaluation
- **Precision =** \( \frac{\text{true positives}}{\text{true positives + false positives}} \)  
- **Recall =** \( \frac{\text{true positives}}{\text{true positives + false negatives}} \)  
- **F1 Score =** \( \frac{2 \cdot P \cdot R}{P + R} \)

---

## Error Analysis
- Look at errors **step by step in pipeline**.  
- Decide which step (detection, segmentation, classification) contributes most error.  
- Prioritize fixing bottlenecks.

---

## Artificial Data Synthesis
- When data is scarce → generate synthetic training data.  
- Examples:  
  - Warp fonts, add background noise for character recognition.  
  - Add distortions (rotation, blur).  
  - Overlay synthetic text on natural images.  

---

## Key Lessons
- OCR = modular pipeline.  
- Sliding window + classifier = core detection idea.  
- Error analysis guides where to spend effort.  
- Artificial data generation is powerful when labeled data is limited.  
