# Tutorial from Codecademy at https://www.codecademy.com/courses/learn-recommender-systems/articles/surprise-recommender-systems
'''
# Original code from tutorial #

from surprise import Dataset, KNNBasic, accuracy, SVD
from surprise.model_selection import train_test_split

###################################
# Recommender - KNNBasic  vs. SVD #
###################################

# KNNBasic #

# Load the movielens-100k dataset (download it if needed), and split it into train and test set
movie_data = Dataset.load_builtin('ml-100k')
trainset, testset = train_test_split(movie_data, test_size=.2, random_state=42)
# print(trainset.ur[590])

# Use the KNNBasic algorithm.
movie_recommender = KNNBasic()
movie_recommender.fit(trainset)

predictions = movie_recommender.test(testset)
# print(predictions[0])
# print(accuracy.rmse(predictions))

# SVD #
# Use the SVD algorithm.
movie_recommender = SVD()
movie_recommender.fit(trainset)

predictions = movie_recommender.test(testset)
print(predictions[0])
print(accuracy.rmse(predictions))

# Compare the RMSE between KNNBasic and SVD to see which performed better. Lower the RMSE = better performance.
'''

# Modified to be called from a React app #
# server.py
from flask import Flask, jsonify
from surprise import Dataset, KNNBasic, accuracy, SVD
from surprise.model_selection import train_test_split
import io
import sys

app = Flask(__name__)

@app.route("/run-recommender", methods=["GET"])
def run_recommender():
    # Capture stdout (so we can return what would normally be printed)
    old_stdout = sys.stdout
    sys.stdout = mystdout = io.StringIO()

    # ----------------------------
    # Original recommender logic
    # ----------------------------
    movie_data = Dataset.load_builtin('ml-100k')
    trainset, testset = train_test_split(movie_data, test_size=.2, random_state=42)

    # KNNBasic
    knn_recommender = KNNBasic()
    knn_recommender.fit(trainset)
    predictions_knn = knn_recommender.test(testset)
    accuracy.rmse(predictions_knn)

    # SVD
    svd_recommender = SVD()
    svd_recommender.fit(trainset)
    predictions_svd = svd_recommender.test(testset)
    accuracy.rmse(predictions_svd)

    print("Sample prediction (SVD):", predictions_svd[0])

    # ----------------------------
    # Restore stdout
    # ----------------------------
    sys.stdout = old_stdout
    result_str = mystdout.getvalue()

    return jsonify({"output": result_str})

if __name__ == "__main__":
    # Run the Flask server
    app.run(host="0.0.0.0", port=5000, debug=True)
