import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

import { useTranslation } from 'react-i18next';

import LanguageSwitcher from './LanguageSwitcher';

export function Front() {
  const { t } = useTranslation();

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
      <div
        ref={ref1}
        className="absolute top-8 w-full flex flex-col items-center transition-opacity duration-500"
      >
        <div className="absolute top-0 right-7 m-0 z-20 pointer-events-auto">
          <LanguageSwitcher />
        </div>

        <div className="ring ring-white/50 bg-black px-3 py-2 mb-3">
          <p className="text-white text-base sm:text-3xl font-mono">{t('main.name')}</p>
        </div>
        <div className="ring ring-white/50 bg-black px-3 py-2 mb-3">
          <p className="text-white text-xs sm:text-xl font-mono">{t('main.title')}</p>
        </div>
        <section className="scroller">
          <span className="scroll-icon">
            <span className="scroll-icon__wheel-outer">
              <span className="scroll-icon__wheel-inner"></span>
            </span>
          </span>
          <p className="text-black font-bold text-center pt-1 font-mono text-xs">
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
