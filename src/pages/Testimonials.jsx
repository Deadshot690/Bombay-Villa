
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Amit Sharma",
    title: "Villa Owner, Shahpur",
    description: "The entire buying process was smooth and transparent. The villa exceeded our expectations in every way. Highly recommended!",
  },
  {
    id: 2,
    name: "Priya Desai",
    title: "Investor, Kasara Villas",
    description: "Great investment and a beautiful home! The team was professional and always available to answer our questions.",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    title: "Resident, Igatpuri",
    description: "We love the peaceful environment and the quality of construction. Our family enjoys every moment here.",
  },
  {
    id: 4,
    name: "Sunita Patel",
    title: "Homeowner, Shahpur",
    description: "From site visit to handover, the experience was fantastic. The amenities and location are perfect for our lifestyle.",
  },
  {
    id: 5,
    name: "Vikram Singh",
    title: "Kasara Villa Owner",
    description: "Excellent service and attention to detail. I would recommend them to anyone looking for a luxury villa.",
  },
];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center" style={{paddingTop: 80}}>
      <motion.h1
        className="font-bold text-yellow-400 text-center"
        style={{
          fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
          maxWidth: 600,
          margin: '0 auto 48px auto',
          lineHeight: 1.15,
          wordBreak: 'break-word',
          paddingTop: 32,
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        What Our Clients Say
      </motion.h1>
      <div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl justify-center"
        style={{ marginTop: 32, display: 'grid', placeItems: 'center', paddingBottom: 48 }}
      >
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.id}
            className="bg-[#181818] rounded-xl shadow-lg p-8 border border-yellow-900 flex flex-col items-center"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, delay: idx * 0.18, ease: "easeOut" }}
            whileHover={{ scale: 1.045, boxShadow: "0 0 32px 0 #FFD70055, 0 2px 24px 0 #0008" }}
            style={{ minHeight: 200, justifyContent: "center", position: "relative", overflow: "hidden" }}
          >
            <p className="text-lg italic mb-4 text-center">“{t.description}”</p>
            <div className="font-semibold text-yellow-300 text-center">{t.name}</div>
            <div className="text-sm text-gray-400 text-center">{t.title}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
// ...existing code...
