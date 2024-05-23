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
      className="min-h-screen flex justify-center items-center font-bold text-white text-center px-4"
    >
      <div className="lg:text-5xl sm:text-4xl xs:text-2xl w-full sm:w-3/4 xs:w-full">
        {"Oh, look who came! We were expecting you."
          .split("")
          .map((char, index) => (
            <span key={index} className="inline-block m-1">
              {char}
            </span>
          ))}
      </div>
    </div>
  );
};

export default WelcomeTxt;
