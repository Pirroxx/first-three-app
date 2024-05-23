"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Canvas } from "@react-three/fiber";
import styles from "./page.module.css";
import React from "react";
import ThreeCanvas from "@/components/ThreeCanvas";
import WelcomeTxt from "@/components/WelcomeTxt";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Page = () => {
  const welcomeTextRef = useRef(null);
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(
      welcomeTextRef.current,
      {
        duration: 4.3,
        onStart: () => {
          canvasRef.current.style.display = "none";
        },
        onComplete: () => {
          // Move the welcomeTextRef component up slowly
          gsap.to(welcomeTextRef.current, {
            y: "-100vh",
            duration: 2,
            ease: "power1.inOut",
            onComplete: () => {
              welcomeTextRef.current.style.display = "none";
              canvasRef.current.style.display = "block";
              // Move the canvasRef component to the position where the welcome text was
              gsap.fromTo(
                canvasRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: "power1.inOut" }
              );
            },
          });
        },
      },
      "+=1"
    );
  }, []);

  return (
    <div className={styles.container}>
      <div ref={welcomeTextRef} className={styles.welcomeText}>
        <WelcomeTxt />
      </div>
      <div ref={canvasRef} className={styles.container}>
        <ThreeCanvas />
      </div>
    </div>
  );
};

export default Page;
