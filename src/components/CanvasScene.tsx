import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";

const CanvasScene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = 400;

    // Draw the mountain scene
    const drawMountainScene = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Mountains data
      const mountains = [
        { x: 100, height: 100 },
        { x: 300, height: 150 },
        { x: 500, height: 100 },
        { x: 700, height: 120 },
      ];

      // Draw mountains
      mountains.forEach((mountain) => {
        ctx.beginPath();
        ctx.moveTo(mountain.x, canvas.height / 2);
        ctx.lineTo(mountain.x + 50, canvas.height / 2 - mountain.height);
        ctx.lineTo(mountain.x + 100, canvas.height / 2);
        ctx.fillStyle = "#6a5acd";
        ctx.fill();
      });
    };

    drawMountainScene();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default CanvasScene;
