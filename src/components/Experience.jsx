// components/Experience.js
import { OrbitControls, ScrollControls, Sphere } from "@react-three/drei";
import React from "react";
import { Office } from "./Office";
import { Overlay } from "./Overlay";
import { Bubble } from "./Bubble";

const Experience = () => {
  return (
    <>
      <ambientLight intensity={2} />
      {/* Uncomment OrbitControls if you want to enable camera control */}
      {/* <OrbitControls enableZoom={false} /> */}
      <ScrollControls pages={3} damping={0.25}>
        <Overlay />
        <Office />
      </ScrollControls>
    </>
  );
};

export default Experience;
