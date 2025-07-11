
import { useEffect } from "react"
import { useThree } from "@react-three/fiber"
import * as THREE from "three"


export function Controls({
  visibleWidth = 1,
  minVisibleHeight = 1 
}) {
  const { camera, size } = useThree()

  useEffect(() => {
    const aspect = size.width / size.height
    const distance = Math.abs(camera.position.z)

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

  return null
}
