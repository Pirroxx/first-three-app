// components/ThreeCanvas.js
"use client";

import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

export default function ThreeCanvas() {
  return (
    <Canvas
      camera={{
        fov: 84,
        position: [0, 0, 3],
      }}
    >
      <Experience />
    </Canvas>
  );
}
