import { useVideoTexture } from '@react-three/drei';

export default function ArcadeScreen({ nodes }) {
  const texture = useVideoTexture('videos/balacera.webm');

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
