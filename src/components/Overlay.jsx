import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex items-center justify-center">
        <div className="max-w-[31rem] w-full  ">
          <div className="bg-gray-800 bg-opacity-70 rounded-md px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen text-white">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Hello, I'm Gent Hulaj
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg">
            Welcome to Three js Project
          </p>
          <p className="mt-3 text-sm sm:text-base md:text-lg">I know:</p>
          <ul className="leading-7 sm:leading-8 md:leading-9">
            <li>🧑‍💻 How to code</li>
            <li>🧑‍🏫 How to learn</li>
            <li>📦 How to deliver</li>
          </ul>
          <p className="animate-bounce mt-6 text-base sm:text-lg md:text-xl">
            ↓
          </p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Here are my skillsets 🔥
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg">
            PS: I never test
          </p>
          <ul className="leading-7 sm:leading-8 md:leading-9">
            <li>ReactJS</li>
            <li>Tailwind</li>
            <li>ThreeJS</li>
            <li>GraphQL</li>
            <li>Git</li>
            <li>GSAP</li>
          </ul>
          <p className="animate-bounce mt-6 text-base sm:text-lg md:text-xl">
            ↓
          </p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            🤙 Call me maybe?
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg">
            I'm very expensive but you won't regret it
          </p>
          <p className="mt-6 p-3 bg-white bg-opacity-70 text-black rounded text-sm sm:text-base md:text-lg">
            📞 <a href="tel:(+383) 49-702-694">(+383) 49-702-694</a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
