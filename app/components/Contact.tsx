import { BackgroundBeams } from "./ui/background-beams";

import { useEffect, useState } from "react";
import userData from "@/constants/data";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { HoverBorderGradient } from "./ui/border-gradient";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  const email = "ocampokevin14@gmail.com";
  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (isInView) {
      animate(
        "p, button",
        {
          opacity: [0, 1],
          y: [50, 0],
          scale: [0.9, 1],
        },
        {
          duration: 0.8,
          delay: stagger(0.2),
          ease: [0.175, 0.885, 0.32, 1.275], // Efecto de rebote suave
        }
      );
    }
  }, [isInView, animate]);

  return (
    <section className="h-screen w-full bg-gradient-to-b from-gray-900 to-gray-950 relative flex flex-col items-center justify-center text-center">
      <h3 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 dark:(from-neutral-100 text-center)">
        Contact
      </h3>
      <motion.div ref={scope}>
        <p className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-200 dark:text-white font-sans pb-2">
          Get in touch (Click to copy){"  "}
        </p>
        <button
          onClick={copyEmail}
          className="text-xl relative z-20 md:text-4xl lg:text-5xl font-bold text-white dark:text-white font-sans tracking-tight"
        >
          {copied ? "Email Copied!" : "ocampokevin14@gmail.com"}
        </button>
      </motion.div>

      <BackgroundBeams />

      <div className="pt-10 flex justify-center text-center items-center gap-4">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <a href={userData.socialLinks.linkedin} target="_blank">
            Linkedin
          </a>
        </HoverBorderGradient>
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <a href={userData.socialLinks.github} target="_blank">
            Github
          </a>
        </HoverBorderGradient>
      </div>
    </section>
  );
}
