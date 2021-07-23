import { useState, useEffect } from "react";
import "./css/App.css";
import topLeft from "./images/top-left.png";
import topRight from "./images/logo-cbrr.png";
import topMiddle from "./images/logo.png";
import bottomLeft from "./images/bottom-left.png";
import bottomRight from "./images/right-bottom.png";
import Fade from "react-reveal/Fade";
import { PulseLoader } from "react-spinners";
import ProgressBar from "./component/ProgressBar";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showButton, toggleButton] = useState(true);
  const [showMeter, toggleMeter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  function delay() {
    const timer = setTimeout(() => {
      toggleMeter(!showMeter);
    }, 500);

    return () => clearTimeout(timer);
  }

  function handleClick() {
    toggleButton(!showButton);
    delay();
  }

  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <PulseLoader size={25} margin={2} color="#054358" />
        </div>
      ) : (
        <>
          <div className="top">
            <Fade left>
              <div className="top-left">
                <img src={topLeft} alt="top element" />
              </div>
            </Fade>
            <Fade top>
              <div className="top-middle">
                <img src={topMiddle} alt="logo" />
              </div>
            </Fade>
            <Fade right>
              <div className="top-right">
                <img src={topRight} alt="logo cbrr" />
              </div>
            </Fade>
          </div>
          <div className="bottom-left">
            <img src={bottomLeft} alt="bottom element" />
          </div>
          <Fade right>
            <div className="bottom-right">
              <img src={bottomRight} alt="bottom element" />
            </div>
          </Fade>
          <Fade top collapse when={showButton} className="fade-button">
            <button onClick={() => handleClick()} className="middle-button">
              Mostrar Alvo
            </button>
          </Fade>
          <Fade bottom opposite when={showMeter}>
            {showMeter && (
              <div className="middle">
                <ProgressBar progress={71} showMeter={showMeter} />
              </div>
            )}
          </Fade>
        </>
      )}
    </div>
  );
}

/*
  Vertical Progress bar
  https://codesandbox.io/s/mqo1r9wo4j?file=/src/VerticalProgress.jsx

  Horizontal bar
  https://codepen.io/juanigallo/pen/WNbZgmV



*/
