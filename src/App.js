import { useState, useEffect } from "react";
import "./css/App.css";
import topLeft from "./images/top-left.png";
import topRight from "./images/logo-cbrr.png";
import topMiddle from "./images/logo.png";
import bottomLeft from "./images/bottom-left.png";
import bottomRight from "./images/right-bottom.png";
import thermometer from "./images/thermometer.png";
import Fade from "react-reveal/Fade";
import { PulseLoader } from "react-spinners";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showButton, toggleButton] = useState(true);
  const [showMeter, toggleMeter] = useState(false);
  const [showReading, toggleReading] = useState(false);

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

  function showReadingMeter() {
    const timer = setTimeout(() => {
      toggleReading(!showReading);
    }, 700);

    return () => clearTimeout(timer);
  }

  function handleClick() {
    toggleButton(!showButton);
    delay();
    showReadingMeter();
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
            <div className="middle">
              {/* Thermometer color -- #5b7c4e */}
              <div className="middle-thermometer">
                <div className="thermometer">
                  <img src={thermometer} alt="thermometer" />
                </div>
                <div className="meter-background">
                  <div className="meter-reader"></div>
                </div>
              </div>
            </div>
          </Fade>
        </>
      )}
    </div>
  );
}
