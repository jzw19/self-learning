import "./Baseball.css";
import io from "socket.io-client";

const Baseball = () => {
  const testSample = [2.668, -114.333, -1.908, 4.786, 25.707, -45.21, 78, 0]; // Curveball
  const predictContainer = document.getElementById("predictContainer");

  const socket = io("http://localhost:8080", {
    reconnectionDelay: 300,
    reconnectionDelayMax: 300,
    withCredentials: true,
    extraHeaders: {
      "baseballHeader": "batterbatterbatter"
    }
  });

  function plotPredictResult(result) {
    document.getElementById("predictButton").disabled = false;
    document.getElementById("predictResult").innerHTML = result;
    console.log(result);
  }

  const predict = (event) => {
    console.log(event);
    event.target.disabled = true;
    socket.emit("predictSample", testSample);
  };

  // functions to handle socket events
  socket.on("connect", () => {
    alert("CONNECTED");
    document.getElementById("waiting-msg").style.display = "none";
    document.getElementById("trainingStatus").innerHTML = "Training in Progress";
  });

  socket.on("trainingComplete", () => {
    document.getElementById("trainingStatus").innerHTML = "Training Complete";
    document.getElementById("predictSample").innerHTML =
      "[" + testSample.join(", ") + "]";
    predictContainer.style.display = "block";
  });

  socket.on("predictResult", (result) => {
    plotPredictResult(result);
  });

  socket.on("disconnect", () => {
    document.getElementById("trainingStatus").innerHTML = "";
    predictContainer.style.display = "none";
    document.getElementById("waiting-msg").style.display = "block";
  });

  return (
    <div>
      <h2>Pitch Training Accuracy</h2>
      <h3 id="waiting-msg">Waiting for server...</h3>
      <span id="trainingStatus"></span>
      <div id="predictContainer">
        Sensor data: <span id="predictSample"></span>
        <button id="predict-button" onClick={predict}>Predict Pitch</button>
        Predicted Pitch Type: <span id="predictResult"></span>
      </div>
    </div>
  );
}

export default Baseball;