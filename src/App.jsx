import { Route, Routes, useLocation } from "react-router-dom";
import { About, Contact, Home, NotFound, Projects, Single, Testimonials, InvestmentOpportunities, Gallery } from "./pages";
// Removed unused Shahpur, Kasara, and Igatpuri imports

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useState, useEffect } from "react";
import LogoIntro from "./components/LogoIntro";
import { isDesktopDevice } from "./components/deviceUtils";

import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [introDone, setIntroDone] = useState(false);
  const location = useLocation();

  return (
    <div>
      {/* Removed CustomCursor to restore native cursor */}
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
