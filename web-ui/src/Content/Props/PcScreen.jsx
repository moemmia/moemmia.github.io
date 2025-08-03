import { Html } from '@react-three/drei';
import PcDisplay from '../PCUX/PcDisplay';

export default function PcScreen({ scaleFactor = 0.392 }) {
  const portal = { current: document.getElementById('html-overlay') };

  const baseWidth = 1350;
  const baseHeight = 1230;
  const scaledWidth = baseWidth * scaleFactor;
  const scaledHeight = baseHeight * scaleFactor;
  const distanceFactor = 10;
  const scale = 0.01 / scaleFactor;

  return (
    <mesh position={[0.019, 1.06873, 0.324415]} rotation={[0, Math.PI / 2, 0]}>
      <Html
        portal={portal}
        occlude="blending"
        transform
        distanceFactor={distanceFactor}
        scale={scale}
        zIndexRange={[10, 0]}
      >
        <div
          className="bg-[#5aa]"
          style={{
            width: `${scaledWidth}px`,
            height: `${scaledHeight}px`,
          }}
        >
          <PcDisplay />
        </div>
      </Html>
    </mesh>
  );
}
