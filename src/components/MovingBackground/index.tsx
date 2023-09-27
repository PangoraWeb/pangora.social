"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MovingBackground() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    if (typeof window !== "undefined") {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    } else {
      return {
        width: 0,
        height: 0,
      };
    }
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <motion.div
      className="fixed bg-gradient-to-br from-teal-950 to-fuchsia-950 via-black w-[200%] h-screen"
      animate={{ x: [0, -screenSize.width, 0], scale: [1, 2, 1] }}
      transition={{ repeat: Infinity, duration: 10 }}
    ></motion.div>
  );
}
