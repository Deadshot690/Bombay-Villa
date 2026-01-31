import { MdOutlineArrowRightAlt } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

function Button({ children }) {
  const [ripple, setRipple] = useState(null);
  const btnRef = useRef();

  function handleClick(e) {
    const rect = btnRef.current.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    setRipple({ x, y, size, key: Date.now() });
    setTimeout(() => setRipple(null), 600);
  }

  return (
    <motion.button
      ref={btnRef}
      onClick={handleClick}
      whileHover={{
        boxShadow: "0 0 32px 8px #FFD700, 0 0 64px 16px #fffbe6",
        scale: 1.06,
        background: "linear-gradient(90deg, #fffbe6 0%, #FFD700 100%)",
        borderColor: "#FFD700",
        color: "#222",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="main-btn relative bg-transparent sm:py-[10px] sm:px-[30px] py-[7px] px-[20px] border-[2px] border-primary text-sm font-medium flex items-center gap-[5px] overflow-hidden rounded-full focus:outline-none"
      style={{
        transition: "all 300ms cubic-bezier(.4,2,.3,1)",
        zIndex: 1,
        borderColor: "#FFD700",
        color: "#FFD700",
        boxShadow: "0 0 16px 2px #FFD70055",
        background: "rgba(255,255,255,0.01)",
      }}
    >
      {/* Animated shimmer */}
      <motion.div
        className="absolute left-0 top-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0.2, x: -60 }}
        animate={{ opacity: [0.2, 0.5, 0.2], x: [0, 60, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        style={{
          background: "linear-gradient(120deg, transparent 60%, #fffbe6 80%, transparent 100%)",
          filter: "blur(2px)",
        }}
      />
      {/* Ripple effect */}
      <AnimatePresence>
        {ripple && (
          <motion.span
            key={ripple.key}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
              background: "rgba(255, 215, 0, 0.25)",
              zIndex: 2,
            }}
            initial={{ scale: 0, opacity: 0.7 }}
            animate={{ scale: 2.2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>
      {/* Button content */}
      <span className="relative z-10 flex items-center gap-[5px]">
        {children}
        <MdOutlineArrowRightAlt className="text-xl ml-1" />
      </span>
    </motion.button>
  );
}

export default Button;
