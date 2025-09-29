import ArcadeScreen from './ArcadeScreen';

export default function Arcade({ nodes, materials, playSignal }) {
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.arcade.geometry}
      material={materials.Arcade}
      position={[-0.093, 0, 1.43]}
      scale={0.81}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['arcade-buttons'].geometry}
        material={materials.Keyboard}
        position={[0, 0, 0.115]}
      />
      <ArcadeScreen nodes={nodes} playSignal={playSignal} />
    </mesh>
  );
}
