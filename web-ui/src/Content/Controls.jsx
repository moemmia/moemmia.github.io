
import { useEffect } from "react"
import { useThree } from "@react-three/fiber"
import * as THREE from "three"

export function Controls({ visibleWidth  = 0.7 }) {
  const { camera, size } = useThree()

  useEffect(() => {
    const aspect = size.width / size.height
    const fovInRadians = (camera.fov * Math.PI) / 180
    const distance = (visibleWidth / (2 * Math.tan(fovInRadians / 2))) / aspect

    const direction = new THREE.Vector3()
    camera.getWorldDirection(direction)

    const newPosition = direction.clone().multiplyScalar(-distance)

    const basePosition = new THREE.Vector3(0.1, 1, -0.5)
    const baseRotation = new THREE.Euler(0, Math.PI + 0.2, 0)

    camera.position.copy(basePosition.clone().add(newPosition))
    camera.rotation.copy(baseRotation)
    camera.updateProjectionMatrix()
  }, [camera, size, visibleWidth])

  return (
    <></>
  )
}
