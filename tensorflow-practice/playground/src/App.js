import "./App.css";
import HandwrittenDigitRecognition from "./components/HandwrittenDigitRecognition/HandwrittenDigitRecognition";
import Model from "./components/Model/Model";
import Predictions2D from "./components/Predictions2D/Predictions2D";
// import Baseball from "./components/Baseball/Baseball";

function App() {
  return (
    <div className="App">
      <body>
        <h1 className="title">TensorFlow.js Tutorial</h1>
        <h2 className="subtitle">Refresh the page to restart</h2>
        <Model />
        <Predictions2D />
        <HandwrittenDigitRecognition />
        {/* <Baseball /> */}
      </body>
    </div>
  );
}

export default App;
