import {
  layers,
  linspace,
  losses,
  sequential,
  tensor2d,
  tidy,
  train,
  util,
} from "@tensorflow/tfjs";
import { render, show } from "@tensorflow/tfjs-vis";

const Predictions2D = () => {
  /**
   * Get the car data reduced to just the variables we are interested in
   * and cleaned of missing data
   */
  const getData = async () => {
    const carsDataResponse = await fetch(
      "https://storage.googleapis.com/tfjs-tutorials/carsData.json"
    );
    const carsData = await carsDataResponse.json();
    const cleaned = carsData
      .map((car) => ({
        mpg: car.Miles_per_Gallon,
        horsepower: car.Horsepower,
      }))
      .filter((car) => car.mpg != null && car.horsepower != null);

    return cleaned;
  };

  const createModel = () => {
    // Create a sequential model
    const model = sequential();

    // Add a single input layer
    model.add(layers.dense({ inputShape: [1], units: 1, useBias: true }));

    // Add an output layer
    model.add(layers.dense({ units: 1, useBias: true }));

    return model;
  };

  /**
   * Convert the input data to tensors that we can use for machine
   * learning. We will also do the important best practices of _shuffling_
   * the data and _normalizing_ the data MPG on the y-axis.
   */
  const convertToTensor = (data) => {
    // Wrapping the calculations in a tidy will dispose any
    // intermediate tensors

    return tidy(() => {
      // Step 1. Shuffle the data
      util.shuffle(data);

      // Step 2. Convert data to Tensor
      const inputs = data.map((d) => d.horsepower);
      const labels = data.map((d) => d.mpg);

      const inputTensor = tensor2d(inputs, [inputs.length, 1]);
      const labelTensor = tensor2d(labels, [labels.length, 1]);

      // Step 3. Normalize the data to the range 0 - 1 using min-max scaling
      const inputMax = inputTensor.max();
      const inputMin = inputTensor.min();
      const labelMax = labelTensor.max();
      const labelMin = labelTensor.min();

      const normalizedInputs = inputTensor
        .sub(inputMin)
        .div(inputMax.sub(inputMin));
      const normalizedLabels = labelTensor
        .sub(labelMin)
        .div(labelMax.sub(labelMin));

      return {
        inputs: normalizedInputs,
        labels: normalizedLabels,
        // Return the min/max bounds so we can use them later
        inputMax,
        inputMin,
        labelMax,
        labelMin,
      };
    });
  };

  const trainModel = async (model, inputs, labels) => {
    // Prepare the model for training
    model.compile({
      optimizer: train.adam(),
      loss: losses.meanSquaredError,
      metrics: ["mse"],
    });

    const batchSize = 32;
    const epochs = 50;

    return await model.fit(inputs, labels, {
      batchSize,
      epochs,
      shuffle: true,
      callbacks: show.fitCallbacks(
        { name: "Training Performance" },
        ["loss", "mse"],
        { height: 200, callbacks: ["onEpochEnd"] }
      ),
    });
  };

  const testModel = (model, inputData, normalizationData) => {
    const { inputMax, inputMin, labelMax, labelMin } = normalizationData;

    // Generate predictions for a uniform range of numbers between 0 and 1;
    // We un-normalize the data by doing the inverse of the min-max scaling
    // that we did earlier.

    const [xs, preds] = tidy(() => {
      const xsNorm = linspace(0, 1, 100);
      const predictions = model.predict(xsNorm.reshape([100, 1]));

      const unNormXs = xsNorm.mul(inputMax.sub(inputMin)).add(inputMin);

      const unNormPreds = predictions.mul(labelMax.sub(labelMin)).add(labelMin);

      // Un-normalize the data
      return [unNormXs.dataSync(), unNormPreds.dataSync()];
    });

    const predictedPoints = Array.from(xs).map((val, i) => ({
      x: val,
      y: preds[i],
    }));

    const originalPoints = inputData.map((d) => ({
      x: d.horsepower,
      y: d.mpg,
    }));

    render.scatterplot(
      {
        name: "Model Predictions vs. Original Data",
      },
      {
        values: [originalPoints, predictedPoints],
        series: ["original", "predicted"],
      },
      {
        xLabel: "Horsepower",
        yLabel: "MPG",
        height: 300,
      }
    );
  };

  const run = async () => {
    // Load and plot the original input data that we are going to train on
    await getData().then(async (data) => {
      const values = data.map((d) => ({
        x: d.horsepower,
        y: d.mpg,
      }));

      render.scatterplot(
        { name: "Horsepower v MPG" },
        { values },
        {
          xLabel: "Horsepower",
          yLabel: "MPG",
          height: 300,
        }
      );

      const model = createModel();
      show.modelSummary({ name: "Model Summary" }, model);

      // Convert the data to a form we can use for training
      const tensorData = convertToTensor(data);
      const { inputs, labels } = tensorData;

      // Train the model
      await trainModel(model, inputs, labels).then(() => {
        console.log("done training");
        testModel(model, data, tensorData);
      });
    });
  };

  return (
    <div>
      <h2>2D Curve Fit and Prediction</h2>
      <button onClick={async () => await run()}>Predict 2D data</button>
    </div>
  );
};

export default Predictions2D;
