import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { projectsData } from "../../data/data";

// No highlight, just plain text for clarity
function HighlightWave({ text, className, color = undefined }) {
  return (
    <span
      className={className}
      style={{
        color: color || undefined,
        fontWeight: 700,
        borderRadius: 4,
        padding: "0 2px"
      }}
    >
      {text}
    </span>
  );
}

function HeroSection() {
  // Calm crossfade image slider, text always visible
  const [imageIndex, setImageIndex] = useState(0);
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, margin: "-100px" });

  // Auto-advance images every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Calm crossfade background images */}
      <AnimatePresence initial={false}>
        <motion.div
          key={imageIndex}
          className="absolute left-0 top-0 w-full h-full z-0 bg-cover"
          style={{
            backgroundImage: `url(${projectsData[imageIndex].image})`,
            backgroundPosition: "60%",
            backgroundSize: "cover",
            filter: "brightness(0.7)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
      </AnimatePresence>
      <div className="absolute left-0 top-0 w-full h-full bg-[#00000080] z-10"></div>
      <section className="h-[calc(100vh-80px)] relative z-20 flex items-end justify-end">
        <div className="container mx-auto px-[10px] w-full flex flex-row items-end justify-end">
          {/* ...existing code... */}
        </div>
        {/* Content (headline/subheadline always visible) */}
        <div
          ref={contentRef}
          className="absolute left-0 top-0 w-full h-full flex items-center justify-center flex-col text-center p-[20px] uppercase md:gap-[20px] gap-[10px] z-30"
        >
          <h2
            className="md:text-7xl sm:text-4xl text-lg font-bold drop-shadow-lg"
            style={{ lineHeight: 1.1, color: '#FFD700', textShadow: '0 2px 8px #000, 0 1px 2px #000' }}
          >
            Crafting Private Villa Living
          </h2>
          <p className="sm:text-base text-xs mt-2 font-normal" style={{ color: '#f7f7f7', textShadow: '0 2px 8px #000, 0 1px 2px #000', letterSpacing: '0.04em' }}>
            Exclusive bungalow developments in Shahpur, Kasara, and Igatpuri — designed for privacy, comfort, and timeless living.
          </p>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
