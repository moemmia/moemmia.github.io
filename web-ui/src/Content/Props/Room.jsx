import { useEffect } from 'react';
import * as THREE from 'three';

export default function Room({ nodes, actions }) {
  useEffect(() => {
    if (actions.mouseAction) {
      actions.mouseAction.reset().setLoop(THREE.LoopRepeat, Infinity).play();
    }
  }, [actions]);

  return (
    <>
      <primitive object={nodes.table} />
      <primitive object={nodes.drawer} />
      <primitive object={nodes.keyboard} />
      <primitive object={nodes.mouse} />
      <primitive object={nodes.pc} />
      <primitive object={nodes.room} />
      <primitive object={nodes['pc-screen']} />
      <primitive object={nodes.chair} />
    </>
  );
}
