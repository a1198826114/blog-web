import React, { useEffect } from "react";
import { index_fullScreenAnimation } from "../../utils";
import './indexAnimation.less'
export default function IndexAnimation() {
  useEffect(() => {
    index_fullScreenAnimation();
    const starback = new Starback(canvas, {
      width: canvas.parentElement.clientWidth,
      height: canvas.parentElement.clientHeight,
      speed: 5,
      frequency: 5,
      slope: { x: 5, y: 3 },
      directionX: 1,
      spread: 0.2,
      randomOpacity: true,
      backgroundColor: ["#0F2027", "#203A43", "#2C5364"],
    });
    starback.generateStar(30);
  }, []);
  return (
    <div className="canvasWrapper">
      <canvas id="canvas"></canvas>
    </div>
  );
}
