import {Html} from '@react-three/drei'
import { useThree } from "@react-three/fiber"
import { Front } from '../UX/Front'

export default function PcScreen() {

  const { gl } = useThree()
  const portal = { current: gl.domElement.parentNode }

  return (
    <mesh position={[.016, 1.06873, 0.324415]}
        rotation={[0, Math.PI / 2, 0]}>
      <Html
        occlude="blending"
        transform
        portal={portal}
        distanceFactor={1}
        style={{
          userSelect: 'none',
          willChange: 'transform',
          backfaceVisibility: 'visible',
        }}
      >
        <div className="w-[135px] h-[123px] overflow-y-auto">
          <div className="bg-black">
            <p className="text-white text-base sm:text-3xl">
              Moisés Muñiz Mangas Iglesias
            </p>
          </div>
        </div>
      </Html>
    </mesh>
  )
}
