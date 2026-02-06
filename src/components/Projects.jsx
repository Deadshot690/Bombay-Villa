import { Link } from "react-router-dom";
import { projectsData } from "../data/data";
import Button from "./Button";
import Container from "./Container";
import { motion } from "framer-motion";

function Projects({ onlyLocations = false }) {
  const cards = onlyLocations
    ? projectsData.filter(
        (p) =>
          p.to === "/projects/shahpur" ||
          p.to === "/projects/kasara" ||
          p.to === "/projects/igatpuri"
      )
    : projectsData;
  return (
    <div className="min-h-screen py-[80px] bg-[#0d0d0d] text-[#f7f7f7] transition-colors duration-500">
      <Container>
        {/* Animated Section Intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
          className="max-w-3xl mx-auto text-center mb-12 px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-5 uppercase tracking-wider bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-md">
            Boutique Villa Projects
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-gray-100 leading-relaxed font-medium max-w-2xl mx-auto drop-shadow-sm"
          >
            Each project is handpicked for its location, exclusivity, and long-term value. We focus on limited, boutique developments that offer a refined lifestyle and a sense of belonging.
          </motion.p>
        </motion.div>

        <div className="font-bold">
          <h3 className="text-center uppercase font-bold sm:text-xl text-lg">
            Discover a Broad Range Of Units That Will Suit Your Needs
          </h3>

          <div className="flex items-start gap-[20px] flex-wrap mt-[40px] mx-auto">
            {cards.map((p) => {
              return (
                <motion.div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  key={p.id}
                  className="bg-[#222] text-white md:w-[calc(50%-20px)] w-full md:min-h-[500px] min-h-[400px] transition-colors duration-500 rounded-2xl shadow-lg hover:bg-[#333]"
                  whileHover={{ scale: 1.025, boxShadow: "0 8px 32px 0 #FFD70033" }}
                  transition={{ type: "tween", duration: 0.45, ease: "easeInOut" }}
                >
                  <img
                    src={p.image}
                    srcSet={p.image + ' 1x, ' + p.image + ' 2x'}
                    alt={p.description}
                    className="w-full sm:h-[300px] h-[250px] rounded-t-2xl object-cover"
                    style={{
                      imageRendering: 'auto',
                      width: '100%',
                      height: '100%',
                      maxHeight: 300,
                      objectFit: 'cover',
                      objectPosition: p.title === "What Our Clients Say" ? 'center top' : 'center',
                      background: '#181818',
                      boxShadow: '0 2px 16px 0 rgba(0,0,0,0.18)'
                    }}
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={300}
                    draggable={false}
                  />
                  <div className="p-[20px] ">
                    <>
                      <h4 className="uppercase text-xl font-bold">{p.title}</h4>
                      <p className="my-[20px] text-gray md:text-base text-sm">
                        {p.description}
                      </p>
                    </>
                    <Link to={p.to}>
                      <Button>See More!</Button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>

  );
}

export default Projects;
