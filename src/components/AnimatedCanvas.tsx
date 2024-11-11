// AnimatedCanvas.tsx
import { useRef, useEffect } from 'preact/hooks';
import p5 from 'p5';
import styled from 'styled-components';

function drawStar(p: p5, x: number, y: number, radius1: number, radius2: number, npoints: number, opacity: number) {
    let angle = p.TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    
    p.fill(255, 255, 255, opacity); // Set opacity for shining effect
    p.beginShape();
    for (let a = 0; a < p.TWO_PI; a += angle) {
      let sx = x + p.cos(a) * radius2;
      let sy = y + p.sin(a) * radius2;
      p.vertex(sx, sy);
      sx = x + p.cos(a + halfAngle) * radius1;
      sy = y + p.sin(a + halfAngle) * radius1;
      p.vertex(sx, sy);
    }
    p.endShape(p.CLOSE);
}

export const SceneContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`;

export const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0; /* Behind the canvas */
  background: linear-gradient(
    #1b2947,
    #282f51,
    #36365a,
    #443c63,
    #52426b,
    #614973,
    #704f7b,
    #815482,
    #935988,
    #a55d8d,
    #b86291,
    #cb6692,
    #dd6b93,
    #ec7691,
    #f18c90,
    #f3a195,
    #f3b6a0,
    #f3c9b2,
    #f3dcc7,
    #ffeddb
  );
`;

export const Canvas = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* On top of the gradient */
`;

const AnimatedCanvas = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sketch = (p: p5) => {
      let mountains: any = [];
      let stars: any = [];
      let sunY: number;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight); // Responsive canvas size
        sunY = p.height; // Start the sun below the mountains

        // Create stars
        for (let i = 0; i < 50; i++) {
          stars.push({
            x: p.random(p.width),
            y: p.random(p.height / 2),
            size: p.random(2, 4),
            sizeVariation: p.random(0.1, 0.3),
            opacity: p.random(150, 255),
            opacityDirection: p.random([1, -1])
          });
        }

        // Define mountains
        mountains = [
          { x: p.width * 0.1, y: p.height * 0.85, width: p.width * 0.2, height: p.height * 0.2, color: '#282f51' },
          { x: p.width * 0.3, y: p.height * 0.82, width: p.width * 0.15, height: p.height * 0.25, color: '#443c63' },
          { x: p.width * 0.5, y: p.height * 0.78, width: p.width * 0.25, height: p.height * 0.3, color: '#52426b' },
          { x: p.width * 0.7, y: p.height * 0.8, width: p.width * 0.18, height: p.height * 0.28, color: '#614973' },
          { x: p.width * 0.9, y: p.height * 0.75, width: p.width * 0.2, height: p.height * 0.35, color: '#704f7b' }
        ];
      };

      p.draw = () => {
        p.clear();

        // Sun rising effect
        p.noStroke();
        p.fill(255, 204, 0, 180);
        p.ellipse(p.width / 2, sunY, p.width * 0.1, p.width * 0.1);
        if (sunY > p.height * 0.5) sunY -= 0.5;

        // Draw stars
        stars.forEach((star: any) => {
          star.size += star.sizeVariation;
          if (star.size > 4 || star.size < 2) {
            star.sizeVariation *= -1;
          }

          star.opacity += star.opacityDirection * 3;
          if (star.opacity > 255 || star.opacity < 150) {
            star.opacityDirection *= -1;
          }

          drawStar(p, star.x, star.y, star.size / 2, star.size, 5, star.opacity);

          star.y += 0.5;
          if (star.y > p.height / 2) star.y = 0;
        });

        // Draw main mountains
        mountains.forEach((mountain: any) => {
          p.fill(mountain.color);
          p.noStroke();
          p.triangle(
            mountain.x, mountain.y,
            mountain.x - mountain.width, mountain.y + mountain.height,
            mountain.x + mountain.width, mountain.y + mountain.height
          );
        });

        // Draw mirrored reflection
        p.push();
        p.translate(0, p.height); // Move to the bottom
        p.scale(1, -1); // Flip vertically
        p.noStroke();

        // Draw each mountain inverted and with a ripple effect
        mountains.forEach((mountain: any) => {
          const ripple = (x: number) => Math.sin(x * 0.05 + p.frameCount * 0.1) * 5;
          p.fill(mountain.color);
          p.triangle(
            mountain.x, mountain.y + ripple(mountain.x),
            mountain.x - mountain.width, mountain.y + mountain.height + ripple(mountain.x - mountain.width),
            mountain.x + mountain.width, mountain.y + mountain.height + ripple(mountain.x + mountain.width)
          );
        });
        p.pop();
        
      };

      // p.windowResized = () => {
      //   p.resizeCanvas(p.windowWidth, p.windowHeight);

      //   sunY = p.height;
      //   mountains = [
      //     { x: p.width * 0.1, y: p.height * 0.85, width: p.width * 0.2, height: p.height * 0.2, color: '#282f51' },
      //     { x: p.width * 0.3, y: p.height * 0.82, width: p.width * 0.15, height: p.height * 0.25, color: '#443c63' },
      //     { x: p.width * 0.5, y: p.height * 0.78, width: p.width * 0.25, height: p.height * 0.3, color: '#52426b' },
      //     { x: p.width * 0.7, y: p.height * 0.8, width: p.width * 0.18, height: p.height * 0.28, color: '#614973' },
      //     { x: p.width * 0.9, y: p.height * 0.75, width: p.width * 0.2, height: p.height * 0.35, color: '#704f7b' }
      //   ];
      //   stars = stars.map((star: any) => ({
      //     ...star,
      //     x: p.random(p.width),
      //     y: p.random(p.height / 2),
      //   }));
      // };
    };

    const p5Instance = new p5(sketch, canvasRef.current!);
    return () => p5Instance.remove();
  }, []);

  return (
    <SceneContainer className="Scene">
      <BackgroundGradient className="v" />
      <Canvas ref={canvasRef} className="Scene-stars" />
    </SceneContainer>
  );
};

export default AnimatedCanvas;
