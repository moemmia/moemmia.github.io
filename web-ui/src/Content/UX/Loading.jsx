import { useEffect, useState } from "react";

export function Loading({ progress }) {
  const [visible, setVisible] = useState(true);
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 1000;

    let animationFrame;
    const animate = (time) => {
      const elapsed = time - start;
      const progressRatio = Math.min(elapsed / duration, 1);
      const easedRatio = progressRatio * (progress / 100);
      setDisplayProgress(easedRatio * 100);

      if (progressRatio < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [progress]);

  useEffect(() => {
    if (displayProgress >= 100) {
      const timeout = setTimeout(() => setVisible(false), 700);
      return () => clearTimeout(timeout);
    }
  }, [displayProgress]);

  return (
    <div
      className={`absolute top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center bg-[#94ab9e] z-[9999] transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center select-none gap-4">
        <div
          className="w-20 h-20 flex items-center justify-center animate-spin"
          style={{ animationDuration: "2s" }}
        >
          <img
            src="icons/moet.webp"
            alt="Moi logo"
            className="w-full h-full object-contain pointer-events-none"
          />
        </div>

        {/* Barra de carga */}
        <div className="w-28 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full transition-all duration-100 ease-out"
            style={{
              width: `${Math.min(displayProgress, 100)}%`,
              background: "#08141e",
            }}
          />
        </div>
      </div>
    </div>
  );
}
