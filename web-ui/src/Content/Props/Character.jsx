import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import useLookAround from './useLookAround';

export default function Character({ nodes, materials, actions, mouse }) {
  const headRef = useRef();
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    if (materials) {
      Object.values(materials).forEach(mat => {
        mat.aoMapIntensity = 1;
        mat.needsUpdate = true;
      });
    }
    if (actions.rigAction) {
      actions.rigAction.reset().setLoop(THREE.LoopRepeat, Infinity).play();
    }

    let skeleton = null;
    if (nodes.Char?.children) {
      for (const child of nodes.Char.children) {
        if (child.isSkinnedMesh && child.skeleton) {
          skeleton = child.skeleton;
          break;
        }
      }
    }
    if (skeleton) {
      const spine005 = skeleton.bones.find(b => b.name === 'DEF-spine005');
      if (spine005) {
        headRef.current = spine005;
      }
    }
  }, [materials, actions, nodes]);

  useEffect(() => {
    let timeout;

    const blinkCycle = () => {
      setBlink(true);
      setTimeout(() => {
        setBlink(false);
        timeout = setTimeout(blinkCycle, 2000 + Math.random() * 1000);
      }, 150);
    };

    timeout = setTimeout(blinkCycle, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useLookAround(headRef, mouse);

  return (
    <group position={[0.279, 0, 0.432]} rotation={[Math.PI, -1.198, Math.PI]}>
      <group name="Char">
        <skinnedMesh
          name="Mesh003"
          geometry={nodes.Mesh003.geometry}
          material={materials.Char}
          skeleton={nodes.Mesh003.skeleton}
        />
        <skinnedMesh
          name="Mesh003_1"
          geometry={nodes.Mesh003_1.geometry}
          material={blink ? materials.Char2 : materials.Char}
          skeleton={nodes.Mesh003_1.skeleton}
        />
      </group>
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
  );
}
