export default function Room({ nodes, materials }) {
  return (
    <>
      <mesh castShadow receiveShadow geometry={nodes.table.geometry} material={materials.Basic}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.drawer.geometry}
          material={materials.Basic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.keyboard.geometry}
          material={materials.Keyboard}
          position={[0.215, 0, 0.065]}
          rotation={[0, -Math.PI / 9, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mouse.geometry}
          material={materials.Keyboard}
          position={[0.215, 0, 0.065]}
          rotation={[0, -Math.PI / 9, 0]}
        />
        <mesh castShadow receiveShadow geometry={nodes.pc.geometry} material={materials.Pc} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chair.geometry}
        material={materials.Basic}
        position={[0.643, -0.016, 0.576]}
        rotation={[-Math.PI, 0.373, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.room.geometry}
        material={materials["Basic-L"]}
      />
    </>
  )
}
