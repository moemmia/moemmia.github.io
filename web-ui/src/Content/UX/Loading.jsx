import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export function Loading({ progress, onStart }) {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(true);
  const [displayProgress, setDisplayProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const initialProgress = displayProgress;
    const duration = 500;

    let animationFrame;
    const animate = time => {
      const elapsed = time - start;
      const progressRatio = Math.min(elapsed / duration, 1);
      const easedRatio = initialProgress + progressRatio * (progress - initialProgress);
      setDisplayProgress(easedRatio);

      if (progressRatio < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [progress]);

  useEffect(() => {
    if (displayProgress >= 100) {
      const timeout = setTimeout(() => setFinished(true), 100);
      return () => clearTimeout(timeout);
    }
  }, [displayProgress]);

  const handleStart = () => {
    setVisible(false);
    if (onStart) onStart();
  };

  return (
    <div
      onClick={finished ? handleStart : undefined}
      className={`absolute top-0 left-0 w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-[#94ab9e] z-[9999] transition-opacity duration-700 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative flex flex-col items-center select-none gap-1">
        {finished && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, -3, 0] }}
            transition={{
              opacity: { duration: 0.5 },
              y: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
            }}
            className="absolute -top-10 flex flex-col items-center"
          >
            <div className="bg-white text-[#08141e] px-4 py-2 rounded-lg relative z-10">
              {t('main.click')}
            </div>
            <div className="w-2 h-2 bg-white rotate-45 -mt-1"></div>
          </motion.div>
        )}

        <div className="w-20 h-20 flex items-center justify-center">
          <img
            src="icons/moet.webp"
            alt="Moi logo"
            className="w-full h-full object-contain pointer-events-none"
          />
        </div>

        <div
          className={`w-20 h-1 mx-20 bg-gray-200 rounded-full overflow-hidden transition-opacity duration-700 ${
            finished ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div
            className="h-full transition-all duration-100 ease-out"
            style={{
              width: `${Math.min(displayProgress, 100)}%`,
              background: '#08141e',
            }}
          />
        </div>
      </div>
    </div>
  );
}
