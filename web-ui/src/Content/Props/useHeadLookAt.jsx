import { useFrame } from '@react-three/fiber'
import * as THREE from "three"

export default function useHeadLookAt(headRef, mouse) {
  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.msMaxTouchPoints)

  useFrame(() => {
    if (isTouchDevice || !headRef.current) return
    const head = headRef.current

    const vector = new THREE.Vector3(
      -1,
      (mouse.y + 0.5) * 0.5,
      mouse.x
    )

    head.lookAt(vector)
  })
}
