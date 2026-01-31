import React from "react";
import Container from "../components/Container";

import pharmaciesImg from "../Assets/pharmacies3.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const InvestmentOpportunities = () => {
  // Parallax effect for hero image
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 400], [0, 80]);

  return (
    <div>
      {/* Hero Section with parallax, animated border, and text effects */}
      <div className="relative w-full h-[480px] md:h-[600px] flex items-center justify-center overflow-hidden" ref={heroRef}>
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: yHero }}
        >
          <img
            src={pharmaciesImg}
            alt="Investment Opportunities"
            className="w-full h-full object-cover object-center"
            style={{ filter: "brightness(0.75)" }}
          />
        </motion.div>
        {/* Animated gradient border */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-10 rounded-b-[2.5rem] border-b-[12px] border-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, borderColor: ["#facc15", "#fde68a", "#facc15"] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          style={{ borderImage: "linear-gradient(90deg,#facc15,#fde68a,#facc15) 1" }}
        />
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="relative z-20 text-center"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-tight mb-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Investment Opportunities
          </motion.h1>
          <motion.div
            className="mx-auto w-24 h-1 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 rounded-full mb-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
            style={{ originX: 0.5 }}
          />
          <motion.p
            className="text-lg md:text-2xl text-yellow-100 font-medium drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
          >
            Discover curated projects and smart ways to invest in your future
          </motion.p>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-0" />
      </div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          {[
            {
              title: "Current Projects",
              content: (
                <p className="text-gray-100 mb-2">Explore our curated selection of investment projects, including villas, apartments, and commercial spaces in high-growth locations. Each project is chosen for its potential, connectivity, and future prospects.</p>
              ),
            },
            {
              title: "Market Trends & Insights",
              content: (
                <p className="text-gray-100 mb-2">Stay ahead with the latest real estate trends, infrastructure developments, and government initiatives that are shaping the region’s investment landscape.</p>
              ),
            },
            {
              title: "Why Invest Here?",
              content: (
                <ul className="list-disc pl-6 text-gray-100 space-y-1">
                  <li>Strategic location with excellent connectivity</li>
                  <li>Rapidly developing infrastructure</li>
                  <li>Strong demand for quality housing and commercial spaces</li>
                  <li>Supportive government policies</li>
                </ul>
              ),
            },
            {
              title: "How to Invest",
              content: (
                <ol className="list-decimal pl-6 text-gray-100 space-y-1">
                  <li>Contact our advisory team for a personalized consultation</li>
                  <li>Choose your preferred project and unit</li>
                  <li>Complete documentation and eligibility checks</li>
                  <li>Finalize your investment and receive regular updates</li>
                </ol>
              ),
            },
            {
              title: "Frequently Asked Questions",
              content: (
                <ul className="text-gray-100 space-y-3">
                  <li><strong>Q:</strong> What documents are required to invest?<br /><strong>A:</strong> Basic KYC, proof of funds, and property registration documents.</li>
                  <li><strong>Q:</strong> Can NRIs invest?<br /><strong>A:</strong> Yes, we offer full support for NRI investors (see below).</li>
                  <li><strong>Q:</strong> What is the minimum investment amount?<br /><strong>A:</strong> Please contact us for project-specific details.</li>
                </ul>
              ),
            },
            {
              title: "Risk Factors & Mitigation",
              content: (
                <p className="text-gray-100 mb-2">We conduct thorough due diligence on all projects, ensure legal compliance, and provide transparent documentation to minimize risks for our investors.</p>
              ),
            },
            {
              title: "NRI Investment Support",
              content: (
                <p className="text-gray-100 mb-2">Our team assists NRIs with every step, from documentation to repatriation of funds, ensuring a smooth and compliant investment process.</p>
              ),
            },
            {
              title: "Investment Tips",
              content: (
                <ul className="list-disc pl-6 text-gray-100 space-y-1">
                  <li>Research the location and project developer</li>
                  <li>Understand all legal and financial obligations</li>
                  <li>Consult with our experts for personalized advice</li>
                  <li>Keep documentation organized and up to date</li>
                </ul>
              ),
            },
          ].map((section, idx) => (
            <motion.section
              key={section.title}
              className="bg-[#181818] rounded-2xl shadow-xl p-8 border border-yellow-900/30 hover:shadow-2xl hover:scale-[1.025] transition-all duration-300 group relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 * idx }}
            >
              {/* Animated border effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none z-0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 0.6 }}
                style={{
                  background: "linear-gradient(120deg,rgba(250,204,21,0.18),rgba(253,230,138,0.12),rgba(250,204,21,0.18))",
                  border: "2px solid transparent"
                }}
              />
              <motion.h2
                className="text-2xl font-bold mb-4 text-yellow-600 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + 0.15 * idx, duration: 0.5 }}
              >
                {section.title}
              </motion.h2>
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + 0.15 * idx, duration: 0.5 }}
              >
                {section.content}
              </motion.div>
            </motion.section>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default InvestmentOpportunities;
