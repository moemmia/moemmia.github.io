import './App.css';

import { Canvas } from '@react-three/fiber';
import { Model } from './Content/Props/Model';
import { Env } from './Content/Environment';
import { Controls } from './Content/Controls';
import { Front } from './Content/UX/Front';
import { ScrollControls, Scroll, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei';
import { Loading } from './Content/UX/Loading';
import { useState } from 'react';

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <div
        id="html-overlay"
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100svw',
          height: '100swh',
        }}
      />
      <Loading progress={progress} />
      <Canvas
        camera={{ position: [0.1, 1, -0.5], rotation: [0, Math.PI + 0.2, 0], far: 10, near: 0.1 }}
        id="webgl"
        gl={{
          antialias: true,
          powerPreference: 'low-power',
        }}
      >
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <Env />
        <Model setProgress={setProgress} />
        <ScrollControls pages={3} eps={1}>
          <Controls
            minVisibleHeight={0.65}
            visibleWidth={0.5}
            steps={[
              {
                position: [0.1, 1, -0.5],
                rotation: [0, Math.PI + 0.2, 0],
              },
              {
                position: [0.38, 1.05, 0.325],
                rotation: [0, Math.PI / 2, 0],
              },
              {
                position: [0.9, 1.14, 1.515],
                rotation: [0, Math.PI / 2, 0],
              },
            ]}
          />
          <Scroll html>
            <Front />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
