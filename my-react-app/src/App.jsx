import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText"; // Requires Club GSAP membership
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
gsap.registerPlugin(useGSAP, ScrollTrigger);
// gsap.registerPlugin(SplitText);

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-dvh bg-black"></div>
    </main>
  );
}
