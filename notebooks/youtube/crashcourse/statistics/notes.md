# Mean, Median, and Mode: Measures of Central Tendency
- Mean
  - a.k.a. "average" or "expectation"
  - takes the sum of all the numbers in a data set, and divides by the number of data points
  - good at measuring things that are normally distributed
- Normal
  - A distribution of data that has roughly the same amount of data on either side of the middle, and has its most common values around the middle of the data
  - bell-shaped curve
- Distribution
  - Shows us how often each value occurs in our data set (a.k.a. "frequency")
- Median
  - The middle number if we lined up our data from smallest to largest
- Mode
  - The value that appears most in our data set
- Bimodal data (data with two modes) is an example of **"multimodal" data** which has many values that are similarly common. Usually multimodal data results from **two or more underlying groups all being measured together**
- When the median and mean are the same, this tells us that the distribution is symmetric - that there's equal amount of data on either side of the median and mean. We call this distribution "normal"
- When the mean and median are different, we call this dataset "skewed"

---

# Measures of Spread
- Range
  - Measures the distance between the min and max data points ($range = max - min$)
- Interquartile Range (IQR)
  - Looks at the spread of the middle 50% of your data ($IQR = Q3 - Q1$)
  - Doesn't include extreme values
- Variance
  - Calculated by adding the squared deviation of every data point and dividing by (the number of data points minus 1)
  - We subtract 1 from the number of data points to remove bias (this is called Bessel's correction)
- Standard Deviation
  - The average amount we expect a point to differ (deviate) from the mean

---

# Data Visualization (parts 1 and 2)
- Quantitative Data
  - Quantities; numbers that have both order and consistent spacing
  - Ways to visualize:
    - Can be visualized using the same types of charts as categorical data, but requires grouping, sucha as by "binning"
      - "Binning" takes a quantitative variable and bins it into categories that are pre-existing or made up
    - Histograms
      - Like bar charts, but with the bars "squished" together because the data is quantitative
      - Heights of bars represent frequency
      - Gives information about how data is distributed
    - Dot Plots
      - Dot representation of histograms. There's 1 dot per data point in the bar that would have been used in a histogram
      - Still loses information about the individual values
    - Stem & Leaf Plot
      - Is an extension of the dot plot
      - The x-axis is labelled with values and vertical lines (stems)
      - Dots are placed on each side of a stem depending on which stem the data value is closest to and whether it is greater or less than the stem's value
    - Box Plots (Box-and-whiskers plot)
      - The box is a rectangle that stretches across the interquartile range (IQR) of the data (Q1 to Q3 with a line in between that marks the median)
      - The "whiskers" are lines that extend to the maximum or minimum
      - There are also brackets on either side called "fences" (upper fence, lower fence)
        - $Lower fence = Q1 - 1.5 * IQR$
        - $Upper fence = Q3 + 1.5 * IQR$
    - Cumulative Frequency Plot
      - Like histograms, but instead of the height of the bar telling you how much data is in that specific bin, it tells you how much data is in the current bin _and_ previous bins (hence cumulative)
- Categorical Data
  - Doesn't have meaningful order or consistent spacing
  - Ways to visualize:
    - Frequency Table
      - Displays all categories in one column and how often they occur in the dataset in the other column
    - Relative Frequency Table
      - Is an extension of the Frequency Table. Has another column which displays the "relative frequency" - that is, the proportion of the dataset which a category occupies.
        - e.g. in a table for pasta types, the category "fettucine" is seen **40%** of the time, so its relative frequency is **40%**.
    - Bar chart
      - Uses height to represent frequency. This is a more visual way to compare categories.
    - Pie chart
      - Uses frequencies to portion our pieces of a circle. uses area to communicate proportions.
    - Pictograph
      - Uses images and counts of the image to represent frequencies. Sometimes different sizes are used, but their interpretation can be too vague or confusing


---

# The Shape of Data: Distributions
- Like a histogram, the distribution tells us about the shape and spread of the data
- The shape of the normal distribution is set by the mean and standard deviation.

---

# Correlation Doesn't Equal Causation
- Correlation
  - Measures the way 2 variables move together, both the direction and closeness of their movement
  - Positive correlation = upwards slope (variables move in the same direction)
  - Negative correlation = downwards slope (variables move in opposite directions)
  - The units of your variables can affect the regression coefficient, and can also affect the calculation of correlation. To resolve this issue, use the standard deviations to scale correlation so that it is always between -1 and 1. This is our **correlation coefficient** $r$
  - $r^2$ is the **squared correlation**
    - It is always between 0 and 1
    - It tells us (in decimal form) ow much of the variance in one variable is predicted by the other
    - Higher $r^2$ = better fit
- Correlation doesn't equal causation
  - Just because 2 variables are related doesn't mean one variable causes the other
  - When A is correlated with B, there are a few possible reasons:
    - A causes B
    - B causes A
    - Variable C causes both A and B
    - No relationship at all. It's just ooincidence

---

# Controlled Experiments
- TODO

---

# Sampling Methods and Bias with Surveys
- TODO

---

# Probability (parts 1 and 2)
- TODO

---

# The Binomial Distribution
- Binomial Coefficient Formula
  - Is an easy way to find out how many ways a certain ratio of successes to failures can occur
  - $_nC_k = \frac{n!}{(n - k)!k!}$
- Binomial Probability Formula
  - Let $p = probability\ of\ an\ event\ happening$
  - $binom(n,k) =\ _nC_k(p)^k (1 - p)^{n - k}$
- Definition of Binomial Distribution
  - In simple terms:
    - A distribution that has 2 possible outcomes (e.g. pass/fail)
  - Formally:
    - A discrete probability distribution that models the number of successes ($k$) in a fixed number ($n$) of independent, binary trials (yes/no, pass/fail, etc.). It calculates the probability of obtaining exactly $k$ successes, where each trial has the same constant probability ($p$) of success for each trial
- Bernoulli Distribution
  - Is a special case of the Binomial Distribution where there is only 1 trial (a.k.a. event)
  - Represents the probability of a single success or failure
  - Formula:
    - $P(X=1) = p^1 (1 - p)^{1 - 1} = p\ \ \ \ \ \ \ \ \ \ \ \ \ \ success$
    - $P(X=0) = p^0 (1 - p)^{1 - 0} = (1 - p)\ \ \ \ fail$


---

# Geometric Distributions and the Birthday Paradox
- Formula:
  - $geom(k;p) = (1 - p)^{k-1}p$
- Tells you the probability that your first success will be on the *kth* try
- As $k$ increases, the probability of that being your first success gets incredibly low, mostly because you'll probably have encountered your first success already
- Birthday Paradox
  - Famous example where statistics trumps intuition
  - Given 20 people in a classroom, what is the likelihood that 2 people share the same birthday?
    - This is a geometric distribution problem, so:
      - Person 1 has a 365/365 chance of having a unique birthday
      - Given the above, person 2 has a 364/365 chance of having a unique birthday
      - Given the above, person 3 has a 363/365 chance of having a unique birthday
      - etc.
      - So the probability of everyone in the room having a unique birthday is the product of all these individual probabilities
        - $\frac{365}{365} * \frac{364}{365} * \frac{363}{365} * ... * \frac{346}{365} \approx 0.59$
        - Conversely, this means there is a 41% chance that at least 2 people share the same birthday

---

# Randomness
- Characterized by a distribution
- Mean
  - The expected value of a set of data
  - a.k.a. the first moment of the data
- Variance
  - How spread out we expect the data to be
  - a.k.a. the second moment of the data (notice that it's squared)
  - Formula
    - $E(x - \mu)^2 = \sum(x - \mu)^2$
      - $E$ = expectation
      - $x$ = single data point
      - $\mu$ = mean
- Skewness
  - $E(x - \mu)^3$
  - Tells us whether there are more extreme values on one side
  - a.k.a. the third moment of the data (notice that it's cubed)
- Kurtosis
  - $E(x - \mu)^4$
  - Measures how think the tails on a distribution are
  - a.k.a. the fourth moment of the data
  - The normal distribution has a kurtosis of 3.
    - Kurtosis above 3 is referred to as positive excess kurtosis
    - Kurtosis below 3 is referred to as negative excess kurtosis
  
---

# Z-scores and Percentiles
- Z-scores and standard deviation allow us to normalize data (put values from two sets of data on the same scale so we can compare them)
- Percentiles
  - Tell you what percentage of the population has a score or value that's lower than yours

---

# The Normal Distribution
- Distributions of means are normally distributed, even if populations aren't
- In a normal distribution, the mean, median and mode are all the same value
- In order to meaningfully compare whether 2 means are different, we need to know something about their distribution: the sampling distribution of sampling means (a.k.a. "sampling distribution" for short)
- Note that the distribution of sample means is not something we create. We don't actually draw an infinite number off samples to plot and observe their means. This distribution is a description of a process.
- Central Limit Theorem
  - The distribution of sample means for an independent, random variable will get closer and closer to a normal distribution as the size of the sample gets bigger and bigger, even if the original population distribution isn't normal itself.
- The mean of a sampling distribution is always the same as the population they are derived from. So with large samples, the sample means will be a pretty good estimate of the true population mean.
  - Though the means may be the same, the standard deviation is not
- The standard deviation of a distribution of sample means is still related to the original standard deviation, but the bigger the sample size, the closer your sample means are to the true population mean, so we need to adjust the original population standard deviation to reflect this. Mathematically:
  - $\sigma_{samplingDistribution} =  \frac{\sigma_{population}}{\sqrt{n}}$
    - $n$ = sample size
- Standard Error
  - Tells us the average distance between a sample mean and the true mean

---

# Confidence Intervals
- Definition
  - An estimated range of values that seem reasonable based on what we've observed. Its center is still the sample mean, but there is room on either side for uncertainty.
- **95%** in a **95% confidence interval (CI)** tells us that if we calculated a confidence interval from **100** different samples, about **95** of them would contain the **true population mean**
  - Our "**confidence**" is in the fact that the procedure of calculating this confidence interval will only **exclude** the population mean **5% of the time**
- Z-score
  - Tells us the distance between the mean of a distribution and a data point in standard deviations
- With small sample sizes, the distribution of means isn't always exactly normal, so we often use a T-distribution instead of a Z-distribution to find out where the middle 95% of data is
- T-Distribution
  - Is a continuous probability distribution that's **unimodal**; it's a useful way to represent **sampling distributions**
  - As you get more data, the T-distribution starts to look more like the Z-distribution
  - Generally, sample sized greater than 30 are considered "large enough" because scientists generally believe that sampling distributions where the sample size is 30+ are close enough to normal, though 30 is an arbitrary cutoff, just like 0.05
- Formula to convert from t-score to raw score:
  - $raw\ score = mean \pm t - value * standard\ error$
  - Note that the **_margin of error_** is represented by the $\pm$ portion of the formula $(t - value * standard\ error)$
- Confidence intervals quantify our uncertainty. They also demonstrate the tradeoff of accuracy for precision

---

# P-Values (parts 1 - 3)
- Statistical Inference
  - Tells us how we can go from describing data we already have to making inferences about data we don't have
  - Sample parameters like the mean are just estimates of the mean of the population that they are taken from
  - Null Hypothesis Significance Testing
    - Is a test which asks you to test the null of your original hypothesis
      - e.g.
        - Hypothesis:
          - People with gene X eat a different amount of calories than the general population.
        - Null hypothesis:
          - One way to state this: "There is no difference or effect of gene X."
          - Another way to state this: "The population mean caloric intake for people with gene X is actually the same as the regular population"
    - Is a form of the **reductio ad absurdum** argument which tries to **discredit** an idea by **assuming the idea is true**, then showing that if you make that assumption, **something contradictory happens**.
    - Is like proof by contradiction
  - P-Value
    - Indicates how "rare" your data is by telling you the probability of getting data that's as or more extreme as the data you observed **if the null hypothesis was true**
      - This is represented mathematically as $P(data | null)$ (read as "Probability of the data given the null hypothesis is true")
    - If your p-value were **0.10** you could say that your sample is in the **top 10% most extreme samples** we'd expect to see **based on the distribution of sample means**.
    - p-values can be one-sided or two-sided. Since most scientific questions don't assume a direction of likelihood, p-values are most often two-sided.
    - The p-value tells you how often you'll get a value that's as or more extreme than the one you got.
      - Smaller p-value &rarr; more rare to get your sample just by random chance alone **if the null hypothesis is true**
      - Bigger p-value &rarr; more likely to get your sample just by random chance alone **if the null hypothesis is true**
  - To finish Null Hypothesis Significance Testing, we have to decide whether our sample is "absurd" or "extreme" enough to lead us to believe that this sample probably isn't from the null distribution.
  - Some statisticians view a p-value as a continuous measure of evidence
    - e.g. $p = 0.18$ is better than $p = 0.19$, $p = 0.19$ is better than $p = 0.20$, etc.
  - In Null Hypothesis Significance Testing, p-values need a cutoff. General consensus is $p < 0.5$
- Arguments have been made that we can have different p-value cutoffs (a.k.a. "**alphas**") depending on the situation, and that scientists should be allowed to justify their reasons for picking a certain cutoff.
- One **common misinterpretation** of the p-value is that **it can tell you the probability that the null hypothesis is true**
  - Recall that the p-value already assumes the null hypothesis is true. It doesn't tell you anything about whether the null hypothesis **actually is** true or false. It only tells you how "rare" your data point is **under the assumption that the null hypothesis is already true**
- In general, tests of significance are based on hypothetical probabilities calculated from their null hypotheses. They do not generally lead to any probability statements about the real world, but to a rational and well-defined measure of reluctance to the acceptance of the hypotheses they test.
- What we typically **_want_** to calculate is the probability that the null hypothesis is true, given the data. However, what we actually calculate with the p-value is the probability of the data given the null hypothesis.
  - e.g.
    - Actual: $P(data | null)$
    - Want: $P(null | data)$
  - There are other tests to get what we want
- Alternative Hypothesis ($H_a$)
  - Is the opposite of the null hypothesis ($H_0$)
    - e.g.
      - $H_0: \mu_{primedSubjects} = 10$
      - $H_a: \mu_{primedSubjects} \neq 10$
  - The distribution that is seen when assuming the alternative hypothesis is seen is called the Alternative Distribution
- Another common issue with p-values is how we interpret non-significant p-values
  - If our p-value isn't lower than our predetermined cutoff (alpha), then we "fail to reject" the null hypothesis.
    - "Fail to reject" is not the same as "accept." Null hypothesis testing doesn't allow us to "accept" or provide evidence that the null is true. Instead, it only allows us to _fail to provide evidence_ that the null hypothesis is false.
    - "Failing to reject" the **null hypothesis** doesn't mean that there isn't an effect or relationship, it just means we didn't get enough evidence to say there definitely is one.
- Types of errors with p-values:
  - Type 1 error
    - Rejecting the null hypothesis $H_0$ even if it's actually true.
    - Can only happen if the null hypothesis $H_0$ is true.
    - Essentially a **false positive** (we think we've detected an effect, but there isn't one)
  - Type 2 error
    - Failing to reject the null hypothesis $H_0$ when it's actually false.
    - Can only happen if the null hypothesis $H_0$ is false.
    - Essentially a **false negative** (there was an effect, but we didn't see it)
  - Depending on context, one type of error may be preferred over the other
- Statistical power
  - Tells us our chance of detecting an effect if there is one
  - If $H_0$ is true, you'll correctly fail to reject it $1 - \alpha$ of the time.
  - If $H_0$ is true, you'll incorrectly reject it $\alpha$ of the time.
  - If $H_0$ is false, you'll correctly reject it $1 - \beta$ of the time.
  - If $H_0$ is false, you'll incorrectly fail to reject it $\beta$ of the time.
  - $1 - \beta$ is called our **statistical power**
  - Across many fields, it's considered sufficient to have $\geq 80%$ statistical power

---

# Bayes Theorem (parts 1 - 2)
- Bayes' Theorem/Rule Formula:
  - $P(A|B) = \frac{P(B|A)P(A)}{P(B)}$
- Bayes' Factor
  - Represents the amount of information that we've learned about our hypotheses from the data
  - Formula:
    $K = \frac{P(A_1|B)}{P(A_2|B)} = \frac{\frac{P(A_1) * P(B|A_1)}{P(B)}}{\frac{P(A_2) * P(B|A_2)}{P(B)}} = \frac{P(A_1) * P(B|A_1)}{P(A_2) * P(B|A_2)}$
  - $K$ = Bayes' Factor
  - $A_1$ = First hypothesis
  - $A_2$ = Second hypothesis
  - $B$ = Data
- Criticism of Bayesian statistical inference:
  - One of the main uses of statistics is science, which is supposed to be relatively "objective" and not influence by opinion, but this method includes beliefs in its calculations
    - It includes belief in its calculation because the hypothesis is subjective and based on belief. You can get different results for the probability in these calculations by using opposite hypotheses or different subjective beliefs about likelihood
- Bayes' theorem can be used to update our beliefs about discreate _and_ continuous variables. The notes above are written in the context of discrete variables, but the general idea is the same.
- Terminology and labels for the discrete formula:
  - Condensed format: $P(H_1|X) = P(H_1) * \frac{P(X|H_1)}{P(X)}$
    - Posterior
      - $P(H_1|X)$
    - Prior
      - $P(H_1)$
    - Likelihood
      - $P(X|H_1)$
    - Normalization
      - $P(X)$
  - Expanded format: $\frac{P(H_1|X)}{P(H_2|X)} = \frac{P(H_1)}{P(H_2)} * \frac{P(X|H_1)}{P(X|H_2)}$
    - Posterior Odds
      - $\frac{P(H_1|X)}{P(H_2|X)}$
    - Prior Odds
      - $\frac{P(H_1)}{P(H_2)}$
    - Bayes' Factor
      - $\frac{P(X|H_1)}{P(X|H_2)}$
- With continuous variables, we get distributions instead of discrete values for our calculated probabilities
- Continuous formula:
  - $f_{X|Y}(x|y) = \frac{f_{X|Y}(y|x)f_X(x)}{\int{_{X|Y}(y|x)f_X(x)dx} + \int{_{X|Y}(y|x')f_X(x')dx'}}$
    - In the context of this formula, $x'$ denotes a term that is distinct from $x$, not the first derivative or any form of complementation of $x$
    - The graph of this formula displays a continuous curve where the y-axis is the relative probability of $X$ and the x-axis is all possible values of $\theta$
      - On this graph, if you use the prior distribution as a threshold (it would display as a horizontal line), then any part of the plotted curve above this threshold represents a $\theta$ that became more likely after we saw the new data, and any part of the plotted curve below this threshold represents a $\theta$ that became less likely
- Using Bayesian methods to analyze questions allows you to "inject" your own prior beliefs into the analysis, which is important when making business decisions

---

# Test Statistics
- Allow us to quantify how close things are to our expectations or theories
- The amount of variance in a group is really important in judging a difference
- Test Statistic: $\frac{observed\ data\ -\ what\ we\ expect\ if\ the\ null\ is\ true}{average\ variation}$
- Sampling Distribution
  - The distribution of all possible group means for a certain sample size
- Z-statistics around 1 or -1 tell us that the sample mean is the typical distance we'd expect a typical sample mean to be from the mean of the null hypothesis
  - $Z_{group} = \frac{\={x}_{group} - \mu}{\frac{\sigma}{\sqrt{n}}}$
- We can use z-tests to do hypothesis tests about means, differences between means, proportions or even differences between proportions
- The "average variation" is the standard error from our sampling distribution. We calculate it using the average proportions of variant groups in an experiment:
  - Standard error (SE) between 2 independent proportions in a normal distribution:
    - $SE_{\^{p}_1-\^{p}_2} = \sqrt{SE^2_{\^p_1} + SE^2_{\^p_2}} = \sqrt{\frac{p_1(1 - p_1)}{n_1} + \frac{p_2(1 - p_2)}{n_2}}$
  - In the context of this video's example, it is shown as:
    - $SE = \sqrt{proportion_{flu}(proportion_{noflu}) * (\frac{1}{n_1} + \frac{1}{n_2})}$
- Returning to our test statistic (the Z-statistic), we can plug in values for the remaining variables to get a single value for this statistic.
  - In the video example:
    - $observed\ data = 0.06$
    - $what\ we\ expect\ if\ the\ null\ is\ true = 0$
    - $average\ variation = \sqrt{0.224(1 - 0.224) * (\frac{1}{600} + \frac{1}{400})} \approx 2.2295$
- There are a few ways to determine if this value for the test statistic is a statistically significant result:
  - Critical value ($\alpha$)
    - This is a value of our test statistic that marks the limits of our extreme values
    - A test statistic that is more extreme than the critical value causes us to reject the null (hypothesis)
    - Calculate the critical value by determining the cutoff values for where the top 0.5%, 1% or 1.5% most extreme values occur in the distribution
  - T-distribution & T-statistic
    - Used when a Z-test won't apply and/or when we don't know the true population standard deviation
    - The general formula is the same as the Z-test:
      - $T_{group} = \frac{\=x - \mu}{\frac{sd}{\sqrt{n}}}$
        - Note that **the denominator uses the _sample_ standard deviation**, not the population standard deviation
    - T-distribution looks similar to the Z-distribution, but with thicker tails because we're estimating, so we have more uncertainty
    - Standard error formula in this context:
      - $SE = \sqrt{\frac{\sigma_1^2}{N_1} + \frac{\sigma_2^2}{N_2}}$
      - This time we're looking at the **sampling distribution of differences between means* - all the possible differences between 2 groups - which is why the standard error formula may look a little different
    - In the video example:
      - $T = 2.65$
      - $P = 0.0108$
      - $\alpha = 0.01$
      - $P > \alpha$, so we cannot reject our null hypothesis
    - The methods of using P-values and critical values to determine statistical significance are equivalent because both refer to samples that are extreme and both lead us to the same conclusion

---

# T-Tests
- First, define the null hypothesis and the alternative hypothesis.
  - Examples in the video:
    - Null
      - There's no difference between the coffee at two coffee shops
    - Alternative
      - There is a difference between the coffee at two coffee shops
  - In this example, we're interested in whether the mean scores for coffee are different between 2 coffee shops. This is the same as asking whether the difference between the mean scores for each coffee shop is not zero.
- Two Sample T-Test
  - a.k.a. "independent" or "unpaired" t-test
  - Formula is the same as that for the general test statistic formula: $\frac{observed\ data\ -\ what\ we\ expect\ if\ the\ null\ is\ true}{average\ variation}$
  - More specifically, this formula would look like: $\frac{\=x - \mu}{\sqrt{(\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2})}}$
  - After you get a T-value, you can determine if there is a statistical difference in the data. There are 2 ways to do this:
    - Calculate the critical T-value. If our **T-statistic** is **greater** than the **critical value**, then we **reject the null hypothesis.**
    - Calculate the P-value from our T-statistic. If the **P-value** is **smaller** than our chosen **alpha level**, then **reject the null hypothesis.**
- **Random assignment** to test groups **adds variation**, which makes it harder to see a true difference between groups. One solution to this is a paired T-test.
  - In the video example, people may love or hate coffee, so this affects their score rating. In a paired T-test, you would pair a coffee lover and a coffee hater before assigning the **pair** to a group. Doing this removes the variation caused by personal preference about coffee in the example experiment.
- T-statistics tell us how many standard errors away fromt he mean our observed difference is.

---

# Degrees of Freedom and Effect Sizes
- Degrees of Freedom
  - The number of independent pieces of information we have in our data
  - Recall:
    - We are not using the same T-distribution every single time we're calculating a test statistic
    - The tails in a T-distribution are fatter because we don't know the population standard deviation when we calculate a T-statistic, so **we estimate it using the sample standard deviation**
    - As the sample size increases, uncertainty about our estimate decreases and the T-distribution looks more like the Z-distribution
  - Degrees of freedom can help us to measure the accuracy of a T-distribution. We choose our T-distribution based on the number of degrees of freedom that we have
  - Example of Degress of Freedom:
    - Given the mean of 3 credit cards numbers, you cannot determine what the 3 individual credit card numbers are.
    - However, given 2 credit card numbers and the mean of the 3 card numbers, you can figure out the 3rd credit card number.
    - In this example, there are $n=4$ pieces of information. 3 of them are independent (the credit card numbers) and 1 is dependent (the mean). Given any 3 of these pieces of information, you can figure out the 4th, meaning the 4th piece of information is deterministic. With less than 3 pieces of information, you are "free to choose" any value for the 3rd piece of information. Hence, you have $n - 1 = 3$ degrees of freedom.
  - Returning to the T-test, this means calculating the mean uses up 1 degree of freedom.
    - Takeaway:
      - The more data you have, the more independent information that you have. But every time you make a calculation like a mean, you're using up one piece of independent information.
- Effect Size
  - Tells us how big the effect we observed was, compared to random variation
  - It's important to pair p-values with effect sizes because sometimes we can get statistically significant effects, but effect sizes that are so small, they don't really matter to us.
  - Formula (only in this context where we are looking at a T-test for 2 independent samples)
    - $ES$ = "Effect Size"
    - $ES = \frac{\mu_1 - \mu_2}{\sigma} = \frac{\mu_1 - \mu_2}{\sqrt{\frac{x_1^2 + x_2^2}{2}}}$
  - Recall that standard error is scaled by the square root of n:
    - $t = \frac{difference}{standard\ error}$

---

# Chi-Square Tests
- Formula follows the same general idea as the previous ones: $\frac{observed\ data\ -\ what\ we\ expect\ if\ the\ null\ is\ true}{average\ variation}$
  - The difference is in how we calculate $average\ variation$ (in the denominator) - instead of using standard error, we use the expected counts in the denominator
  - The result is called a **chi-square statistic**, and like the other statistics for $z$ and $t$, it quantifies how well our sample data fits a distribution
- The **chi-square distribution** is used to find a p-value from the **chi-square statistic**
  - Like T-distributions, chi-square distributions change their shape as degrees of freedom changes
- With the p-value, you can finally determine if your data is statistically significant (e.g. p < 0.05>)
- Formal formula:
  - $\chi^2 = \sum{\frac{(O_i - E_i)^2}{E_i}}$
    - $E$ = expected value
    - #O# = observed value
    - $\chi^2$ = Chi-square statistic
- One thing we should always check when doing a chi-square test is whether the expected frequency for every cell is greater than 5. The value 5 is arbitrary, but it's widely accepted.
- 3 main ways we use chi-square tests:
  - Goodness of Fit test
    - Tests how well certain proportions fit our sample
    - Only has 1 row (we can have many categories, but we're only looking at 1 variable)
  - Test of Independence
    - Handles 2 variables
    - Tests whether being a member of one category is independent of the other
    - The test performed is the same as the one for the Test of Homogeneity (calculate the degrees of freedom, then calculate the expected frequencies)
      - For the expected frequencies:
        - Calculate the sum of each row, the total of those sums (for the sample size), and the sum of each column.
        - Convert the sum of each column to a percentage $\frac{sum\ of\ column}{total\ sample\ size}$. This is the expected percentage for each column.
        - Multiply the sum of each row by the percentage calculated above for each respective column. The resulting table shows the expected value for each cell.
      - Finally, use the chi-square formula on each cell: $\frac{(O_i - E_i)^2}{E_i}$ and caluclate the sum of the results in each cell to get the chi-square statistic: $\chi^2 = \sum{\frac{(O_i - E_i)^2}{E_i}}$
  - Test of Homogeneity
    - Looks at whether it's likely that different samples come from the same population
- General formula for degrees of freedom for the chi-square tests above: $DoF = (rows - 1)(columns - 1)$

---

# P-Hacking
- Definition
  - Manipulating data or analyses to artificially get significant P-values.
  - Happens when analyses are being chosen based on what makes the P-value **significant**, *not* what's the **best analysis plan**
- It's not always malicious. It can be done unintentionally.
- Recap
  - Null hypothesis
    - The idea that there's no effect
    - We look at this to calculate a p-value
    - Null hypothesis significance testing framework
      - Either **reject** or **fail to reject** the **null**
      - Leads to 4 possible situations:
        - $H_0$ is true, and we fail to reject the $H_0$ &emsp;&nbsp;*(correct)*
        - $H_0$ is false, and we fail to reject the $H_0$ &emsp;*(incorrect; type 2)*
        - $H_0$ is true, and we reject the $H_0$ &emsp;&emsp;&emsp;&emsp;*(incorrect; type 1)*
        - $H_0$ is false, and we reject the $H_0$ &emsp;&emsp;&emsp;&ensp;&nbsp;*(correct)*
- Family wise error rate (FWER)
  - Definition
    - The probability of making at least one Type 1 error (false positive) among a set or "family" of multiple statistical comparisons
  - Is an inflated type 1 error
  - As the number of tests increases, FWER grows rapidly
  - Commonly controlled using methods like the Bonferroni or Holm corrections
    - Bonferroni correction
      - Take the usual threshold (e.g. .05 for p-value) and divide it by the number of tests you're doing

---

# The Replication Crisis
- TODO

---

# Regression
- TODO

---

# ANOVA (parts 1 - 2)
- TODO

---

# Fitting Models is like Tetris
- TODO

---

# Supervised Machine Learning
- TODO

---

# Unsupervised Machine Learning
- TODO

---

# Intro to Big Data
- TODO

---

# Big Data Problems
- TODO

---

# Statistics in Court
- TODO

---

# Neural Networks
- TODO

---

# War
- TODO

---

# When Predictions Fail
- TODO

---

# When Predictions Succeed
- TODO
