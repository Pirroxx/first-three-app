import { Canvas } from "@react-three/fiber";
import styles from "./page.module.css";

import React from "react";
import ThreeCanvas from "@/components/ThreeCanvas";

const page = () => {
  return (
    <div className={styles.container}>
      <ThreeCanvas />
    </div>
  );
};

export default page;
