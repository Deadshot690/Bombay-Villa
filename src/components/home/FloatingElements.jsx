import { motion } from "framer-motion";

import { useEffect, useRef, useState } from "react";

// Helper to get a random value in a range
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const ELEMENTS = [
  {
    id: "sparkle",
    size: 24,
    color: "#FFD700",
    shadow: "0 0 32px 8px #FFD70088",
    style: (x, y) => ({
      left: `${x}%`,
      top: `${y}%`,
      background: "radial-gradient(circle, #FFD700 0%, rgba(255,215,0,0.1) 80%)",
      boxShadow: "0 0 32px 8px #FFD70088",
      zIndex: 12,
    }),
  },
  {
    id: "line",
    size: 120,
    color: "#FFD700",
    shadow: "0 0 16px 2px #FFD70055",
    style: (x, y) => ({
      left: `${x}%`,
      top: `${y}%`,
      width: 120,
      height: 4,
      background: "linear-gradient(90deg, #FFD700 0%, rgba(255,215,0,0.1) 100%)",
      boxShadow: "0 0 16px 2px #FFD70055",
      borderRadius: 8,
      zIndex: 12,
    }),
  },
  {
    id: "geo",
    size: 40,
    color: "#FFD700",
    shadow: "none",
    style: (x, y) => ({
      left: `${x}%`,
      top: `${y}%`,
      width: 40,
      height: 40,
      background: "conic-gradient(from 90deg, #FFD700 0%, #fffbe6 100%)",
      borderRadius: "20% 80% 60% 40% / 60% 40% 80% 20%",
      filter: "blur(2px)",
      zIndex: 12,
    }),
  },
  // Cute pastel blue cloud
  {
    id: "cloud",
    size: 48,
    color: "#b3e0ff",
    shadow: "0 0 24px 6px #b3e0ff88",
    style: (x, y) => ({
      left: `${x}%`,
      top: `${y}%`,
      width: 48,
      height: 28,
      background: "#b3e0ff",
      borderRadius: "50% 50% 60% 60% / 60% 60% 80% 80%",
      boxShadow: "12px 0 0 0 #b3e0ff, 24px 0 0 0 #b3e0ff99, 0 0 24px 6px #b3e0ff88",
      zIndex: 12,
      opacity: 0.85,
    }),
  },
  // Cute soft pink heart
  {
    id: "heart",
    size: 32,
    color: "#ffb6c1",
    shadow: "0 0 18px 4px #ffb6c188",
    style: (x, y) => ({
      left: `${x}%`,
      top: `${y}%`,
      width: 32,
      height: 32,
      background: "#ffb6c1",
      zIndex: 12,
      opacity: 0.9,
      clipPath:
        "path('M16 29 C-8 12, 8 -2, 16 8 C24 -2, 40 12, 16 29 Z')",
      boxShadow: "0 0 18px 4px #ffb6c188",
    }),
  },
];

function getRandomDirection() {
  const angle = randomInRange(0, 2 * Math.PI);
  return { dx: Math.cos(angle), dy: Math.sin(angle) };
}

export default function FloatingElements() {
  const [positions, setPositions] = useState(
    ELEMENTS.map(() => ({
      x: randomInRange(10, 80),
      y: randomInRange(10, 70),
      ...getRandomDirection(),
      speed: randomInRange(0.08, 0.18),
    }))
  );
  const requestRef = useRef();

  useEffect(() => {
    function animate() {
      setPositions((prev) =>
        prev.map((pos, i) => {
          let { x, y, dx, dy, speed } = pos;
          x += dx * speed;
          y += dy * speed;
          let bounced = false;
          // Bounce on edges
          if (x < 2 || x > 98) {
            dx = -dx * randomInRange(0.8, 1.2);
            x = Math.max(2, Math.min(x, 98));
            bounced = true;
          }
          if (y < 2 || y > 88) {
            dy = -dy * randomInRange(0.8, 1.2);
            y = Math.max(2, Math.min(y, 88));
            bounced = true;
          }
          // Add a little scale/opacity bounce on collision
          return {
            x,
            y,
            dx,
            dy,
            speed,
            bounce: bounced ? Date.now() : pos.bounce,
          };
        })
      );
      requestRef.current = requestAnimationFrame(animate);
    }
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <>
      {ELEMENTS.map((el, i) => (
        <motion.div
          key={el.id}
          className="absolute pointer-events-none"
          style={{
            position: "absolute",
            width: el.size,
            height: el.id === "line" ? 4 : el.size,
            ...el.style(positions[i]?.x || 50, positions[i]?.y || 50),
          }}
          animate={positions[i]?.bounce ? { scale: [1, 1.25, 1], opacity: [1, 0.7, 1] } : {}}
          transition={positions[i]?.bounce ? { duration: 0.5 } : {}}
        />
      ))}
    </>
  );
}
