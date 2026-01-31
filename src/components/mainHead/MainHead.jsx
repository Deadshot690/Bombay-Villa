import styles from "./MainHead.module.css";
import { MdLight } from "react-icons/md";
import { motion } from "framer-motion";

function MainHead({ children }) {
  return (
    <motion.h1
      className={`${styles["main-head"]} relative mb-[20px] py-[15px] text-center sm:text-5xl text-3xl uppercase font-bold`}
      initial={{ opacity: 0, letterSpacing: "0.1em" }}
      animate={{ opacity: 1, letterSpacing: "0.18em" }}
      transition={{ duration: 1.6, ease: "easeInOut" }}
    >
      {children}
      <MdLight className="absolute bottom-[-8px] left-[50%] translate-x-[-50%] text-base" />
    </motion.h1>
  );
}

export default MainHead;
