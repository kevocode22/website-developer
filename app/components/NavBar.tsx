"use client";
import { SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import userData from "@/constants/data";
import { motion } from "framer-motion";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "../components/ui/animated-modal";
import ButtonTailwind from "../components/ui/button-tailwind";
export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [clickedLink, setClickedLink] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "My Work" },
    { href: "/#contact", label: "Contact" },
  ];

  const handleLinkClick = (href: any) => {
    setClickedLink(href);
  };

  return (
    <div className="max-w-6xl px-4 py-10 md:py-6 w-full flex flex-col ">
      <div className="flex md:flex-row justify-between items-center">
        <div className="flex flex-col">
          <Link href="/">
            <h1 className="font-bold text-2xl dark:text-gray-100 ">
              {userData.name}
            </h1>
            <p className="text-base font-light text-gray-500 dark:text-gray-300">
              {userData.designation}
            </p>
          </Link>
        </div>

        <div className="space-x-8 hidden md:block">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
            >
              <span
                className={`relative text-base sm:relative  ${
                  pathname === link.href
                    ? "text-gray-800 font-bold dark:text-gray-400"
                    : "text-gray-600 dark:text-gray-300 font-normal"
                }`}
              >
                {link.label}
                {clickedLink === link.href ? (
                  <motion.div
                    className="absolute -bottom-[1px] left-0 right-0 h-[2px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg width="37" height="8" viewBox="0 0 37 8" fill="none">
                      <motion.path
                        d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                        stroke="#0369A1"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{
                          strokeDasharray: 84.20591735839844,
                          strokeDashoffset: 84.20591735839844,
                        }}
                        animate={{
                          strokeDashoffset: 0,
                        }}
                        transition={{
                          duration: 1,
                        }}
                      />
                    </svg>
                  </motion.div>
                ) : null}
              </span>
            </Link>
          ))}
        </div>

        <div className="space-x-4 flex flex-row items-center">
          <a
            href={userData.socialLinks.linkedin}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-linkedin h-5 w-5 hover:scale-125 transition-all"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>
          {/*"Download CV"*/}
          <Modal>
            <ModalTrigger>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                className="hover:scale-125 transition-all"
              >
                <path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z" />
              </svg>
            </ModalTrigger>
            <ModalBody>
              <ModalContent className="w-full flex justify-center items-center">
                <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                  Choose your{" "}
                  <span className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-700 dark:border-neutral-700 border border-gray-200">
                    Language
                  </span>{" "}
                </h4>
                <div className="flex flex-col max-w-28 items-center justify-center gap-y-6">
                  <ButtonTailwind
                    text="Spanish"
                    href="https://drive.google.com/file/d/1DhavziznxLqdWG_Ktj4DxvZ1hVZeoGs5/view"
                    download="Kevin_Ocampo_Full_Stack_Dev_Resume.pdf"
                  />
                  <ButtonTailwind
                    text="English"
                    href="https://drive.google.com/file/d/1yS_VZXbJRVcvzv6lsbpT1mJQgn_kbNEN/view"
                  />
                </div>
              </ModalContent>
            </ModalBody>
          </Modal>

          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-3 rounded focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="space-x-8 block md:hidden mt-4">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <span
              className={`text-base ${
                pathname === link.href
                  ? "text-gray-800 font-bold dark:text-gray-400"
                  : "text-gray-600 dark:text-gray-300 font-normal"
              }`}
            >
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
