import { useEffect, useRef } from 'react'
import * as THREE from "three"
import { useFrame } from '@react-three/fiber'

export default function ArcadeScreen({ nodes }) {
  const canvasRef = useRef(document.createElement('canvas'))
  const textureRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = 512
    canvas.height = 512
    const ctx = canvas.getContext('2d')

    ctx.fillStyle = '#202020'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#fff'
    ctx.font = '24px sans-serif'
    ctx.fillText('Click here', 180, 256)

    const texture = new THREE.CanvasTexture(canvas)
    textureRef.current = texture
  }, [])

  useFrame(() => {
    if (textureRef.current) textureRef.current.needsUpdate = true
  })

  const handleClickOnTexture = (e) => {
    const uv = e.uv
    const canvas = canvasRef.current
    const x = Math.floor(uv.x * canvas.width)
    const y = Math.floor((1 - uv.y) * canvas.height)
    if (x >= 180 && x <= 330 && y >= 230 && y <= 270) {
      alert('¡Botón clickeado!')
    }
  }

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes['arcade-screen'].geometry}
      onPointerDown={handleClickOnTexture}
    >
      <meshBasicMaterial map={textureRef.current} toneMapped={false} />
    </mesh>
  )
}
