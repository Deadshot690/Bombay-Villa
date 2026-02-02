import React from "react";
import Container from "../components/Container";
import { motion } from "framer-motion";

// Videos are now in public/images, use direct path


// ...removed image imports, use public/images path instead

const galleryImages = [
  "/images/Apartment.jpg",
  "/images/Bombay-Villa3.JPG",
  "/images/IMG_1007.JPG",
  "/images/IMG_1312.JPG",
  "/images/IMG_1607.JPG",
  "/images/IMG_1634.JPG",
  "/images/IMG_1636.JPG",
  "/images/IMG_20260202_134023.jpg",
  "/images/IMG_20260202_134038.jpg",
  "/images/IMG_20260202_134052.jpg",
  "/images/IMG_4607.JPG",
  "/images/IMG_4931.JPG",
  "/images/IMG_4934_1.JPG",
  "/images/IMG_4974.JPG",
  "/images/I-Bomaby-Villa.JPG",
  "/images/I-Bomaby-Villa1.JPG",
  "/images/I-Bomaby-Villa2.JPG",
  "/images/I-Bomaby-Villa3.JPG",
  "/images/K-Bombay-villa.JPG",
  "/images/img5.jpeg",
  "/images/K-Bombay-Villa2.JPG",
  "/images/IMG_20260202_134038.jpg",
  "/images/New.jpeg",
  "/images/commercial-1.jpg",
  // "/images/email.png", // removed
  // "/images/experience-iconnn.png", // removed
  "/images/hotel-apartment.jpg",
  "/images/img.jpeg",
  "/images/img1.jpeg",
  "/images/img2.jpeg",
  "/images/img3.jpeg",
  "/images/img4.jpeg",
  "/images/img5.jpeg",
  //"/images/investment.jpg",
  // "/images/investment.jpg", // removed
  // "/images/location-1.png", // removed
  //"/images/logo.jpg",
  "/images/main.JPG",
  "/images/medical.jpg",
  "/images/new1.jpeg",
  "/images/new2.jpeg",
  "/images/new3.jpeg",
  "/images/new4.jpeg",
  "/images/new5.jpeg",
  //"/images/office-1.jpg",
  // "/images/phone.png", // removed
  "/images/r1.jpg",
  "/images/r2.jpeg",
  "/images/r3.jpeg",
  "/images/r4.jpeg",
 // "/images/sitevisit.jpg",
  "/images/S-bombay-villa.JPG",
  "/images/v5.jpg",
  "/images/S-Bombay-villa3.JPG",
 // "/images/new2.jpeg",
  // "/images/trust-icon.png", // removed
  "/images/v1.jpeg",
  "/images/v2.jpeg",
  "/images/v3.jpeg",
  "/images/v4.jpeg",
 // "/images/Video1.MP4",
  //"/images/Video2.MP4",
  "/images/villa.jpg",
  "/images/villa1.jpg",
  "/images/villa2.jpeg",
  //"/images/villa3.jpeg",
  "/images/villa4.jpeg",
  "/images/villa5.jpg",
  // "/images/vision.jpg", // removed
  "/images/woman-working-pharmacy-wearing-coat.jpg",
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with looping video, full height */}
      <div className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden border-b-8 border-yellow-400 shadow-2xl">
        <video
          src="/images/Video1.MP4"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-start">
            {/* Mobile phone as first grid item, spanning two rows */}
            <div className="w-full flex justify-center items-start col-span-1">
              <div className="relative w-[260px] h-[520px] bg-[#222] rounded-[40px] shadow-2xl border-4 border-gray-700 flex items-center justify-center">
                {/* iPhone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[18px] bg-black rounded-b-2xl z-20" />
                {/* iPhone screen */}
                <video
                  src="/images/Video2.MP4"
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
                className="rounded-xl overflow-hidden shadow-lg bg-[#181818] border border-yellow-900/30 group w-full h-[320px] md:h-[340px] lg:h-[380px] flex items-center justify-center relative"
                initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                whileHover={{ scale: 1.06, boxShadow: '0 8px 32px #FFD70055', zIndex: 10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.03 * idx, type: 'spring', stiffness: 120 }}
              >
                <motion.img
                  src={img}
                  alt="gallery"
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
