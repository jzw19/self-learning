# Prioritizing What to Work On
- Example for videos - spam classifier
- Building a spam classifier
  - How to spend your time to make your model have low error? Possibilities:
    - Collect lots of data
      - e.g. "honeypot" project
    - Develop sophisticated features based on email routing information (from email header)
    - Develop sophisticated features for message body
      - e.g.
        - Should "discount" and "discounts" be treated as the same word?
          - How about "deal" and "Dealer"?
        - Features about punctuation?
    - Develop sophisticated algorithm to detect misspellings
      - e.g. "m0rtgage", "med1cine", "w4tches"
- Researchers often fixate on one of the options above, but this is not useful. There is a more systematic way to choose between options.

# Error Analysis
- Recommended approach
  - Start with a simple algorithm that can be implemented quickly. Implement it and test it on your cross-validation data
  - Plot learning curves to decide if more data, more features, etc. are likely to help
  - Error analysis: Manually examine the examples (in cross validation set) that your algorithm made errors on. See if you spot any systematic trend in what type of examples it is making errors on (the error trend)
  - These should help with preventing premature optimization
- Example
  - $m_{CV}$ = 500 examples in cross validation set
  - Algorithm misclassifies 100 emails
  - Manually examine the 100 errors, and categorize them based on:
    - What type of email it is
    - What cues (features) you think would have helped the algorithm classify them correctly
- **The goal is to figure out what are the most difficult examples for an algorithm to classify**
  - *Very often, different learning algorithms will find similar categories of examples difficult*
  - This is why quick and dirty implementations are useful here
- The importance of numerical evaluation
  - It is very important to get error results as a single, numerical value. Otherwise it is difficult to assess your algorithm's performance.

# Error Metrics for Skewed Classes
- Consider the example of cancer classificaiton:
  - Train a logistic regression model
  - Find that you got 1% error on test set (99% correct diagnoses)
  - Suppose we find out that the true statistic from our training test set is that 0.50% of patients have cancer (this is what we call "skewed classes" because there is a large skew towards one class as opposed to the other). Then:
    - If the algorithm predicts 0 all the time, then it gets a 0.5% error all the time, which is less than our original 1%, which means the algorithm does better.
      - However, this is not useful (because it's just always predicting nobody ever has cancer)
        - So, what can we do about this?
- Precision/Recall
  - $y = 1$ in presence of rare class that we want to detect (in the example above, patient has cancer)
  - First, consider the following table:<br/><br/>
  <div style="display: flex; align-items: center">
    Predicted Class&emsp;
    <table>
      <caption>Actual Class</caption>
      <tr>
        <th style="border:1px solid"/>
        <th style="border:1px solid">1</th>
        <th style="border:1px solid">0</th>
      </tr>
      <tr>
        <th style="border:1px solid">1</th>
        <td style="border:1px solid">True positive</td>
        <td style="border:1px solid">False positive</td>
      </tr>
      <tr>
        <th style="border:1px solid">0</th>
        <td style="border:1px solid">False negative</td>
        <td style="border:1px solid">True negative</td>
      </tr>
    </table>
  </div>
  <br/>

  - This gives us what we need for a different way to evaluate the performance of our algorithm. We have:
    - Precision
      - Of all patients where we predicted $y = 1$, what fraction actually has cancer?
      - $\frac{True\ positives}{Number\ predicted\ positive} = \frac{True\ positives}{True\ positives\ +\ False\ positives}$
      - High precision means we don't have many false positives (incorrectly flagged as having cancer when they actually don't)
    - Recall
      - Of all patients that actually have cancer, what fraction did we correctly detect as having cancer?
      - $\frac{True\ positives}{Number\ actual\ positive} = \frac{True\ positives}{True\ positives\ +\ False\ negatives}$
      - High recall means we don't have many false negatives (incorrectly not flagges as having cancer when they actually do)
    - Accuracy
      - $\frac{True\ positives\ +\ True\ negatives}{Total\ examples}$

# Trading Off Precision and Recall
- Continue cancer prediction example
- Given the following:
  - We've already trained our logistic regression classifier which outputs a probablity between 0 and 1 ($0 \leq h_{theta}(x) \leq 1$)
    - Predict 1 if $h_{\theta(x)} \geq 0.5$
    - Predict 0 if $h_{\theta(x)} \lt 0.5$
- Suppose we want to predict $y = 1$ (cancer) $iff$ very confident
  - Then we would want a classifier with higher precision, but lower recall
    - Predict 1 if $h_{\theta(x)} \geq 0.8$
    - Predict 0 if $h_{\theta(x)} \lt 0.8$
- Suppose we want to avoid missing too many cases of cancer (avoid false negatives)
  - Then we would want a classifier with higher recall, but lower precision
    - Predict 1 if $h_{\theta(x)} \geq 0.2$
    - Predict 0 if $h_{\theta(x)} \lt 0.2$
- More generally: Predict 1 if $h_{\theta(x)} \geq threshold$
- How to compare precision/recall numbers?
  - Averages ($\frac{P + R}{2}$) are not useful
    - Recall the example where the classifier always predicts 0 or 1. In this case, the average would be 0.5, possibly even a bit higher. This would be higher than a more useful algorithm that has say $P = 0.7, R = 0.1$ where the average would be 0.4
  - Instead, use something else like the $F_1\ Score$ (sometimes referred to as "F Score")
    - $F_1\ Score = 2\frac{PR}{P + R}$
    - High F Score requires that Precision and Recall are both close to 1
    - Low F Score requires that Precision and Recall are both close to 0
    - Numbers in between generally give a good ranking or ordering
  - Practical advice is to try a range of different values of thresholds and evaluate them on your cross-validation (CV) set, then pick whatever value of threshold gives you the highest F Score

# Data for Machine Learning
- Under certain conditions, getting a lot of data and training on a certain type of learning algorithm can be a very effective way to get good performance out of the algorithm
- Large data rationale
  - Use a large algorithm with many parameters
    - e.g.
      - Logistic/linear regression with many features
      - Neural network with many hidden units
    - The examples above can be thought of as "low bias algorithms"
      - This implies that $J_{train}(\theta)$ (the training set error) will be small
  - Use a very large training set (unlikely to overfit; low variance)
    - $J_{train}(\theta) \approx J_{test}(\theta)$
  - Put both of the above together and $J_{test}(\theta)$ will be small

