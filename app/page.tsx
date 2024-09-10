"use client";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <section id="about" className="w-full min-h-screen pb-10">
        <About />
      </section>
      <section id="projects" className="w-full min-h-screen pb-10 px-4">
        <Projects />
      </section>
      <section id="contact" className="w-full">
        <Contact />
      </section>
    </main>
  );
}
