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
        camera={{fov:30}}
        id='webgl'
        onCreated={({gl}) => {
          gl.toneMapping = THREE.CineonToneMapping
        }}
      >
        <Env />
        <Model/>
        <Controls />
      </Canvas>
    </>
  );
}

export default App;
