"use client";

import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Bubble } from "./Bubble";
import { OrbitControls } from "@react-three/drei";

export default function ThreeCanvas() {
  return (
    <Canvas
      camera={{
        fov: 64,
        position: [0, 0, 3],
      }}
    >
      <Experience />
    </Canvas>
  );
}
