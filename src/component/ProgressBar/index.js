import { useState, useEffect } from "react";
import "../../css/progress.scss";
export default function ProgressBar({ progress }) {
  const [style, setStyle] = useState({});
  const [count, setCount] = useState(0);
  const firstVal = progress - Math.floor(progress * 0.4);
  const secondVal = progress - Math.floor(progress * 0.1);
  // Had problems showing decimals so the text below shows when the percentage gets to what has been set
  const finalVal = "49,75";

  function animateBar() {
    if (count < firstVal) {
      setTimeout(() => {
        const newStyle = {
          opacity: 1,
          width: `${count}%`,
        };
        setStyle(newStyle);
        setCount(count + 1);
      }, 400);
    } else if (count < secondVal) {
      setTimeout(() => {
        const newStyle = {
          opacity: 1,
          width: `${count}%`,
          transition: "1s ease-in",
        };
        setStyle(newStyle);
        setCount(count + 1);
      }, 580);
    } else if (count < progress) {
      setTimeout(() => {
        const newStyle = {
          opacity: 1,
          width: `${count}%`,
        };
        setStyle(newStyle);
        setCount(count + 1);
      }, 1500);
    }
  }

  useEffect(() => {
    //speed the counting till Percentage - 10
    animateBar();
  }, [count]);

  return (
    <div className="container">
      <h1 className="container-text">ALVÔMETRO</h1>
      <div className="progressbar-container">
        <div className="progressbar-complete" style={style}>
          <div className="progressbar-liquid"></div>
        </div>
        {count === progress ? (
          <span className="progress" style={style}>
            {finalVal}%
          </span>
        ) : (
          <span className="progress" style={style}>
            {count}%
          </span>
        )}
      </div>
    </div>
  );
}
