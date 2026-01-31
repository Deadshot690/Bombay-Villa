import { motion } from "framer-motion";

export default function FloatingClouds() {
  // You can add more clouds or shapes for more depth
  return (
    <>
      <motion.svg
        width="180" height="60" viewBox="0 0 180 60"
        style={{ position: 'absolute', top: '12%', left: '8%', zIndex: 12 }}
        initial={{ x: -40, opacity: 0.7 }}
        animate={{ x: 40, opacity: 1 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <ellipse cx="90" cy="30" rx="80" ry="22" fill="#fff" fillOpacity="0.13" />
        <ellipse cx="60" cy="30" rx="30" ry="15" fill="#fff" fillOpacity="0.18" />
        <ellipse cx="120" cy="30" rx="25" ry="12" fill="#fff" fillOpacity="0.15" />
      </motion.svg>
      <motion.svg
        width="120" height="40" viewBox="0 0 120 40"
        style={{ position: 'absolute', top: '30%', right: '10%', zIndex: 12 }}
        initial={{ x: 30, opacity: 0.7 }}
        animate={{ x: -30, opacity: 1 }}
        transition={{ duration: 16, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <ellipse cx="60" cy="20" rx="50" ry="14" fill="#fff" fillOpacity="0.10" />
        <ellipse cx="90" cy="20" rx="20" ry="8" fill="#fff" fillOpacity="0.13" />
      </motion.svg>
    </>
  );
}
