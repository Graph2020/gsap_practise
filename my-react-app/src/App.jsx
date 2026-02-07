import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText"; // Requires Club GSAP membership

gsap.registerPlugin(useGSAP, ScrollTrigger);
// gsap.registerPlugin(SplitText);

export default function App() {
  return <div className="flex-center h-[100vh]">App</div>;
}
