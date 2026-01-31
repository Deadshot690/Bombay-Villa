import { useState, useEffect, useRef } from "react";
import { useMotionValue, useTransform, motion, AnimatePresence, useInView, useAnimation } from "framer-motion";
import { projectsData } from "../../data/data";
function HighlightWave({ text, className }) {
  // Animate a background gradient from right to left, very slow
  const controls = useAnimation();
  const ref = useRef();
  useEffect(() => {
    controls.start({
      backgroundPosition: ["200% 0%", "-200% 0%"], // right to left
      transition: {
        backgroundPosition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 7, // much slower
          ease: "linear"
        }
      }
    });
  }, [controls]);
  return (
    <motion.span
      ref={ref}
      className={className}
      style={{
        display: "inline-block",
        background: "linear-gradient(90deg, transparent 0%, #FFD700 30%, #FFD700 70%, transparent 100%)",
        backgroundSize: "200% 100%",
        backgroundRepeat: "no-repeat",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: 700,
        borderRadius: 4,
        padding: "0 2px"
      }}
      animate={controls}
    >
      {text}
    </motion.span>
  );
}

function HeroSection() {
  const [imageIndex, setImageIndex] = useState(0);
  const [transitionType, setTransitionType] = useState("fade");

  // Helper to get a random transition name
  const getRandomTransition = () => {
    const names = transitions.map(t => t.name);
    let next;
    do {
      next = names[Math.floor(Math.random() * names.length)];
    } while (next === transitionType && names.length > 1); // avoid repeat
    return next;
  };

  // Auto-advance images every 5 seconds with random effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTransitionType(getRandomTransition());
      setImageIndex(prev => (prev === projectsData.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, [transitionType]);
    const contentRef = useRef(null);
    const isInView = useInView(contentRef, { once: true, margin: "-100px" });
  // Parallax motion values
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const parallaxX = useTransform(mouseX, [0, 1], ["-2vw", "2vw"]);
  const parallaxY = useTransform(mouseY, [0, 1], ["-1vw", "1vw"]);
  // Transitions array
  const transitions = [
    {
      name: "fade",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 1.2, ease: "easeInOut" },
    },
    {
      name: "slide-left",
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -100 },
      transition: { duration: 1.1, ease: "easeInOut" },
    },
    {
      name: "slide-right",
      initial: { opacity: 0, x: -100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 100 },
      transition: { duration: 1.1, ease: "easeInOut" },
    },
    {
      name: "zoom",
      initial: { opacity: 0, scale: 1.2 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
      transition: { duration: 1.2, ease: "easeInOut" },
    },
    {
      name: "rotate",
      initial: { opacity: 0, rotate: 10, scale: 1.1 },
      animate: { opacity: 1, rotate: 0, scale: 1 },
      exit: { opacity: 0, rotate: -10, scale: 0.95 },
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  ];
  // Mouse move parallax handler
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    mouseX.set(x);
    mouseY.set(y);
  };
  // Navigation handlers
  const handlePrev = () => {
    setImageIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setImageIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };
  return (
    <div
      className="min-h-screen text-white relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0.5); mouseY.set(0.5); }}
    >
      {/* Animated crossfade background images */}
      <AnimatePresence initial={false}>
        <motion.div
          key={imageIndex}
          className="absolute left-0 top-0 w-full h-full z-0 bg-cover"
          style={{
            backgroundImage: `url(${projectsData[imageIndex].image})`,
            backgroundPosition: "60%",
            backgroundSize: "cover",
            filter: "brightness(0.7)",
            x: parallaxX,
            y: parallaxY,
          }}
          initial={transitions.find(t => t.name === transitionType)?.initial || transitions[0].initial}
          animate={{ ...(transitions.find(t => t.name === transitionType)?.animate || transitions[0].animate), scale: 1.08 }}
          exit={transitions.find(t => t.name === transitionType)?.exit || transitions[0].exit}
          transition={transitions.find(t => t.name === transitionType)?.transition || transitions[0].transition}
        />
      </AnimatePresence>
      {/* Animated overlay gradient/light ray */}
      <motion.div
        className="absolute left-0 top-0 w-full h-full pointer-events-none z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2, delay: 0.5 }}
        style={{
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.35) 100%)",
        }}
      />
      <div className="absolute left-0 top-0 w-full h-full bg-[#00000080] z-10"></div>
      <section className="h-[calc(100vh-80px)] relative z-20 flex items-end justify-end">
        <div className="container mx-auto px-[10px] w-full flex flex-row items-end justify-end">
          {/* ...existing code... */}
        </div>
        {/* Content (headline/subheadline animate only once, not per image) */}
        <div
          ref={contentRef}
          className="absolute left-0 top-0 w-full h-full flex items-center justify-center flex-col text-center p-[20px] uppercase md:gap-[20px] gap-[10px] z-30"
        >
          <motion.h2
            className="md:text-7xl sm:text-4xl text-lg font-bold drop-shadow-lg"
            style={{ lineHeight: 1.1 }}
            initial={{ opacity: 0, rotate: -8, scale: 0.7 }}
            animate={isInView ? { opacity: 1, rotate: 0, scale: 1 } : {} }
            transition={{ duration: 1.1, delay: 0.45, type: "spring", stiffness: 120 }}
          >
            <HighlightWave text="Crafting Private Villa Living" />
          </motion.h2>
          <motion.p
            className="sm:text-base text-xs mt-2"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {} }
            transition={{ duration: 0.9, delay: 0.2, type: "spring", stiffness: 80 }}
          >
            <HighlightWave text="Exclusive bungalow developments in Shahpur, Kasara, and Igatpuri — designed for privacy, comfort, and timeless living." className="inline" />
          </motion.p>
        </div>
      </section>
      {/* Floating animated element: God-like light ray */}
      <motion.div
        className="absolute left-1/2 top-0 w-[60vw] h-[60vh] pointer-events-none"
        style={{
          transform: "translateX(-50%)",
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.01) 80%)",
          filter: "blur(32px)",
          zIndex: 2,
        }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ duration: 2.5, delay: 1.2 }}
      ></motion.div>
    </div>
  );
}

export default HeroSection;
