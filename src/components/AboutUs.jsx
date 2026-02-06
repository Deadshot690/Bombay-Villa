import { aboutUsData } from "../data/data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "./Button";

function AboutUs() {
  // Professional cards section only
  const cards = [
    {
      title: 'Customized Villa',
      content: <>
        <p className="mb-4">Our collection of tailor-made villas offers a diverse range of options, from cozy 2 BHK to expansive 5 BHK residences, designed to suit your needs. These villas come in both compact and spacious layouts, ensuring flexibility and comfort. With areas spanning from 550 to 1500 sq.ft., you can find the perfect space that aligns with your preferences.</p>
        <ul className="list-disc ml-6 mt-2 mb-4">
          <li>2 BHK (Compact) and 2 BHK (Spacious)</li>
          <li>3 BHK (Compact) and 3 BHK (Spacious)</li>
          <li>4 BHK (Compact)</li>
          
       <Link to="/contact">
        <Button>Get Details</Button>
       </Link>
          
        </ul>
        <h3 className="text-2xl font-bold mb-4 text-yellow-400 mt-8">Resort Villa</h3>
        <p className="mb-4">Our array of resort villas presents a variety of choices, ranging from 2 to 5 resort rooms, catering to your specific requirements. These villas offer areas spanning from 550 to 1100 sq.ft., providing ample space for your comfort and enjoyment.</p>
        <ul className="list-disc ml-6 mt-2 mb-4">
          <li>Options: 4 / 5 Studio Villa</li>
          <li>Only 8 Resort Villa Available</li>
          
        <Link to="/contact">
        <Button>Get Details</Button>
        </Link>
          
        </ul>
      </>
    },
    {
      title: '50+ Clubhouse Amenities',
      content: <>
        <p className="mb-4">Clubhouse amenities enhance the overall experience for members, providing a place to relax, exercise, socialize, and engage in various activities within a convenient and well-equipped setting.</p>
        <ul className="list-disc ml-6 mt-2 mb-4">
          <li>Pool Table</li>
          <li>Table Tennis</li>
          <li>Carrom Board</li>
          <li>Chess</li>
          <li>Fuss Ball</li>
          <li>Table of Ludo Game</li>
          <li>Badminton</li>
          <li>Box Cricket</li>
          <li>Utility Shop</li>
          <li>Wedding/Party Lawn</li>
          <li>Volley Ball</li>
          <li>Kids Play Area*</li>
          <li>Basket Ball</li>
          <li>Gym</li>
          <li>Archery</li>
          <li>Table of Snake Ladder Game</li>
          <li>Party Hall</li>
          <li>Private Pool</li>
          <li>Food Court</li>
          <li>Lawn Area</li>
          <li>River facing views</li>
          <li>Machan</li>
          <li>Car Parking</li>
          <li>Electricity</li>
          <li>24/7 water supply</li>
          <li>Mini Theatre</li>
        </ul>
      </>
    },
    {
      title: 'Why Bombay Villa Advisory',
      content: <ul className="list-disc ml-6 mt-2 mb-4">
        <li>2 Spectacular Location</li>
        <li>Full Customization of Villa Design</li>
        <li>Property starts from just 99 Lacs</li>
        <li>Shahpur is river touch</li>
        <li>Kasara is mountain touch</li>
        <li>Easy payment plan</li>
        <li>All villas with private Swimming Pool</li>
        <li>ROI upto 12% Fixed monthly rental plan</li>
        <li>Guaranteed Capital Growth till possession</li>
        <li>No Maintenance</li>
        <li>Easy way to start your own Holiday Company</li>
        <li>Tax benefits & deductions</li>
        <li>Open amenities & club house</li>
        <li>Customer service is just phone call away</li>
        <li>Housekeeping services available</li>
        <li>Gated community</li>
        <li>24/7 Security & CCTV Surveillance</li>
        <li>Dedicated Parking for Every Villa</li>
        <li>High Rental Yield Potential</li>
        <li>Eco-friendly & Sustainable Design</li>
        <li>Proximity to Major Highways & Transit</li>
        <li>On-site Maintenance & Support Team</li>
        {/* 7 new points */}
        <li>Exclusive access to premium events & gatherings</li>
        <li>Personalized concierge services for residents</li>
        <li>Smart home automation in every villa</li>
        <li>Pet-friendly community and amenities</li>
        <li>Private gardens and outdoor living spaces</li>
        <li>Flexible rental management options</li>
        <li>Complimentary shuttle service to key locations</li>
      </ul>
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
