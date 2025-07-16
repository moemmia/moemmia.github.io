import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function Front() {
  const scroll = useScroll();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

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
  });

  return (
        <div className="w-[100svw] h-[100svh] relative overflow-hidden">
          <div ref={ref1} className="absolute top-16 w-full flex flex-col items-center transition-opacity duration-500">
            <div className="ring ring-white/50 bg-black px-3 py-2 mb-3">
              <p className="text-white text-base sm:text-3xl font-mono">
                Moisés Muñiz Mangas
              </p>
            </div>
            <div className="ring ring-white/50 bg-black px-3 py-2 mb-3">
              <p className="text-white text-xs sm:text-xl font-mono">
                Software Engineer
              </p>
            </div>
          </div>

          <div ref={ref2} className="absolute top-1/4 w-full flex justify-center transition-opacity duration-500">
            
          </div>

          <div ref={ref3} className="absolute top-1/4 w-full flex justify-center transition-opacity duration-500">
            
          </div>
        </div>
  );
}
