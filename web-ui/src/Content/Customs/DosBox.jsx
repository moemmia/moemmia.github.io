import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function useDosTexture(bundleUrl) {
  const [texture, setTexture] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const width = 320;
    const height = 200;

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    canvasRef.current = canvas;

    const rgba = new Uint8ClampedArray(width * height * 4);

    (async () => {
      const bundle = await fetch(bundleUrl);
      const arrayBuffer = await bundle.arrayBuffer();
      const ci = await window.emulators.dosWorker(new Uint8Array(arrayBuffer));

      ci.events().onFrame((rgb: Uint8Array) => {
        for (let i = 0; i < width * height; i++) {
          rgba[i * 4 + 0] = rgb[i * 3 + 0];
          rgba[i * 4 + 1] = rgb[i * 3 + 1];
          rgba[i * 4 + 2] = rgb[i * 3 + 2];
          rgba[i * 4 + 3] = 255;
        }

        if (ctx) {
          ctx.putImageData(new ImageData(rgba, width, height), 0, 0);
        }

        const tex = new THREE.CanvasTexture(canvas);
        tex.minFilter = THREE.NearestFilter;
        tex.magFilter = THREE.NearestFilter;
        tex.wrapS = THREE.ClampToEdgeWrapping 
        tex.wrapT = THREE.ClampToEdgeWrapping 
        tex.needsUpdate = true;
        setTexture(tex);
      });
    })();

    return () => {
      canvasRef.current = null;
    };
  }, [bundleUrl]);

  return texture;
}
