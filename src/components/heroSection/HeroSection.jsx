import photo from "../../Assets/heroSection.jpg";
import styles from "./HeroSection.module.css";
import { motion } from "framer-motion";

function HeroSection({ image, page }) {
  return (
    <div
      className={`${styles["hero-section"]} relative md:h-[80vh] h-[60vh] text-white flex items-center justify-center text-center`}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${image || photo})` }}></div>
      <div className="relative z-10">
        <motion.h1
          className="sm:text-5xl text-3xl uppercase font-bold mb-[15px]"
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.18em" }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        >
          {page}
        </motion.h1>
        <p>
          <span className="text-primary">Home</span> {">"} {page}
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
