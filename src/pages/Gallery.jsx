import React from "react";
import Container from "../components/Container";
import { motion } from "framer-motion";

// Videos
import Video1 from "../Assets/Video1.MP4";
import Video2 from "../Assets/Video2.MP4";

// Images (filtered)
const galleryImages = [
  "administrative4.jpeg",
  "administrative5.jpg",
  "administrative6.jpg",
  "apartemn1.jpg",
  "apartemn2.jpg",
  "apartemn3.jpg",
  "apartemn4.jpeg",
  "apartemn5.jpg",
  "apartemn6.jpeg",
  "Apartment.jpg",
  "commercial-1.jpg",
  "commercial1.jpg",
  "commercial2.jpeg",
  "commercial3.jpg",
  "commercial4.jpg",
  "commercial5.jpg",
  "commercial6.jpeg",
  "heroSection.jpg",
  "hotel-apartment.jpg",
  "I-Bomaby-Villa.JPG",
  "I-Bomaby-Villa1.JPG",
  "I-Bomaby-Villa2.JPG",
  "I-Bomaby-Villa3.JPG",
  "K-Bombay-villa.JPG",
  "K-Bombay-Villa1.JPG",
  "K-Bombay-Villa2.JPG",
  "K-Bombay-Villa3.JPG",
  "medical.jpg",
  "medical1.jpg",
  "medical2.png",
  "medical3.png",
  "medical4.jpg",
  "medical5.jpg",
  "medical6.jpg",
  "new-cairo-city.jpg",
  "newCairo2.jpg",
  "newCairo3.jpg",
  "newCairo5.jpeg",
  "pharmacies1.jpg",
  "pharmacies3.jpg",
  "pharmacies4.jpg",
  "pharmacies5.jpg",
  "pharmacies6.jpg",
  "S-bombay-villa.JPG",
  "S-bombay-villa1.JPG",
  "S-Bombay-villa3.JPG",
  "S-Bombay-villa4.JPG",
  "towe2.jpg",
  "towe3.jpg",
  "tower4.jpg",
  "tower5.jpg",
  "villa.jpg",
  "villa2.jpg",
  "villa4.jpeg",
  "villa5.jpg",
  "woman-working-pharmacy-wearing-coat.jpg"
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with looping video, full height */}
      <div className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden border-b-8 border-yellow-400 shadow-2xl">
        <video
          src={Video1}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover object-center z-0"
          style={{ minHeight: '100%', minWidth: '100%' }}
        />
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-tight mb-2">
            Gallery
          </h1>
          <div className="mx-auto w-24 h-1 bg-yellow-400 rounded-full mb-2" />
          <p className="text-lg md:text-2xl text-yellow-100 font-medium drop-shadow-sm">
            Explore our collection of photos and videos
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-0" />
      </div>
      <Container>
        {/* Mobile and images grid, mobile as first grid item, images start from its right */}
        <div className="w-full mt-12 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-start">
            {/* Mobile phone as first grid item, spanning two rows */}
            <div className="w-full flex justify-center items-start row-span-2 md:row-span-2">
              <div className="relative w-[260px] h-[520px] bg-[#222] rounded-[40px] shadow-2xl border-4 border-gray-700 flex items-center justify-center">
                {/* iPhone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[18px] bg-black rounded-b-2xl z-20" />
                {/* iPhone screen */}
                <video
                  src={Video2}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute top-[32px] left-[16px] w-[228px] h-[456px] rounded-[32px] object-cover z-10"
                  style={{ boxShadow: "0 0 24px #FFD70055" }}
                />
                {/* iPhone border shine */}
                <div className="absolute inset-0 rounded-[40px] border-2 border-yellow-400 pointer-events-none" style={{ boxShadow: "0 0 32px #FFD70033" }} />
              </div>
            </div>
            {/* Images fill the rest of the grid */}
            {galleryImages.map((img, idx) => (
              <motion.div
                key={img}
                className="rounded-xl overflow-hidden shadow-lg bg-[#181818] border border-yellow-900/30 group w-full h-[180px] flex items-center justify-center relative"
                initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                whileHover={{ scale: 1.06, boxShadow: '0 8px 32px #FFD70055', zIndex: 10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.03 * idx, type: 'spring', stiffness: 120 }}
              >
                <motion.img
                  src={`/src/Assets/${img}`}
                  alt={img}
                  className="w-full h-full object-cover transition-all duration-300"
                  loading="lazy"
                  decoding="async"
                  whileHover={{ scale: 1.12, filter: 'brightness(1.15) saturate(1.2) blur(0px)' }}
                  transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                />
                {/* Overlay effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-80 transition-all duration-300 pointer-events-none"
                  whileHover={{ opacity: 0.8 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
