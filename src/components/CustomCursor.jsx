import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { isDesktopDevice } from "./deviceUtils";

// Custom cursor component
export default function CustomCursor() {
  const cursorRef = useRef(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Smooth spring for trailing effect
  const springX = useSpring(x, { stiffness: 400, damping: 28 });
  const springY = useSpring(y, { stiffness: 400, damping: 28 });

  useEffect(() => {
    const moveCursor = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [x, y]);

  // Hide default cursor only on desktop devices
  useEffect(() => {
    if (isDesktopDevice()) {
      document.body.style.cursor = "none";
      return () => {
        document.body.style.cursor = "";
      };
    }
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        x: springX,
        y: springY,
        width: 48,
        height: 48,
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "exclusion",
        opacity: 1,
      }}
      animate={{ scale: 1 }}
    >
      {/* Outer animated ring */}
      <motion.div
        className="absolute"
        style={{
          left: 0,
          top: 0,
          width: 48,
          height: 48,
          borderRadius: "50%",
          border: "2.5px solid #FFD700",
          boxShadow: "0 0 32px 8px #FFD70055, 0 0 0 2px #fffbe6",
          opacity: 0.7,
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />
      {/* Inner ring */}
      <div
        className="absolute"
        style={{
          left: 8,
          top: 8,
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "2px dashed #fffbe6",
          opacity: 0.5,
        }}
      />
      {/* Center glowing dot */}
      <motion.div
        className="absolute"
        style={{
          left: 18,
          top: 18,
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: "radial-gradient(circle, #FFD700 60%, #fffbe6 100%)",
          boxShadow: "0 0 16px 4px #FFD70099",
          opacity: 0.95,
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />
    </motion.div>
  );
}
