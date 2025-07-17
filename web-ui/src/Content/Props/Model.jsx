import { useRef } from 'react'
import { useGLTF, useAnimations, useProgress } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import * as THREE from "three"
import Character from './Character'
import Room from './Room'
import Arcade from './Arcade'
import PcScreen from './PcScreen'

export function Model({setProgress}) {
  const groupRef = useRef()
  const { nodes, materials, animations } = useGLTF('/models/portfolio.glb')
  const { mouse } = useThree()
  const { actions } = useAnimations(animations, groupRef)

  const { progress } = useProgress();
  if (setProgress) setProgress(progress);


  return (
    <group dispose={null} ref={groupRef}>
      <Arcade nodes={nodes} materials={materials} />
      <Room nodes={nodes} materials={materials} />
      <PcScreen nodes={nodes} materials={materials} />
      <Character
        nodes={nodes}
        materials={materials}
        actions={actions}
        mouse={mouse}
      />
    </group>
  )
}

useGLTF.preload('/models/portfolio.glb')
