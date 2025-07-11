import { BrightnessContrast , EffectComposer, HueSaturation, ToneMapping } from '@react-three/postprocessing'
import { BlendFunction} from 'postprocessing'

export function Env() {
  
  
  return (
    <>
        <ambientLight intensity={1.7} />
        <EffectComposer
          enabled={true}
        >
          <BrightnessContrast
            brightness={0.01}
            contrast={0.07}
          />
          <HueSaturation
            blendFunction={BlendFunction.COLOR}
            hue={0}
            saturation={0.3}
          />
          <ToneMapping
            blendFunction={BlendFunction.COLOR}
            adaptive={false}
            resolution={256}
            middleGrey={1}
            maxLuminance={10.0}
            averageLuminance={1} 
          />
        </EffectComposer>
    </>
  )
}

