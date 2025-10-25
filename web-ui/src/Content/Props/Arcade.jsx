import ArcadeScreen from './ArcadeScreen';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Arcade({ nodes, playSignal }) {
  return (
    <>
      <primitive object={nodes.arcade}>
        <primitive object={nodes['arcade-buttons-holder']} />

        {Array.from({ length: 16 }).map((_, i) => (
          <AnimatedButton key={i} object={nodes[`arcade-buttons-${i + 1}`]} angle={0.005} />
        ))}

        <AnimatedJoystick object={nodes['arcade-joystick-1']} axis="x" angle={0.15} />
        <AnimatedJoystick object={nodes['arcade-joystick-2']} axis="x" angle={-0.15} />

        <ArcadeScreen nodes={nodes} playSignal={playSignal} />
      </primitive>
    </>
  );
}

export function AnimatedButton({ object, movement = 0.005 }) {
  const ref = useRef();
  const initialY = useRef(0);
  const currentTween = useRef(null);

  useEffect(() => {
    if (ref.current) {
      initialY.current = ref.current.position.y;
    }
  }, []);

  const handleHover = () => {
    if (currentTween.current) currentTween.current.kill();

    currentTween.current = gsap.to(ref.current.position, {
      y: initialY.current - movement,
      duration: 0.15,
      ease: 'power2.out',
    });
  };

  const handleOut = () => {
    if (currentTween.current) currentTween.current.kill();

    currentTween.current = gsap.to(ref.current.position, {
      y: initialY.current,
      duration: 0.25,
      ease: 'power2.out',
    });
  };

  return (
    <primitive
      ref={ref}
      object={object}
      onPointerOver={handleHover}
      onPointerOut={handleOut}
      onPointerDown={handleHover}
      onPointerUp={handleOut}
      castShadow
      receiveShadow
    />
  );
}

export function AnimatedJoystick({ object, axis = 'x', angle = 0.15 }) {
  const ref = useRef();
  const initialRotation = useRef({ x: 0, y: 0, z: 0 });
  const currentTween = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const { x, y, z } = ref.current.rotation;
      initialRotation.current = { x, y, z };
    }
  }, []);

  const handleHover = () => {
    if (currentTween.current) currentTween.current.kill();

    currentTween.current = gsap.to(ref.current.rotation, {
      [axis]: initialRotation.current[axis] + angle,
      duration: 0.25,
      ease: 'power2.out',
    });
  };

  const handleOut = () => {
    if (currentTween.current) currentTween.current.kill();

    currentTween.current = gsap.to(ref.current.rotation, {
      x: initialRotation.current.x,
      y: initialRotation.current.y,
      z: initialRotation.current.z,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  return (
    <primitive
      ref={ref}
      object={object}
      onPointerOver={handleHover}
      onPointerOut={handleOut}
      onPointerDown={handleHover}
      onPointerUp={handleOut}
      castShadow
      receiveShadow
    />
  );
}
