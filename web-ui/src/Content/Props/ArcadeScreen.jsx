import { useVideoTexture } from '@react-three/drei';
import { useEffect } from 'react';

export default function ArcadeScreen({ nodes, playSignal }) {
  const texture = useVideoTexture('videos/balacera.webm', {
    start: false,
    loop: true,
    muted: true,
  });

  useEffect(() => {
    if (playSignal && texture.image) {
      texture.image.play();
    }
  }, [playSignal, texture]);

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes['arcade-screen'].geometry}
      onClick={() => window.open('https://outsidederoutine.itch.io/balacera', '_blank')}
      onPointerOver={() => {
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'default';
      }}
    >
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}
