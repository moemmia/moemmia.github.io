import { useEffect, useRef } from "react";

export function DosGameWindow() {
  const containerRef = useRef(null);
  const dosRef = useRef(null);

  useEffect(() => {
    (async () => {
      if (containerRef.current && !dosRef.current && window.Dos) {
        const dos = await window.Dos(containerRef.current, {
          wdosboxUrl: 'https://js-dos.com/wasm/js-dos-api.json',
          url: 'https://v8.js-dos.com/bundles/doom.jsdos',
          // renderAspect: 'Fit',
          autoStart: true,
          kiosk: true,
          backendLocked: true,
          renderBackend: 'canvas',
        });
        dosRef.current = dos;
      }
    })();

    return () => {
      if (dosRef.current) {
        dosRef.current.stop();
        dosRef.current = null;
      }
    };
  }, []);

  return (
    <div style={{ background: 'black', width: '420px', aspectRatio: '1/1'}}>
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}
