import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const WelcomeTxt = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const text = textRef.current;
    tl.fromTo(
      text.children,
      { opacity: 0 },
      {
        opacity: 1,

        duration: 2,
        stagger: 0.05,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div
      ref={textRef}
      className="min-h-screen flex justify-center items-center text-6xl font-bold text-white"
    >
      {"Oh, look who came! We were expecting you."
        .split("")
        .map((char, index) => (
          <span key={index} className="inline-block m-1">
            {char}
          </span>
        ))}
    </div>
  );
};

export default WelcomeTxt;
