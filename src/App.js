import "./css/App.css";
import topLeft from "./images/top-left.png";
import topRight from "./images/logo-cbrr.png";
import topMiddle from "./images/logo.png";
import bottomLeft from "./images/bottom-left.png";

export default function App() {
  return (
    <div className="App">
      <div className="top">
        <div className="top-left">
          <img src={topLeft} alt="top image" />
        </div>
        <div className="top-middle">
          <img src={topMiddle} alt="logo" />
        </div>
        <div className="top-right">
          <img src={topRight} alt="logo cbrr" />
        </div>
      </div>
      <div className="bottom-left">
        <img src={bottomLeft} alt="bottom image" />
      </div>
    </div>
  );
}
