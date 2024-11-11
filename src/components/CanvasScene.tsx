import { useEffect, useRef } from 'preact/hooks';
import styled from 'styled-components';

const SceneContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const MountainsCanvas = styled(Canvas)`
  bottom: 0;
  height: 300px;
  margin-bottom: -150px;
  opacity: 0;
  transition: opacity 100ms;
`;

const Scene = () => {
  const starsCanvasRef = useRef<HTMLCanvasElement>(null);
  const mountainsCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const starsCanvas = starsCanvasRef.current;
    const mountainsCanvas = mountainsCanvasRef.current;

    if (starsCanvas) {
      const ctx = starsCanvas.getContext('2d');
      if (ctx) {
        const starsImage = new Image();
        starsImage.src = '/images/stars.png'; // Replace with your saved stars image path
        starsImage.onload = () => {
          ctx.drawImage(starsImage, 0, 0, starsCanvas.width, starsCanvas.height);
        };
      }
    }

    if (mountainsCanvas) {
      const ctx = mountainsCanvas.getContext('2d');
      if (ctx) {
        const mountainsImage = new Image();
        mountainsImage.src = '/mountains.png'; // Replace with your saved mountains image path
        mountainsImage.onload = () => {
          ctx.drawImage(mountainsImage, 0, 0, mountainsCanvas.width, mountainsCanvas.height);
          mountainsCanvas.style.opacity = '1'; // Fade in the mountains after loading
        };
      }
    }
  }, []);

  return (
    <SceneContainer className="Scene">
      <BackgroundGradient className="v" />
      <Canvas ref={starsCanvasRef} className="Scene-stars" width="2940" height="621.7666625976562" />
      <MountainsCanvas ref={mountainsCanvasRef} className="Scene-mountains" width="2940" height="600" />
    </SceneContainer>
  );
};

export default Scene;
