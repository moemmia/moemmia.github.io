import { useEffect, useRef } from 'react'
import * as THREE from "three"
import useHeadLookAt from './useHeadLookAt'

export default function Character({ nodes, materials, actions, mouse }) {
  const headRef = useRef()

  useEffect(() => {
    if (materials) {
      Object.values(materials).forEach(mat => {
        mat.aoMapIntensity = 1
        mat.needsUpdate = true
      })
    }

    if (actions.rigAction) {
      actions.rigAction.reset().setLoop(THREE.LoopRepeat, Infinity).play()
    }

    const skinnedMesh = nodes.Char
    const skeleton = skinnedMesh?.skeleton
    const spine005 = skeleton?.bones.find(b => b.name === 'DEF-spine005')
    if (spine005) {
      headRef.current = spine005
    }
  }, [materials, actions, nodes])

  useHeadLookAt(headRef, mouse)

  return (
    <group position={[0.279, 0, 0.432]} rotation={[Math.PI, -1.198, Math.PI]}>
        <skinnedMesh
            geometry={nodes.Char.geometry}
            material={materials.Char}
            skeleton={nodes.Char.skeleton}
            castShadow
            receiveShadow
        />
        <primitive object={nodes.root} />
        <primitive object={nodes['MCH-torsoparent']} />
        <primitive object={nodes['MCH-hand_ikparentL']} />
        <primitive object={nodes['MCH-upper_arm_ik_targetparentL']} />
        <primitive object={nodes['MCH-hand_ikparentR']} />
        <primitive object={nodes['MCH-upper_arm_ik_targetparentR']} />
        <primitive object={nodes['MCH-foot_ikparentL']} />
        <primitive object={nodes['MCH-thigh_ik_targetparentL']} />
        <primitive object={nodes['MCH-foot_ikparentR']} />
        <primitive object={nodes['MCH-thigh_ik_targetparentR']} />
    </group>
  )
}
