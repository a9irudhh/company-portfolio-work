"use client";

import { TypeAnimation } from "react-type-animation";

export function TypingAnimation() {
  return (
    <TypeAnimation
      sequence={["Go Solar, get smarter", 5000, ""]}
      wrapper="span"
      speed={50}
      className="text-4xl font-bold text-white"
      repeat={Infinity}
    />
  );
}
