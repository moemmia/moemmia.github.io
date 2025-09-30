import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const SoundToggle = ({ setPlaying }) => {
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    setPlaying(soundOn);
  }, [setPlaying, soundOn]);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setSoundOn(!soundOn)}
        className="bg-black px-3 py-2 mt-1 flex items-center gap-1 text-white text-xs font-mono hover:bg-white hover:text-black transition"
        aria-haspopup="true"
        type="button"
      >
        {soundOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
      </button>
    </div>
  );
};

export default SoundToggle;
