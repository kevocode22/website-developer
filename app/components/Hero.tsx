import React, { useEffect } from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { FlipWords } from "./ui/flip-words";
import { stagger, useAnimate, useInView, motion } from "framer-motion";

export default function Hero() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const flipWords = ["inspire", "thrill", "captivate"];

  useEffect(() => {
    if (isInView) {
      animate(
        "h3",
        {
          opacity: [0, 1],
          filter: ["blur(10px)", "blur(0px)"],
        },
        {
          duration: 1.5,
          ease: "easeOut",
        }
      );
    }
  }, [isInView, animate]);

  return (
    <AuroraBackground className="w-full flex justify-center items-center flex-col h-screen">
      <motion.div ref={scope}>
        <h3 className="text-4xl text-nowrap sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 py-8 px-3">
          Software Developer
        </h3>
      </motion.div>

      <div className="w-full">
        <FlipWords words={flipWords} />
      </div>
    </AuroraBackground>
  );
}
