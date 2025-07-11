import './App.css';

import { Canvas } from '@react-three/fiber'
import { Model } from './Content/Model';
import { Env } from './Content/Environment';
import { Controls } from './Content/Controls';
import * as THREE from 'three'
import { Front } from './Content/UX/Front';


function App() {
  return (
    <>
      <Front />
      <Canvas
        camera={{fov:30, position:[0.1, 1, -0.5], rotation:[0, Math.PI + 0.2, 0]}}
        id='webgl'
        gl={{
          antialias: true,
          powerPreference: "low-power",
          localClippingEnabled: true
        }}
      >
        <Env />
        <Model/>
        <Controls visibleWidth={0.6} minVisibleHeight={0.5} />
      </Canvas>
    </>
  );
}

export default App;
