

export default function ArcadeScreen({ nodes }) {

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes['arcade-screen'].geometry}
    >
    </mesh>
  )
}
