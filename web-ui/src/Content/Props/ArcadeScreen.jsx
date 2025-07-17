import { useVideoTexture } from "@react-three/drei";
import { useState } from "react";

export default function ArcadeScreen({ nodes }) {
  const texture = useVideoTexture("videos/balacera.webm");
  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes["arcade-screen"].geometry}
      onClick={() =>
        window.open("https://outsidederoutine.itch.io/balacera", "_blank")
      }
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = "pointer"; // Cambia a cursor de enlace
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "default"; // Vuelve al cursor normal
      }}
    >
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}
