import { motion } from "framer-motion";
import Container from "../Container";


function WhoWeAre() {
  // Timeline data for brand story
  const milestones = [
    {
      year: "2020",
      title: "Founded",
      desc: "Bombay Villa Advisory begins with a vision to redefine luxury living in Maharashtra."
    },
    {
      year: "2021",
      title: "First Landmark Project",
      desc: "Our first boutique villa project sets a new standard for privacy and elegance."
    },
    {
      year: "2022",
      title: "Expansion",
      desc: "We expand to Shahpur, Kasara, and Igatpuri, curating exclusive communities."
    },
    {
      year: "2023",
      title: "Brand Philosophy",
      desc: "Every home is a masterpiece—crafted for those who seek the extraordinary."
    },
    {
      year: "2024",
      title: "Sustainable Living",
      desc: "We introduce eco-friendly practices and green spaces in all new developments."
    },
    {
      year: "2025",
      title: "Future Vision",
      desc: "Setting new benchmarks in luxury, privacy, and innovation for the next decade."
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#222222] via-[#232323] to-[#1a1a1a] py-16">
      <Container>
        <div className="text-white flex flex-col gap-16 items-center justify-center">
          {/* Brand Philosophy Section */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="max-w-3xl w-full mx-auto text-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.7 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-5xl font-extrabold mb-6 uppercase tracking-wide bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg"
            >
              Our Story
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.7 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-xl md:text-2xl text-gray-100 leading-relaxed font-medium mb-4 drop-shadow-md"
            >
              Bombay Villa Advisory is more than a developer—it's a philosophy. We believe luxury is personal, timeless, and deeply connected to nature. Our journey is a testament to vision, artistry, and the pursuit of the extraordinary.
            </motion.p>
          </motion.div>

          {/* Timeline Section */}
          <div className="w-full flex flex-col items-center">
            <motion.ul
              initial={false}
              className="timeline max-w-4xl w-full mx-auto"
            >
              {milestones.map((m, idx) => (
                <motion.li
                  key={m.year}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.9, delay: idx * 0.2, ease: 'easeOut' }}
                  className={`relative flex flex-col md:flex-row items-center mb-10 md:mb-0 ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.7 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-[#232323] shadow-lg md:mr-8 md:ml-0 ml-0 mb-4 md:mb-0"
                  >
                    {m.year}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.7 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                    className="bg-[#232323] rounded-xl shadow-lg p-6 flex-1 text-left md:text-center"
                  >
                    <h3 className="text-lg font-bold mb-2 text-yellow-400 uppercase tracking-wide">{m.title}</h3>
                    <p className="text-gray-200 text-base md:text-lg">{m.desc}</p>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Brand Values Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
            className="max-w-3xl w-full mx-auto text-center mt-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.7 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-3xl font-bold mb-4 text-yellow-400 uppercase tracking-wide"
            >Our Values</motion.h2>
            <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
              {[{
                title: "Exclusivity",
                desc: "Every home is unique, designed for those who value privacy and distinction."
              }, {
                title: "Craftsmanship",
                desc: "Attention to detail and artistry in every project, from concept to completion."
              }, {
                title: "Legacy",
                desc: "Creating timeless value for generations, not just homes but lasting legacies."
              }].map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 1, delay: idx * 0.2, ease: 'easeOut' }}
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(250, 204, 21, 0.25)" }}
                  className="bg-gradient-to-br from-[#232323] via-[#282828] to-[#1a1a1a] rounded-3xl shadow-2xl px-14 py-12 flex-1 min-w-[320px] md:min-w-[380px] max-w-[440px] border border-yellow-400/30 transition-all duration-300 cursor-pointer relative overflow-hidden"
                >
                  <motion.h4
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.7 }}
                    transition={{ duration: 0.7, delay: 0.2 + idx * 0.1, ease: 'easeOut' }}
                    className="text-3xl font-extrabold mb-5 text-yellow-300 tracking-wide drop-shadow-lg"
                  >{card.title}</motion.h4>
                  <motion.p
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.7 }}
                    transition={{ duration: 0.7, delay: 0.4 + idx * 0.1, ease: 'easeOut' }}
                    className="text-gray-100 text-xl font-medium leading-relaxed drop-shadow-md"
                  >{card.desc}</motion.p>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 0.15, scale: 1 }}
                    viewport={{ once: false, amount: 0.7 }}
                    transition={{ duration: 1.2, delay: 0.6 + idx * 0.1, ease: 'easeOut' }}
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(circle at 70% 30%, #facc15 0%, transparent 70%)" }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
      <style>{`
        .timeline li::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(to bottom, #facc15 0%, #232323 100%);
          transform: translateX(-50%);
          z-index: -1;
        }
      `}</style>
    </div>
  );
}

export default WhoWeAre;
