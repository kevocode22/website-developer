import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import userData from "@/constants/data";

export default function About() {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="flex flex-col items-center justify-center py-20 px-7"
    >
      <motion.h3
        variants={itemVariants}
        className="text-4xl w-full sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-gray-200 to-neutral-950 py-8 mb-12 text-center dark:(from-neutral-100 text-center)"
      >
        About Me
      </motion.h3>

      <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="w-full lg:w-2/3">
          <motion.p
            variants={itemVariants}
            className="text-lg lg:text-xl space-y-6 text-gray-900 leading-relaxed dark:text-gray-200"
            dangerouslySetInnerHTML={{
              __html: userData.about.description[0],
            }}
          ></motion.p>
        </motion.div>

        <motion.div variants={itemVariants} className="lg:w-1/3">
          <div className="relative w-[300px] h-[300px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-violet-400 to-sky-300 blur-lg opacity-75 scale-[0.85]"></div>
            <Image
              src={"/Profile.png"}
              alt="Profile Picture"
              className="relative z-10 rounded-full"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className="flex flex-row space-x-2 justify-center mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-90deg-up"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
              />
            </svg>
            <p className="font-sans text-md underline decoration-sky-700 decoration-2 -rotate-6">
              {"That's me"}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
