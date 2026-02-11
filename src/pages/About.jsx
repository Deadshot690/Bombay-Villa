

import { motion, AnimatePresence } from "framer-motion";
// ...existing code...

const milestones = [
  {
    year: "2020",
    title: "Founding Vision-2020",
    desc:
      "Bombay Villa Advisory was established with a clear purpose: to redefine the landscape of private villa living in Maharashtra. The founding team brought together expertise in real estate, architecture, and hospitality, united by a shared belief in the value of curated, small-scale developments."
  },
  {
    year: "2021",
    title: "First Boutique Development-2021",
    desc:
      "Our inaugural project in Shahpur set the tone for our brand. With a focus on privacy, architectural integrity, and seamless integration with the natural surroundings, the development quickly garnered recognition among discerning buyers seeking a retreat from the city."
  },
  {
    year: "2022",
    title: "Expansion into Kasara and Igatpuri-2022",
    desc:
      "Building on early success, we expanded our footprint to Kasara and Igatpuri—locations chosen for their natural beauty, accessibility, and potential for long-term value. Each new project reinforced our commitment to boutique scale and personalized service."
  },
  {
    year: "2023",
    title: "Strengthening Brand Philosophy-2023",
    desc:
      "As our portfolio grew, so did our dedication to the principles that define us. We invested in advanced construction techniques, sustainable practices, and a design language that balances modernity with timeless elegance. Our developments became known for their sense of place and enduring appeal."
  },
  {
    year: "2024",
    title: "Commitment to Sustainable Luxury-2024",
    desc:
      "Recognizing the importance of environmental stewardship, we deepened our focus on sustainability. From site selection to material sourcing and landscape design, every aspect of our process is guided by a respect for nature and a responsibility to future generations."
  },
  {
    year: "2025",
    title: "Embracing Smart Living-2025",
    desc:
      "Entering a new era, Bombay Villa Advisory integrates smart home technologies and advanced client services. Our developments now offer intelligent automation, enhanced security, and seamless connectivity, ensuring that luxury living evolves with the needs of our discerning clientele."
  }
];

const About = () => (
  <div className="bg-black text-white scroll-smooth">
    {/* HERO SECTION with Framer Motion fade-in */}
    <AnimatePresence initial={false}>
      <motion.section
        key="about-hero"
        className="relative w-full h-[95vh] min-h-[700px] bg-black"
        style={{ backgroundImage: 'url(/images/logo.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(1.50)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute bottom-0 left-0 z-10 flex flex-col items-start justify-end w-full max-w-6xl px-8 pb-12">
          <div className="text-gold text-lg md:text-xl font-semibold mb-2 tracking-widest uppercase drop-shadow-lg">
            About Bombay Villa Advisory
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 text-white drop-shadow-lg">
            Redefining Private Villa Living in Maharashtra
          </h1>
        </div>
      </motion.section>
    </AnimatePresence>

    {/* BRAND INTRODUCTION / WHO WE ARE */}
    <section className="bg-black py-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: Image with overlay text, slides in from left */}
        <motion.div
          className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-lg"
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <img
            src="/images/img3.jpeg"
            alt="Who We Are"
            className="w-full h-full object-cover object-center"
            draggable="false"
            style={{ filter: 'brightness(0.7)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-8 z-10 flex flex-col justify-end">
            <div className="text-gold uppercase tracking-widest text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">
              Who We Are?
            </div>
            <div className="text-white text-base md:text-lg max-w-xl mb-2 drop-shadow-lg">
              Bombay Villa Advisory is more than a developer—it is a curator of refined living. Our ethos is shaped by a passion for privacy, architectural distinction, and the creation of communities that harmonize with nature. Every villa is conceived as a sanctuary, blending timeless design with the tranquility of Maharashtra’s landscapes. We believe that true luxury is found in the details, in the sense of belonging, and in the enduring value we deliver to our select clientele.
            </div>
          </div>
        </motion.div>
        {/* Right: Brand Introduction Text, slides in from right */}
        <motion.div
          className="text-lg md:text-xl text-gray-200 space-y-8"
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <p>
            Bombay Villa Advisory is a boutique real estate developer specializing in the creation of private villas in some of Maharashtra’s most sought-after destinations—Shahpur, Kasara, and Igatpuri. With over five years of experience, we have established ourselves as a trusted partner for high-net-worth individuals and investors seeking a refined, private, and nature-connected lifestyle.
          </p>
          <p>
            What sets us apart is our unwavering focus on curation over volume. Each of our developments is conceived as a limited-edition offering, meticulously planned and executed to ensure exclusivity, privacy, and a seamless integration with the natural environment. We do not pursue mass housing; instead, we craft intimate communities where every detail is considered, and every residence is a testament to our commitment to quality.
          </p>
          <p>
            Our philosophy is anchored in the belief that a home should be more than a place to reside—it should be a sanctuary that enhances well-being, fosters connection with nature, and stands as a lasting asset for generations. We are uncompromising in our standards, working only with the finest materials, the most skilled craftsmen, and a team of professionals who share our vision for excellence.
          </p>
        </motion.div>
      </div>
    </section>

    {/* MISSION & VISION */}
    <section className="bg-[#181818] py-24">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Mission: slides in from left */}
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <div className="text-gold uppercase tracking-widest text-sm font-semibold mb-2">Mission</div>
          <div className="text-white text-lg md:text-xl">
            Our mission is to elevate the standard of private villa living in Maharashtra by delivering developments that embody sophistication, privacy, and enduring value. We are committed to creating environments where residents can experience the rare combination of architectural distinction, natural beauty, and a sense of belonging. Every project is guided by a dedication to quality, integrity, and the long-term interests of our clients.
          </div>
        </motion.div>
        {/* Vision: slides in from right */}
        <motion.div
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <div className="text-gold uppercase tracking-widest text-sm font-semibold mb-2">Vision</div>
          <div className="text-white text-lg md:text-xl">
            Our vision is to be recognized as Maharashtra’s foremost boutique villa developer, known for our ability to harmonize luxury with nature and to create communities that endure. We aspire to shape the future of second-home and luxury living by setting new standards in design, sustainability, and client service. As we grow, we remain steadfast in our commitment to thoughtful expansion, ensuring that every new development reflects our core values and enhances our legacy.
          </div>
        </motion.div>
      </div>
    </section>

    {/* OUR JOURNEY TIMELINE */}
    <section className="bg-black py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-2 text-gold uppercase tracking-widest text-sm font-semibold">Our Journey</div>
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-left">Milestones</h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gold/30 -translate-x-1/2 z-0" />
          <div className="space-y-16">
            {milestones.map((m, idx) => (
              <motion.div
                key={m.year}
                className="relative flex flex-col md:flex-row items-center w-full"
                initial={{ x: idx % 2 === 0 ? -120 : 120, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.1, delay: idx * 0.12, ease: 'easeOut' }}
              >
                <div className={`flex-1 flex flex-col justify-center ${idx % 2 === 0 ? 'md:items-end md:pr-12 md:text-right' : 'md:items-end md:pr-12 md:text-right md:opacity-0 md:pointer-events-none'} z-10`}>
                  {idx % 2 === 0 && (
                    <>
                      <div className="text-gold font-semibold text-lg mb-2">{m.title}</div>
                      <div className="text-gray-200 text-base">{m.desc}</div>
                    </>
                  )}
                </div>
                <div className="flex flex-col items-center mx-8 z-20 min-w-[4rem]">
                  <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-black font-bold text-2xl shadow-lg border-4 border-black mb-2">
                    {m.year}
                  </div>
                </div>
                <div className={`flex-1 flex flex-col justify-center ${idx % 2 !== 0 ? 'md:items-start md:pl-12 md:text-left' : 'md:items-start md:pl-12 md:text-left md:opacity-0 md:pointer-events-none'} z-10`}>
                  {idx % 2 !== 0 && (
                    <>
                      <div className="text-gold font-semibold text-lg mb-2">{m.title}</div>
                      <div className="text-gray-200 text-base">{m.desc}</div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* DEVELOPMENT PHILOSOPHY */}
    <section className="bg-[#181818] py-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 px-6 items-center">
        {/* Image: slides in from left */}
        <motion.div
          className="flex-1 min-h-[480px] md:min-h-[600px] w-full rounded-2xl overflow-hidden shadow-lg"
          style={{
            backgroundImage: "url(/images/new3.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
        {/* Text: slides in from right */}
        <motion.div
          className="flex-1 text-lg text-gray-200"
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <div className="mb-2 text-gold uppercase tracking-widest text-sm font-semibold">
            Our Development Philosophy
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-left">
            Architecture in Harmony with Nature
          </h2>
          <div className="h-1 w-16 bg-gold rounded mb-6" />
          <p className="mb-4">
            At Bombay Villa Advisory, every project begins with a rigorous site selection process. We seek out locations that offer natural beauty, tranquility, and strategic accessibility, ensuring that each development is both a retreat and a sound investment. Our architectural approach is defined by restraint and refinement; we favor clean lines, open spaces, and materials that age gracefully.
          </p>
          <p className="mb-4">
            Integration with nature is not an afterthought—it is central to our design ethos. Villas are positioned to maximize views, natural light, and privacy, while landscaping is curated to enhance the local ecosystem. We believe that true luxury is found in the details: the quality of air, the sound of water, the interplay of light and shadow.
          </p>
          <p>
            Long-term asset value is a guiding principle. We design and build with the future in mind, ensuring that our developments remain desirable and relevant for decades. Our commitment to quality extends beyond construction; we provide ongoing support and stewardship to protect the value and integrity of every community we create.
          </p>
        </motion.div>
      </div>
    </section>

    {/* OUR PRESENCE */}
    <section className="bg-black py-32">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <div className="mb-2 text-gold uppercase tracking-widest text-sm font-semibold">
          Our Presence
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-left">A Growing Footprint</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-6xl font-extrabold text-gold mb-2">3</div>
            <div className="text-lg font-semibold mb-1">Prime Locations</div>
            <div className="text-gray-400 text-sm">Shahpur, Kasara, Igatpuri</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-6xl font-extrabold text-gold mb-2">Boutique</div>
            <div className="text-lg font-semibold mb-1">Developments</div>
            <div className="text-gray-400 text-sm">Curated, not mass</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-6xl font-extrabold text-gold mb-2">Selective</div>
            <div className="text-lg font-semibold mb-1">Clientele</div>
            <div className="text-gray-400 text-sm">HNI & luxury buyers</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-6xl font-extrabold text-gold mb-2">Growing</div>
            <div className="text-lg font-semibold mb-1">Footprint</div>
            <div className="text-gray-400 text-sm">Maharashtra</div>
          </div>
        </div>
      </motion.div>
    </section>

    {/* LEADERSHIP */}
    <section className="bg-[#181818] py-32">
      <motion.div
        className="max-w-3xl mx-auto px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <div className="mb-2 text-gold uppercase tracking-widest text-sm font-semibold">
          Leadership
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Visionary Guidance
        </h2>
        <div className="h-1 w-16 bg-gold rounded mb-6 mx-auto" />
        <blockquote className="italic text-xl md:text-2xl text-gray-200 mb-6">
          Bombay Villa Advisory is guided by a leadership team with deep expertise in real estate, architecture, and hospitality. Our founders bring a strategic vision shaped by years of experience in premium development, a commitment to ethical business practices, and a passion for creating environments that stand the test of time. Under their stewardship, the company has earned a reputation for integrity, discretion, and an unwavering focus on client interests.
        </blockquote>
      </motion.div>
    </section>

    {/* CLOSING */}
    <section className="bg-black py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-lg md:text-xl text-gray-200">
          As we look to the future, Bombay Villa Advisory remains committed to its founding values: privacy, quality, and long-term stewardship. We are dedicated to building not just homes, but legacies—places where families can thrive, investors can trust, and the spirit of refined living endures. Our promise is to continue setting new standards for boutique villa development in Maharashtra, always with an eye toward excellence and a respect for the land we are privileged to shape.
        </p>
      </div>
    </section>
  </div>
);

export default About;
