import { aboutUsData } from "../data/data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "./Button";

function AboutUs() {
  // Professional cards section only
  const cards = [
    {
      title: 'Our Approach',
      content: <>
        <p className="mb-4">We believe in thoughtful, understated design. Each project is shaped by a focus on privacy, calm, and a seamless connection to the landscape.</p>
      </>
    },
    {
      title: 'Values',
      content: <>
        <ul className="list-disc ml-6 mt-2 mb-4">
          <li>Clarity and simplicity in every detail</li>
          <li>Respect for natural surroundings</li>
          <li>Long-term value over trends</li>
          <li>Comfort, privacy, and peace of mind</li>
        </ul>
      </>
    },
    {
      title: 'Development Mindset',
      content: <>
        <p className="mb-4">Our developments are guided by a commitment to quality, careful planning, and a restrained, timeless aesthetic. We aim to create spaces that feel genuine and enduring.</p>
      </>
    }
  ];
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card, idx) => (
        <motion.div
          key={card.title}
          className="bg-gradient-to-br from-[#232323] via-[#282828] to-[#1a1a1a] rounded-3xl shadow-2xl border border-yellow-700 p-8 flex flex-col justify-between min-w-[320px] max-w-[440px] mx-auto"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.1, delay: idx * 0.18, ease: "easeInOut" }}
          whileHover={{ scale: 1.07, boxShadow: "0 8px 32px 0 #FFD70033" }}
        >
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.2 + idx * 0.1, ease: 'easeOut' }}
            className={
              card.title === 'Why Bombay Villa Advisory'
                ? "text-2xl font-bold mb-2 text-yellow-400"
                : "text-2xl font-bold mb-4 text-yellow-400"
            }
          >{card.title}</motion.h3>
          {card.content}
        </motion.div>
      ))}
    </div>
  );
}

export default AboutUs;
