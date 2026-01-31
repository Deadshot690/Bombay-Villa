import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { headerData } from "../data/data";
import { MdOutlineDehaze, MdClose } from "react-icons/md";

import logo from "/logo.png";
import { motion, AnimatePresence } from "framer-motion";


function Header() {
    // Theme removed
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggleHeader = () => {
    setIsActive((prevState) => !prevState);
  };

  const handleCloseHeader = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Check if the user has scrolled past a certain threshold (e.g., 50px)
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`h-[80px] w-full fixed z-50 flex items-center ${
        !isScrolled && "border-b"
      }  border-[#b9bbbd] ${
        isScrolled || isActive ? "bg-secondary" : "md:bg-transparent"
      } bg-[#0d0d0d] text-[#f7f7f7]`}
    >
      <div className="container relative mx-auto px-[20px] flex items-center justify-between">
        <div>
          <Link to={"/"}>
            <AnimatePresence>
              <motion.div
                key={window.location.pathname}
                initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: 30 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{ position: "relative", display: "inline-block" }}
              >
                <img src={logo} alt="new capital logo" className="w-[110px]" />
                {/* Light sweep effect */}
                <motion.div
                  initial={{ left: "-80%", opacity: 0 }}
                  animate={{ left: "120%", opacity: [0, 0.8, 0] }}
                  transition={{ duration: 1.1, delay: 0.3 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "40%",
                    height: "100%",
                    background: "linear-gradient(120deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.1) 100%)",
                    filter: "blur(6px)",
                    pointerEvents: "none",
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </Link>
        </div>
        <ul
          className={`header-links flex items-center justify-center md:flex-row flex-col gap-[40px] uppercase bg-secondary
         md:bg-transparent md:static fixed top-[80px] md:h-auto h-[calc(100vh-80px)] md:w-auto ${
           isActive ? "w-full right-0" : "right-[-400px]"
         } z-50`}>
          {headerData.map((l) => {
            return (
              <li key={l.id}>
                <NavLink
                  to={l.to}
                  onClick={handleCloseHeader}
                  className="relative hover:text-primary transition-all ease-in-out">
                  {l.title}
                </NavLink>
              </li>
            );
          })}
          {/* Gallery Button */}
          <li>
            <NavLink
              to="/gallery"
              onClick={handleCloseHeader}
              className="relative hover:text-primary transition-all ease-in-out uppercase text-base ml-2"
              style={{ letterSpacing: '0.1em' }}
            >
              Gallery
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          {/* Mobile menu toggle */}
          <div className="md:hidden block" onClick={handleToggleHeader}>
            {isActive ? (
              <MdClose className="text-xl cursor-pointer" />
            ) : (
              <MdOutlineDehaze className="text-xl cursor-pointer" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
