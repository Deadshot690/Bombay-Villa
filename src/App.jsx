import { Route, Routes, useLocation } from "react-router-dom";
import { About, Contact, Home, NotFound, Projects, Single, Testimonials, InvestmentOpportunities, Gallery } from "./pages";
// Removed unused Shahpur, Kasara, and Igatpuri imports

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useState, useEffect } from "react";
import LogoIntro from "./components/LogoIntro";
import CustomCursor from "./components/CustomCursor";
import { isDesktopDevice } from "./components/deviceUtils";

import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [introDone, setIntroDone] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowCursor(isDesktopDevice());
    // Listen for changes in device capabilities (e.g., orientation change, connecting mouse)
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const handler = (e) => setShowCursor(e.matches);
    mq.addEventListener ? mq.addEventListener("change", handler) : mq.addListener(handler);
    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", handler) : mq.removeListener(handler);
    };
  }, []);

  return (
    <div>
      {showCursor && <CustomCursor />}
      <LogoIntro onFinish={() => setIntroDone(true)} />
      <ScrollToTop />
      {/* Hide header and content until intro is done */}
      <div style={{ visibility: introDone ? "visible" : "hidden" }}>
        <Header />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              {/* Removed Shahpur route to restore old routing */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/investment" element={<InvestmentOpportunities />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path={"projects/:id"} element={<Single />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
}

export default App;
