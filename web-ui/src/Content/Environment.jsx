import { BrightnessContrast , EffectComposer, HueSaturation } from '@react-three/postprocessing'
import { BlendFunction} from 'postprocessing'

export function Env() {
  
  
  return (
    <>
        <ambientLight intensity={2.5} />
        <EffectComposer
          enabled={true}
        >
          <BrightnessContrast
            brightness={0.01}
            contrast={0.1}
          />
          <HueSaturation
            blendFunction={BlendFunction.COLOR}
            hue={0}
            saturation={0.25}
          />
        </EffectComposer>
    </>
  )
}

