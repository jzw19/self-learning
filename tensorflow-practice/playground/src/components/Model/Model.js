import { sequential, layers, tensor2d } from "@tensorflow/tfjs";

const Model = () => {
    // Define a model for linear regression
    const model = sequential();
    model.add(layers.dense({ units: 1, inputShape: [1] }));

    model.compile({ loss: "meanSquaredError", optimizer: "sgd" });

    // Generate some synthetic data for training
    const xs = tensor2d([1, 2, 3, 4], [4, 1]);
    const ys = tensor2d([1, 3, 5, 7], [4, 1]);

    const predictResult = () => {
        // Train the model using the data
        model.fit(xs, ys, { epochs: 10 }).then(() => {
            // Use the model to do inference on a data point the model hasn't seen before
            model.predict(tensor2d([5], [1, 1])).print();
        })
    }

    return (
        <div>
            <h2>Linear Regression Model</h2>
            <p>Open the console to see printed results.</p>
            <button onClick={predictResult}>Predict</button>
        </div>
    );
}

export default Model;