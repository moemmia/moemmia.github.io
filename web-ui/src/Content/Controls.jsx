import { useEffect, useRef, useMemo, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";

export function Controls({visibleWidth = 1, minVisibleHeight = 1,  steps = [], deadzone = 0.3 }) {
  const { camera, size } = useThree();
  const scroll = useScroll();

  const targetPosition = useRef(new THREE.Vector3());
  const targetRotation = useRef(new THREE.Euler());


  useEffect(() => {
    const aspect = size.width / size.height
    const distance = 0.5

    const halfWidth = visibleWidth / 2
    const halfHeightFromWidth = halfWidth / aspect
    const fovFromWidth = THREE.MathUtils.radToDeg(
      2 * Math.atan(halfHeightFromWidth / distance)
    )

    const halfMinHeight = minVisibleHeight / 2
    const fovFromMinHeight = THREE.MathUtils.radToDeg(
      2 * Math.atan(halfMinHeight / distance)
    )

    const fov = Math.max(fovFromWidth, fovFromMinHeight)

    camera.fov = fov
    camera.updateProjectionMatrix()
  }, [camera, size, visibleWidth, minVisibleHeight])

  // Pre-convierte a Vector3 y Euler
  const parsedSteps = useMemo(() => {
    return steps.map((step) => ({
      position: new THREE.Vector3(...step.position),
      rotation: new THREE.Euler(...step.rotation),
      visibleWidth: step.visibleWidth,
      minVisibleHeight: step.minVisibleHeight,
    }));
  }, [steps]);

  useFrame(() => {
    const t = scroll.offset;
    const totalSteps = parsedSteps.length;
    if (totalSteps < 2) return;

    const segmentCount = totalSteps - 1;
    const segmentIndex = Math.floor(t * segmentCount);
    const localT = (t * segmentCount) - segmentIndex;

    const current = parsedSteps[segmentIndex];
    const next = parsedSteps[Math.min(segmentIndex + 1, segmentCount)];

    let lerpT = 0;

    if (localT >= deadzone) {
      lerpT = (localT - deadzone) / (1 - deadzone);
    }

    // Interpolación entre pasos
    targetPosition.current.copy(current.position).lerp(next.position, lerpT);
    targetRotation.current.setFromVector3(
      new THREE.Vector3().fromArray(current.rotation.toArray()).lerp(
        new THREE.Vector3().fromArray(next.rotation.toArray()),
        lerpT
      )
    );

    camera.position.lerp(targetPosition.current, 0.1);
    camera.rotation.x += (targetRotation.current.x - camera.rotation.x) * 0.1;
    camera.rotation.y += (targetRotation.current.y - camera.rotation.y) * 0.1;
    camera.rotation.z += (targetRotation.current.z - camera.rotation.z) * 0.1;
  });

  return null;
}