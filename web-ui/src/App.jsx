import './App.css';

import { Canvas } from '@react-three/fiber'
import { Model } from './Content/Model';
import { Env } from './Content/Environment';
import { Controls } from './Content/Controls';
import { Front } from './Content/UX/Front';
import { ScrollControls, Scroll } from '@react-three/drei';

function App() {
  return (
    <>
      <Canvas
        camera={{position:[0.1, 1, -0.5], rotation:[0, Math.PI + 0.2, 0]}}
        id='webgl'
        gl={{
          antialias: true,
          powerPreference: "low-power",
          localClippingEnabled: true
        }}
      >
        <Env />
        <Model/>
        <ScrollControls pages={3} eps={1}>
          <Controls minVisibleHeight={0.65} visibleWidth={0.5}
                    steps={[
                      {
                        position: [0.1, 1, -0.5],
                        rotation: [0, Math.PI + 0.2, 0],
                      },
                      {
                        position: [0.5, 1.1, 0.33],
                        rotation: [0, Math.PI / 2, 0],
                      },
                      {
                        position: [0.7, 1.08, 1.51],
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
