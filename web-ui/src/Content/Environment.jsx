import { BrightnessContrast , EffectComposer, HueSaturation, ToneMapping } from '@react-three/postprocessing'
import { BlendFunction} from 'postprocessing'

export function Env() {
  
  
  return (
    <>
        <ambientLight intensity={3} />
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
            saturation={0.4}
          />
          <ToneMapping
            blendFunction={BlendFunction.NORMAL} // blend mode
            adaptive={false} // toggle adaptive luminance map usage
            resolution={256} // texture resolution of the luminance map
            middleGrey={20} // middle grey factor
            maxLuminance={16.0} // maximum luminance
            averageLuminance={0.3} // average luminance
          />
        </EffectComposer>
    </>
  )
}

