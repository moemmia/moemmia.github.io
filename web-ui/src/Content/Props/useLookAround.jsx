import { useFrame } from '@react-three/fiber';

export default function useLookAround(headRef) {
  useFrame(state => {
    if (!headRef.current) return;
    const head = headRef.current;
    const t = state.clock.elapsedTime;
    const pitch = Math.sin(t * 1.5) * 0.05;
    const yaw = Math.cos(t) * 0.05;
    head.rotation.set(pitch, yaw, 0);
  });
}
