import { clientTestimonialsData } from "../data/data";
import Container from "./Container";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function useCountUp(target, duration = 1.2) {
  const [count, setCount] = useState(0);
  const start = useRef(null);
  useEffect(() => {
    let frame;
    function animate(ts) {
      if (!start.current) start.current = ts;
      const progress = Math.min((ts - start.current) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
      else setCount(target);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);
  return count;
}

function StatBlock({ el, idx }) {
  // Always call the hook, even if not a number
  const count = useCountUp(Number(el.number) || 0, 1.2 + idx * 0.3);
  const isNumber = !isNaN(Number(el.number));
  return (
    <motion.div
      className="flex-1 flex flex-col items-center text-center px-6 min-w-[220px] max-w-[340px] mx-auto group"
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, delay: idx * 0.22, ease: "easeOut" }}
      whileHover={{ scale: 1.045, boxShadow: "0 0 32px 0 #FFD70055, 0 2px 24px 0 #0008" }}
      style={{ minHeight: 200, justifyContent: "center", background: "rgba(30,30,30,0.92)", borderRadius: 18, border: "1.5px solid #FFD70022", position: "relative", overflow: "hidden" }}
    >
      <motion.h2
        className="text-5xl font-extrabold mb-2"
        initial={{ letterSpacing: "0.1em" }}
        animate={{ letterSpacing: "0.18em" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{ lineHeight: 1.1,
          background: "linear-gradient(90deg,#FFD700 30%,#fff7 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter: "drop-shadow(0 2px 8px #FFD70044)"
        }}
      >
        {isNumber ? count : el.number}
      </motion.h2>
      <p className="uppercase text-lg font-semibold mb-2 tracking-wide"
         style={{
           background: "linear-gradient(90deg,#FFD700 40%,#fff7 100%)",
           WebkitBackgroundClip: "text",
           WebkitTextFillColor: "transparent",
           letterSpacing: "0.08em"
         }}>
        {el.title}
      </p>
      <motion.div
        className="w-10 h-1 rounded-full mb-3"
        initial={{ opacity: 0, scaleX: 0.2 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.1, delay: 0.3 + idx * 0.18, ease: "easeOut" }}
        style={{
          background: "radial-gradient(circle,#FFD700 60%,#fff0 100%)",
          boxShadow: "0 0 16px 2px #FFD70055"
        }}
      />
      <div className="text-base text-gray-200 leading-snug font-medium" style={{ minHeight: 48, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {el.description}
      </div>
    </motion.div>
  );
}


function ClientTestimonials() {
  return (
    <div className="bg-secondary text-white py-[100px]">
      <Container>
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 lg:gap-0 w-full max-w-[1400px] mx-auto relative">
          {clientTestimonialsData.map((el, idx) => (
            <>
              <StatBlock el={el} idx={idx} key={el.id} />
              {idx !== clientTestimonialsData.length - 1 && (
                <div
                  className="hidden lg:block h-[120px] w-[2px] mx-2 my-auto"
                  style={{ background: "linear-gradient(180deg,#FFD700 0%,#FFD70044 100%)", borderRadius: 2, boxShadow: "0 0 12px #FFD70033" }}
                />
              )}
            </>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default ClientTestimonials;
