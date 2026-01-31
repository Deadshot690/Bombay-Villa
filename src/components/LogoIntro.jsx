import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/logo.png";

export default function LogoIntro({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onFinish) onFinish();
    }, 2200); // Animation duration + buffer
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="logo-intro"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "#111",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.img
            src={logo}
            alt="logo intro"
            layoutId="site-logo"
            initial={{ scale: 0.5, opacity: 0, rotate: -30 }}
            animate={{ scale: 1.2, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.3, opacity: 0.7, y: -40 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ width: 340, filter: "drop-shadow(0 0 32px #fff8)" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
