import { motion } from "framer-motion";
const mascotImg = "/images/Moscot-removebg-preview.png";

import { useEffect, useState } from "react";

export default function Mascot() {
  const [attention, setAttention] = useState(false);

  // Periodically trigger an attention-seeking shake
  useEffect(() => {
    const interval = setInterval(() => {
      setAttention(true);
      setTimeout(() => setAttention(false), 900);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-[1000] cursor-pointer select-none"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.12, rotate: [0, 10, -10, 0] }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      style={{ width: 90, height: 140 }}
      title="Say hi!"
    >
      <motion.img
        src={mascotImg}
        alt="Mascot"
        draggable={false}
        style={{ width: "100%", height: "100%", userSelect: "none" }}
        animate={
          attention
            ? { y: [0, -18, 0, -8, 0], rotate: [0, 0, 0, 10, -10, 0], scale: [1, 1.08, 1] }
            : { y: [0, -8, 0], rotate: [0, 2, -2, 0], scale: [1, 1.03, 1] }
        }
        transition={
          attention
            ? { duration: 0.9, ease: "easeInOut" }
            : { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
        }
      />
    </motion.div>
  );
}
