import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';

import { useTranslation } from 'react-i18next';

import LanguageSwitcher from './LanguageSwitcher';
import SoundToggle from './SoundToggle';

export function Front({ playSignal }) {
  const { t } = useTranslation();

  const [audio] = useState(new Audio('sounds/ryan-walz-main-version-01-34-3632.mp3'));
  audio.volume = 0.5;
  audio.loop = true;

  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (playing && playSignal && audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [playSignal, audio, playing]);

  const scroll = useScroll();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const refbar = useRef(null);
  const indicatorRef = useRef(null);

  const [activeSection, setActiveSection] = useState(0);

  useFrame(() => {
    const offset = Math.max(0, scroll.offset);

    if (ref1.current) {
      ref1.current.style.opacity = `${1 - Math.min(Math.max((offset - 0) * 5, 0), 1)}`;
    }
    if (ref2.current) {
      ref2.current.style.opacity = `${1 - Math.abs(offset - 0.5) * 5}`;
    }
    if (ref3.current) {
      ref3.current.style.opacity = `${Math.min(Math.max((offset - 0.66) * 3, 0), 1)}`;
    }

    if (refbar.current) {
      refbar.current.style.width = `${Math.min(offset * 100, 100)}%`;
    }

    if (offset < 0.25) setActiveSection(0);
    else if (offset < 0.75) setActiveSection(1);
    else setActiveSection(2);
  });

  return (
    <div className="w-[100svw] h-[100svh] relative overflow-hidden">
      <div className="absolute top-3 w-full flex-col">
        <div className="absolute top-0 right-4 m-0 z-20 pointer-events-auto flex gap-1">
          <LanguageSwitcher />
          <SoundToggle setPlaying={setPlaying} />
        </div>
      </div>

      <div ref={ref1} className="absolute top-3 w-full flex-col transition-opacity duration-500">
        <p className="w-fit bg-black px-3 mx-3 py-2 text-white text-base font-mono">
          {t('main.name')}
        </p>
        <p className="w-fit bg-black px-3 mx-3 my-1 py-2 text-white text-xs font-mono">
          {t('main.title')}
        </p>

        <section className="bg-black scroller">
          <span className="scroll-icon">
            <span className="scroll-icon__wheel-outer">
              <span className="scroll-icon__wheel-inner"></span>
            </span>
          </span>
          <p className="text-white font-bold text-center pt-1 font-mono text-xs">
            {t('main.scroll')}
          </p>
        </section>
      </div>

      <div
        ref={ref2}
        className="absolute top-1/4 w-full flex justify-center transition-opacity duration-500"
      ></div>
      <div
        ref={ref3}
        className="absolute top-1/4 w-full flex justify-center transition-opacity duration-500"
      ></div>

      <div className="absolute bottom-0 left-0 w-[100vw] z-50 flex items-center">
        <div
          ref={indicatorRef}
          className="absolute bottom-1.5 h-[0.2rem] w-[12%] bg-yellow-500 transition-all duration-300 "
          style={{
            left: `${activeSection === 0 ? 'calc(0% - 6%)' : activeSection === 1 ? 'calc(50% - 6%)' : 'calc(100% - 6%)'}`,
          }}
        ></div>
        <div
          ref={refbar}
          className="h-1 bg-white transition-all duration-75 absolute bottom-0 left-0"
          style={{ width: '0%' }}
        ></div>
        <div
          className="h-1 bg-white/30 transition-all duration-75 absolute bottom-0 left-0"
          style={{ width: '100%' }}
        ></div>
      </div>
    </div>
  );
}
