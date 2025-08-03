import { useEffect, useRef, useMemo } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

export function Controls({ visibleWidth = 1, minVisibleHeight = 1, steps = [], deadzone = 0.3 }) {
  const { camera, size } = useThree();
  const scroll = useScroll();

  const targetPosition = useRef(new THREE.Vector3());

  useEffect(() => {
    const aspect = size.width / size.height;
    const distance = 0.5;

    const halfWidth = visibleWidth / 2;
    const halfHeightFromWidth = halfWidth / aspect;
    const fovFromWidth = THREE.MathUtils.radToDeg(2 * Math.atan(halfHeightFromWidth / distance));

    const halfMinHeight = minVisibleHeight / 2;
    const fovFromMinHeight = THREE.MathUtils.radToDeg(2 * Math.atan(halfMinHeight / distance));

    const fov = Math.max(fovFromWidth, fovFromMinHeight);

    camera.fov = fov;
    camera.updateProjectionMatrix();
  }, [camera, size, visibleWidth, minVisibleHeight]);

  const parsedSteps = useMemo(() => {
    return steps.map(step => ({
      position: new THREE.Vector3(...step.position),
      rotation: new THREE.Euler(...step.rotation),
      visibleWidth: step.visibleWidth,
      minVisibleHeight: step.minVisibleHeight,
    }));
  }, [steps]);

  useFrame(() => {
    const t = Math.max(0, scroll.offset);
    const totalSteps = parsedSteps.length;
    if (totalSteps < 2) return;

    const segmentCount = totalSteps - 1;
    const segmentIndex = Math.floor(t * segmentCount);
    const localT = t * segmentCount - segmentIndex;

    const current = parsedSteps[segmentIndex];
    const next = parsedSteps[Math.min(segmentIndex + 1, segmentCount)];

    let lerpT = 0;
    if (localT >= deadzone) {
      lerpT = (localT - deadzone) / (1 - deadzone);
    }

    targetPosition.current.copy(current.position).lerp(next.position, lerpT);
    camera.position.lerp(targetPosition.current, 0.1);

    const currentQuat = new THREE.Quaternion().setFromEuler(current.rotation);
    const nextQuat = new THREE.Quaternion().setFromEuler(next.rotation);
    const endQuat = currentQuat.clone().slerp(nextQuat, lerpT);

    camera.quaternion.slerp(endQuat, 0.1);
  });

  return null;
}
