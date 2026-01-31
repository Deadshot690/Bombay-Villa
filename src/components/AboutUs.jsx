import { aboutUsData } from "../data/data";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <div className="flex flex-col gap-10 text-white">
      <motion.div
        className="max-w-4xl mx-auto text-center mb-10 px-4 mt-8 md:mt-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.1, ease: 'easeInOut' }}
      >
        <h2
          className="text-2xl md:text-3xl font-bold mb-5 uppercase tracking-wider bg-gradient-to-r from-[#FFD700] via-[#F5C542] to-[#FFD700] bg-clip-text text-transparent drop-shadow-md"
        >
          About Bombay Villa Advisory
        </h2>
        <p className="text-xl md:text-2xl text-gray-100 leading-relaxed font-medium max-w-3xl mx-auto drop-shadow-sm">
          Bombay Villa Advisory focuses on developing thoughtfully planned private bungalows for those who value space, privacy, and long-term living.<br className="hidden md:block" />
          With a refined approach to land selection, design, and execution, we create villa developments that balance lifestyle, nature, and enduring value.
        </p>
      </motion.div>
      <div className="flex text-white md:flex-row flex-col">
        {aboutUsData.map((el, idx) => (
          <motion.div
            key={el.id}
            style={{ background: `${el.bgColor}` }}
            className="text-center sm:px-[50px] sm:py-[70px] p-[30px] flex-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, delay: idx * 0.18, ease: "easeInOut" }}
            whileHover={{ scale: 1.035, boxShadow: "0 8px 32px 0 #FFD70033" }}
          >
            <motion.img
              src={el.image}
              alt={el.description}
              className="mx-auto"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 180, damping: 16 }}
              style={{ willChange: "transform" }}
            />
            <motion.h2
              className="text-2xl font-bold uppercase my-[20px]"
              initial={{ letterSpacing: "0.1em" }}
              animate={{ letterSpacing: "0.18em" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              {el.title}
            </motion.h2>
            <p className="text-gray">{el.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
