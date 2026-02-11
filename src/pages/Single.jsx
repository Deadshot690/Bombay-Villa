// ...removed image imports, use public/images path instead

import { useParams, Link } from "react-router-dom";
import Button from "../components/Button";
import { amenityIcons } from "../components/AmenityIcons";
import { kasaraFeatureIcons, kasaraWhyIcons } from "../components/KasaraIcons";
import { igatpuriFeatureIcons, igatpuriConnectivityIcons, igatpuriLifestyleIcons, igatpuriInfraIcons, igatpuriOwnershipIcons } from "../components/IgatpuriIcons";
import useDocumentMeta from "../theme/useDocumentMeta";
import {
  administrativeData,
  apartmentsData,
  commercialData,
  hotelApartmentsData,
  medicalData,
  pharmaciesData,
  villaData,
  projectsData,
} from "../data/data";

import { motion } from "framer-motion"; // Import motion from framer-motion
// ...removed image imports, use public/images path instead
import HeroSection from "../components/heroSection/HeroSection";
import Container from "../components/Container";



function Single() {

  // Always call hooks at the top level
  const { id } = useParams();
  let data, image;
  let metaTitle = undefined;
  let metaDescription = undefined;

  // Set data, image, metaTitle, metaDescription before any returns
  switch (id) {
    case "shahpur":
      data = [projectsData.find((p) => p.to === "/projects/shahpur")];
      image = projectsData.find((p) => p.to === "/projects/shahpur")?.image;
      metaTitle = "Shahpur | Bombay Villa Advisory";
      metaDescription = "Private bungalow living in Shahpur designed for space, privacy, and calm living.";
      break;
    case "kasara":
      data = [projectsData.find((p) => p.to === "/projects/kasara")];
      image = projectsData.find((p) => p.to === "/projects/kasara")?.image;
      metaTitle = "Kasara | Bombay Villa Advisory";
      metaDescription = "Modern villas in Kasara featuring elegant architecture, advanced amenities, and tranquil surroundings. Perfect for those seeking comfort and sophistication.";
      break;
    case "igatpuri":
      data = [projectsData.find((p) => p.to === "/projects/igatpuri")];
      image = projectsData.find((p) => p.to === "/projects/igatpuri")?.image;
      metaTitle = "Igatpuri | Bombay Villa Advisory";
      metaDescription = "Luxury villas in Igatpuri designed for relaxation and exclusivity. Experience breathtaking views, premium finishes, and a serene lifestyle close to nature.";
      break;
    case "villa":
      data = villaData;
      image = projectsData.find((p) => p.to === "/projects/shahpur")?.image;
      break;
    case "apartment":
      data = apartmentsData;
      image = "/images/Apartment.jpg";
      break;
    case "hotelApartment":
      data = hotelApartmentsData;
      image = "/images/hotel-apartment.jpg";
      break;
    case "commercial":
      data = commercialData;
      image = "/images/commercial-1.jpg";
      break;
    case "administrative":
      data = administrativeData;
      image = "/images/administrative.jpg";
      break;
    case "medical":
      data = medicalData;
      image = "/images/commercial-1.jpg";
      break;
    case "pharmacies":
      data = pharmaciesData;
      image = "/images/woman-working-pharmacy-wearing-coat.jpg";
      break;
    default:
      data = null;
      image = "";
      break;
  }

  useDocumentMeta({
    title: metaTitle,
    description: metaDescription,
  });

  // Custom content for Shahpur
  if (id === "shahpur" && data && data[0]) {
    const gallery = [
      {
        img: "/images/S-bombay-villa.JPG",
        title: "Poolside Serenity",
        desc: "A tranquil poolside retreat, perfect for unwinding in the privacy of your own villa. Lush landscaping and modern design create a seamless indoor-outdoor living experience."
      },
      {
        img: "/images/r3.jpeg",
        title: "Contemporary Facade",
        desc: "Striking architecture with clean lines and natural textures, Shahpur blends timeless elegance with a sense of openness and light."
      },
      {
        img: "/images/S-Bombay-villa3.JPG",
        title: "Sunlit Living Spaces",
        desc: "Expansive windows invite natural light, illuminating spacious interiors designed for comfort, calm, and effortless entertaining."
      },
      {
        img: "/images/v2.jpeg",
        title: "Private Green Escape",
        desc: "Each villa is surrounded by greenery, offering a peaceful sanctuary where you can reconnect with nature and enjoy true privacy."
      }
    ];
    return (
      <div>
        <HeroSection
          page="Shahpur"
          image={image}
          subheading="Private bungalow living in Shahpur designed for space, privacy, and calm living."
        />
        <Container>
          <div className="relative top-[-100px] flex flex-col md:flex-row items-center justify-center gap-12 min-h-[480px]">
            {/* Text Section - slides in from left */}
            <div
              className="flex-[0.8] max-w-lg text-left md:pr-8 pr-0 mb-10 md:mb-0"
              style={{ zIndex: 2 }}
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gradient bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 bg-clip-text text-transparent tracking-tight">
                Shahpur
              </h2>
              <p className="text-lg md:text-xl text-yellow-200 mb-4 font-semibold">
                Private bungalow living with space, privacy, and calm.
              </p>
              <hr className="border-yellow-500 mb-4 w-20" />
              <div className="text-base md:text-lg text-gray-100 leading-relaxed bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-yellow-900/20">
                Shahpur is a tranquil development surrounded by nature.<br />
                Designed for those who value privacy, open skies, and a peaceful lifestyle.<br />
                Each villa is crafted for relaxation, comfort, and timeless elegance.
              </div>
            </div>
            {/* Image Card - slides in from right */}
            <div
              key={data[0].id}
              className="flex-[1.2] max-w-2xl w-full bg-[#232323] rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center relative group"
              style={{ minHeight: 480 }}
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <img
                src={data[0].image}
                alt={data[0].title}
                className="w-full h-[480px] object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105"
                style={{ display: 'block', maxHeight: 480 }}
              />
              <div className="absolute inset-0 rounded-3xl pointer-events-none group-hover:bg-gradient-to-br group-hover:from-yellow-200/10 group-hover:to-yellow-400/10 transition duration-300" />
            </div>
          </div>
          {/* New Feature Cards Section for Shahpur */}
          <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Customized Villa & Resort Villa */}
            <motion.div
              className="bg-[#181818] rounded-2xl shadow-lg border border-yellow-700 p-8 flex flex-col justify-between w-full md:max-w-full"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.1, delay: 0, ease: 'easeInOut' }}
              whileHover={{ scale: 1.045, boxShadow: "0 8px 32px 0 #FFD70033" }}
            >
              <div className="bg-gray-900 rounded-xl p-8 border border-yellow-400 max-w-2xl mx-auto mb-8">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Customized Villa</h3>
                <p className="mb-2 text-white">Our collection of tailor-made villas offers a diverse range of options, from cozy 2 BHK to expansive 5 BHK residences, designed to suit your needs. These villas come in both compact and spacious layouts, ensuring flexibility and comfort. With areas spanning from 550 to 1500 sq.ft., you can find the perfect space that aligns with your preferences.</p>
                <ul className="list-disc ml-6 mb-2 text-white">
                  <li>2 BHK (Compact) and 2 BHK (Spacious)</li>
                  <li>3 BHK (Compact) and 3 BHK (Spacious)</li>
                  <li>4 BHK (Compact)</li>
                </ul>
                <div className="mb-4">
                  <Link to="/contact">
                    <Button>Get Details</Button>
                  </Link>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Resort Villa</h3>
                <p className="mb-2 text-white">Our array of resort villas presents a variety of choices, ranging from 2 to 5 resort rooms, catering to your specific requirements. These villas offer areas spanning from 550 to 1100 sq.ft., providing ample space for your comfort and enjoyment.</p>
                <ul className="list-disc ml-6 mb-2 text-white">
                  <li>Options: 4 / 5 Studio Villa</li>
                  <li>Only 8 Resort Villa Available</li>
                </ul>
                <div className="font-semibold text-yellow-300">
                  <Link to="/contact">
                    <Button>Get Details</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
            {/* Card 2: 50+ Clubhouse Amenities */}
            <motion.div
              className="bg-[#181818] rounded-2xl shadow-lg border border-yellow-700 p-8 flex flex-col justify-between w-full md:max-w-full"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.1, delay: 0.18, ease: 'easeInOut' }}
              whileHover={{ scale: 1.045, boxShadow: "0 8px 32px 0 #FFD70033" }}
            >
              <div className="bg-gray-900 rounded-xl p-8 border border-yellow-400 max-w-2xl mx-auto mb-8">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">50+ Clubhouse Amenities</h3>
                <p className="mb-2 text-white">Clubhouse amenities enhance the overall experience for members, providing a place to relax, exercise, socialize, and engage in various activities within a convenient and well-equipped setting.</p>
                <ul className="list-disc ml-6 mb-2 columns-2 md:columns-2 text-white">
                  {[
                    'Pool Table',
                    'Table Tennis',
                    'Carrom Board',
                    'Chess',
                    'Bowling Alley',
                    'ATV Bikes',
                    'Badminton',
                    'Box Cricket',
                    'Utility Shop',
                    'Wedding/Party Lawn',
                    'Volley Ball',
                    'Kids Play Area*',
                    'Basket Ball',
                    'Gym',
                    'Pickle Ball Court',
                    'Table of Snake Ladder Game',
                    'Private Pool Room',
                    'Private Pool',
                    'Food Court',
                    'Lawn Area',
                    'River facing views',
                    'Machan',
                    'Car Parking',
                    'Electricity',
                    '24/7 water supply',
                    'Mini Theatre',
                  ].map((amenity) => (
                    <li key={amenity} className="flex items-center mb-1">
                      {amenityIcons[amenity] || null}
                      <span>{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
          {/* Gallery Section - hover cards like Kasara/Igatpuri */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
            {gallery.map((item, idx) => (
              <div
                key={item.img}
                className="relative bg-white/10 backdrop-blur-md border border-yellow-900/20 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row items-stretch group transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={String(100 + idx * 100)}
                data-aos-duration="1000"
              >
                <div className="relative md:w-2/3 w-full flex-shrink-0 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[320px] md:h-[420px] object-cover md:rounded-l-2xl rounded-t-2xl md:rounded-t-none transition-transform duration-500 group-hover:scale-110 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:bg-gradient-to-br group-hover:from-yellow-200/10 group-hover:to-yellow-400/20 transition duration-300" />
                  {/* Gold glow border on hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-400 group-hover:shadow-[0_0_32px_0_rgba(255,215,0,0.25)] transition-all duration-300 pointer-events-none" />
                </div>
                <div className="flex-1 flex flex-col justify-center p-4 md:p-6 text-sm md:text-base">
                  <h3 className="text-xl font-bold text-yellow-200 mb-2 group-hover:text-yellow-300 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-100 text-base leading-relaxed group-hover:text-white transition-colors duration-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* ...existing code... */}
        </Container>
      </div>
    );
  }
  // Custom content for Igatpuri Villas
  if (id === "igatpuri" && data && data[0]) {
    const gallery = [
      {
        img: "/images/I-Bomaby-Villa.JPG",
        title: "Mountain Views",
        desc: "Wake up to breathtaking mountain vistas and crisp air, with every villa designed to maximize the natural beauty of Igatpuri."
      },
      {
        img: "/images/img2.jpeg",
        title: "Lush Courtyards",
        desc: "Private courtyards filled with greenery offer a peaceful escape and a perfect setting for morning coffee or evening gatherings."
      },
      {
        img: "/images/new2.jpeg",
        title: "Open-Plan Living",
        desc: "Spacious interiors flow seamlessly to the outdoors, creating a sense of freedom and connection to nature."
      },
      {
        img: "/images/I-Bomaby-Villa3.JPG",
        title: "Tranquil Water Features",
        desc: "Elegant water features and landscaped gardens bring a sense of calm and timeless luxury to every villa."
      },
    ];
    return (
      <div>
        <HeroSection
          page="Igatpuri"
          image={image}
          subheading="A hillside villa community designed for peace, views, and natural living."
        />
        <Container>
          <div className="relative top-[-100px] flex flex-col md:flex-row items-center justify-center gap-12 min-h-[480px]">
            {/* Text Section - slides in from left */}
            <div
              className="flex-[0.8] max-w-lg text-left md:pr-8 pr-0 mb-10 md:mb-0"
              style={{ zIndex: 2 }}
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gradient bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 bg-clip-text text-transparent tracking-tight">
                Igatpuri
              </h2>
              <p className="text-lg md:text-xl text-yellow-200 mb-4 font-semibold">
                Hillside villa living with panoramic views and natural tranquility.
              </p>
              <hr className="border-yellow-500 mb-4 w-20" />
              <div className="text-base md:text-lg text-gray-100 leading-relaxed bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-yellow-900/20">
                Igatpuri is a serene development nestled in the hills.<br />
                Designed for those who value peace, open skies, and a close connection to nature.<br />
                Each villa is crafted for relaxation, privacy, and timeless comfort.
              </div>
            </div>
            {/* Image Card - slides in from right */}
            <div
              key={data[0].id}
              className="flex-[1.2] max-w-2xl w-full bg-[#232323] rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center relative group"
              style={{ minHeight: 480 }}
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <img
                src={data[0].image}
                alt={data[0].title}
                className="w-full h-[480px] object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105"
                style={{ display: 'block', maxHeight: 480 }}
              />
              <div className="absolute inset-0 rounded-3xl pointer-events-none group-hover:bg-gradient-to-br group-hover:from-yellow-200/10 group-hover:to-yellow-400/10 transition duration-300" />
            </div>
          </div>
          {/* Detail Content Cards Section for Igatpuri */}
          <div className="my-0 grid grid-cols-1 md:grid-cols-2 gap-2">
            {[
              {
                title: 'IGATPURI',
                content: <>
                  <div className="bg-gray-900 rounded-xl p-8 border border-yellow-400 max-w-2xl mx-auto mb-8">
                    <h4 className="text-yellow-400 text-2xl font-extrabold mb-6">Igatpuri</h4>
                    <ul className="space-y-4">
                      {[
                        { label: 'Scenic Nature', desc: 'Discover Igatpuri – a peaceful and beautiful place to call home. It offers more than just land – it\'s a chance to enjoy a better, more relaxed way of living. Spread across 6 acres of scenic and quiet surroundings, located in the heart of nature, away from the noise and stress of city life.' },
                        { label: 'Tranquil Lifestyle', desc: 'Igatpuri is renowned for its calm atmosphere, fresh mountain air, and lush greenery. Residents enjoy a slower pace of life, perfect for unwinding and reconnecting with nature.' },
                        { label: 'Community Living', desc: 'The gated community fosters a sense of belonging, with friendly neighbors, shared spaces, and regular events that bring people together.' },
                        { label: 'Nature & Wellness', desc: 'Enjoy morning walks along nature-aligned pathways, yoga sessions in landscaped gardens, and easy access to hiking trails and meditation centers.' },
                        { label: 'Modern Amenities', desc: 'Igatpuri offers a blend of modern comforts and rustic charm, including clubhouses, playgrounds, and recreational facilities for all ages.' },
                        { label: 'Safety & Security', desc: 'Comprehensive security ensures peace of mind, with 24/7 surveillance, well-lit streets, and attentive staff.' },
                        { label: 'Generous Entrance & Layouts', desc: 'Wide entrance gates and well-defined layouts create a welcoming environment, making every arrival feel special.' },
                        { label: 'Intelligent Infrastructure', desc: 'Smart planning means reliable water, electricity, and connectivity, supporting a hassle-free lifestyle.' },
                        { label: 'Hassle-Free Connectivity', desc: 'Quick access to highways, transport hubs, and essential services makes daily life convenient and stress-free.' },
                      ].map((item, i) => (
                        <li key={item.label} className="flex items-center gap-4 bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition">
                          <span className="text-yellow-400 text-2xl">{igatpuriFeatureIcons[i]}</span>
                          <div>
                            <span className="font-medium text-lg text-white">{item.label}</span><br />
                            <span className="text-sm text-gray-100">{item.desc}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-8 border border-yellow-400 max-w-2xl mx-auto mb-8">
                    <h4 className="text-yellow-400 text-2xl font-extrabold mb-6">Connectivity</h4>
                    <p className="mb-2 text-white">Bombay Villa Advisory Igatpuri offers the perfect balance of serene living with excellent connectivity to essential amenities and transportation hubs.</p>
                    <ul className="space-y-4">
                      {[
                        { label: 'Samruddhi Maha Marg', desc: '5 Min' },
                        { label: 'Igatpuri Bus Depot', desc: '8 min' },
                        { label: 'Igatpuri Railway Station', desc: '10 Min' },
                        { label: 'Retail Mart', desc: '10 min' },
                        { label: 'Hospital', desc: '8 min' },
                        { label: 'Temple', desc: '2 min' },
                      ].map((item, i) => (
                        <li key={item.label} className="flex items-center gap-4 bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition">
                          <span className="text-yellow-400 text-2xl">{igatpuriConnectivityIcons[i]}</span>
                          <div>
                            <span className="font-medium text-lg text-white">{item.label}</span>
                            <span className="ml-2 text-sm text-yellow-300">{item.desc}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-8 border border-yellow-400 max-w-2xl mx-auto mb-8">
                    <h4 className="text-yellow-400 text-2xl font-extrabold mb-6">Lifestyle & Environment</h4>
                    <ul className="space-y-4">
                      {[
                        { label: 'Mountain Views & Birds', desc: 'Wake up to panoramic mountain views and the sound of birds.' },
                        { label: 'Cool Breezes & Clean Air', desc: 'Enjoy cool breezes, clean air, and a climate that encourages outdoor activities year-round.' },
                        { label: 'Monsoons & Waterfalls', desc: 'Experience vibrant monsoons, lush landscapes, and seasonal waterfalls.' },
                        { label: 'Wellness & Festivals', desc: 'Participate in wellness retreats, adventure sports, and cultural festivals unique to Igatpuri.' },
                        { label: 'Low-Density Environment', desc: 'Benefit from a low-density environment, ensuring privacy and space for every resident.' },
                      ].map((item, i) => (
                        <li key={item.label} className="flex items-center gap-4 bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition">
                          <span className="text-yellow-400 text-2xl">{igatpuriLifestyleIcons[i]}</span>
                          <div>
                            <span className="font-medium text-lg text-white">{item.label}</span><br />
                            <span className="text-sm text-gray-100">{item.desc}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              },
              {
                title: 'INFRASTRUCTURE FEATURES & OWNERSHIP BENEFITS',
                content: <>
                  <div className="bg-gray-900 rounded-xl p-8 border border-yellow-400 max-w-2xl mx-auto mb-8">
                    <h4 className="text-yellow-400 text-2xl font-extrabold mb-6">Infrastructure Features</h4>
                    <ul className="space-y-4">
                      {[
                        'High-quality infrastructure for comfortable, secure, and hassle-free living.',
                        'Welcome Entrance Gate',
                        'All-Weather Roads',
                        'Well-Lit Streets',
                        'Fully-Compounded Community',
                        'Water Reservoirs',
                        'Individual Plot Compounding',
                        'Water Softening Plant',
                        'Dedicated Central Water Tank',
                        'Dedicated Electrical Substation',
                        'Electricity & Water Supply',
                        'Rainwater Harvesting System',
                        'Solar-Powered Street Lighting',
                        'Underground Drainage Network',
                        'Fire Safety Hydrants',
                        
                      ].map((desc, i) => (
                        <li key={desc} className="flex items-center gap-4 bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition">
                          <span className="text-yellow-400 text-2xl">{igatpuriInfraIcons[i]}</span>
                          <span className="text-lg text-white font-medium">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-8 border border-yellow-400 max-w-2xl mx-auto">
                    <h4 className="text-yellow-400 text-2xl font-extrabold mb-6">Ownership Benefits</h4>
                    <ul className="space-y-4">
                      {[
                        'Smooth and hassle-free ownership journey with multiple benefits.',
                        'Customized Options - We offer customized options to match your needs and budget, ensuring you find the perfect plot for your dream home.',
                        '100% Clear Documents - We take pride in providing documents that are 100% clear. Every contract, report, or document we deliver is easy to understand and communicates the message perfectly.',
                        'Construction Facility - We offer complete support for construction projects, including help with finding and buying plots. From planning to final construction, our team is with you at every step.',
                        'Immediate Possession - We offer immediate possession with full transparency and smooth processes. Our team ensures quick and hassle-free ownership transfers.',
                        'Loan & EMI Facilities - We provide loan and EMI options that fit your needs and budget. Our flexible plans make repayment easy and stress-free. With clear terms and strong support.',
                        'Expert Guidance - Our team of experts is available to guide you through every step of the process, from selection to possession and beyond.',
                        'Flexible Payment Plans - Choose from a variety of payment options to suit your financial needs, making ownership accessible and convenient.',
                        'After-Sales Support - Enjoy ongoing assistance and support even after possession, ensuring your experience remains smooth and worry-free.',
                      ].map((desc, i) => (
                        <li key={desc} className="flex items-center gap-4 bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition">
                          <span className="text-yellow-400 text-2xl">{igatpuriOwnershipIcons[i]}</span>
                          <span className="text-lg text-white font-medium">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              }
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                className="bg-[#181818] rounded-2xl shadow-lg border border-yellow-700 p-8 flex flex-col justify-between w-full md:flex-1 md:max-w-full"
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.1, delay: idx * 0.18, ease: 'easeInOut' }}
                whileHover={{ scale: 1.045, boxShadow: "0 8px 32px 0 #FFD70033" }}
              >
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">{card.title}</h3>
                {card.content}
              </motion.div>
            ))}
          </div>
          {/* Gallery Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
            {gallery.map((item, idx) => (
              <div
                key={item.img}
                className="relative bg-white/10 backdrop-blur-md border border-yellow-900/20 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row items-stretch group transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={String(100 + idx * 100)}
                data-aos-duration="1000"
              >
                <div className="relative md:w-2/3 w-full flex-shrink-0 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[320px] md:h-[420px] object-cover md:rounded-l-2xl rounded-t-2xl md:rounded-t-none transition-transform duration-500 group-hover:scale-110 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:bg-gradient-to-br group-hover:from-yellow-200/10 group-hover:to-yellow-400/20 transition duration-300" />
                  {/* Gold glow border on hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-400 group-hover:shadow-[0_0_32px_0_rgba(255,215,0,0.25)] transition-all duration-300 pointer-events-none" />
                </div>
                <div className="flex-1 flex flex-col justify-center p-4 md:p-6 text-sm md:text-base">
                  <h3 className="text-xl font-bold text-yellow-200 mb-2 group-hover:text-yellow-300 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-100 text-base leading-relaxed group-hover:text-white transition-colors duration-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Shahpur Feature Cards Section - moved below gallery for Shahpur only */}
          {id === "shahpur" && (
            <div className="mt-20 flex flex-wrap justify-center gap-8 py-12">
              {[{
                icon: <span style={{fontSize:32}} role="img" aria-label="binoculars">🔭</span>,
                title: '2 HOURS AWAY FROM MUMBAI',
                desc: 'Embraced by majestic mountains and bordered by a meandering river, the project is just 2 hours away from Mumbai.'
              }, {
                icon: <span style={{fontSize:32}} role="img" aria-label="gate">🏰</span>,
                title: 'GATED COMMUNITY',
                desc: 'Gated community dedicated to villas, residents are welcomed into a world of opulence and refined living.'
              }, {
                icon: <span style={{fontSize:32}} role="img" aria-label="amenities">🏊</span>,
                title: 'OPEN AMENITIES & CLUB HOUSE',
                desc: 'Residents of these villas enjoy a plethora of world-class amenities at their fingertips with private swimming pools offer refreshing retreats.'
              }].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-[#0d0d0d] text-white rounded-2xl shadow-lg p-8 w-full md:w-[320px] flex flex-col items-start hover:bg-yellow-400/10 transition-colors duration-300 group relative"
                  style={{ transition: 'all 300ms cubic-bezier(.4,2,.3,1)' }}
                >
                  <div className="mb-4 flex items-center justify-center w-12 h-12 bg-teal-600 rounded-md">
                    {card.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors duration-300">{card.title}</h3>
                  <p className="text-gray-100 text-base leading-relaxed group-hover:text-white transition-colors duration-300">{card.desc}</p>
                </div>
              ))}
            </div>
          )}
        {/* Kasara Feature Cards Section - below gallery for Kasara only */}
        {id === "kasara" && (
          <div className="mt-20 flex flex-wrap justify-center gap-8 py-12">
            {[
              {
                title: 'Features of Kasara',
                content: <>
                  <ul className="list-disc ml-6 mt-2 mb-4">
                    <li><b>Samruddhi Expressway Connectivity</b><br/>Rapid, modern expressway access that dramatically cuts travel time to Mumbai and Nashik — ideal for weekend travellers and commuters.</li>
                    <li><b>Gateway to Kasara Ghat (Scenic Mountain Pass)</b><br/>Positioned near the dramatic Kasara (Thal) Ghat — panoramic valley views, dramatic monsoon scenery and photographic backdrops.</li>
                    <li><b>Trekking & Adventure Hub</b><br/>Easy access to popular treks and forts like Harishchandragad, Kalsubai and Tringalwadi — perfect for buyers who value active, outdoor lifestyles.</li>
                    <li><b>Bhavali Dam & Lakeside Escapes</b><br/>Short drives to Bhavali Dam, Arthur Lake and other reservoirs for peaceful picnics, boating and nature walks.</li>
                    <li><b>Established Spiritual & Wellness Centers</b><br/>Close to Vipassana and meditation centers (internationally known retreats) — attractive for wellness-focused buyers.</li>
                    <li><b>Waterfalls & Monsoon Beauty</b><br/>Numerous nearby waterfalls and seasonal cascades create unforgettable monsoon scenery and cool microclimate — great for nature lovers.</li>
                    <li><b>Strong Rail & Road Links</b><br/>Kasara is on the Central Railway line and well connected by road — making quick site visits and weekend travel easy for Mumbai buyers.</li>
                    <li><b>Cooler Climate & Fresh Air</b><br/>Elevated terrain and vegetation provide noticeably cooler temperatures than the city — a genuine “escape” from heat and pollution.</li>
                    <li><b>Adventure & Leisure Activities Nearby</b><br/>Options for watersports, valley treks, camping, and day-trips (Camel Valley, Bhatsa river valley, local lakes) — good for rental/retreat potential.</li>
                    <li><b>Low-density, Private Living</b><br/>The region supports boutique, low-density villa projects — privacy and quiet are easy to promise without competing high-rise clutter.</li>
                    <li><b>Eco & Agri Experiences</b><br/>Proximity to rural landscapes, orchards and small farms — opportunity for village-style weekend experiences, farm visits and agritourism add-ons.</li>
                    <li><b>Improving Infrastructure & Future Upside</b><br/>Ongoing regional improvements (expressway, rail upgrades) point to better connectivity and growing demand for weekend homes and long-term appreciation.</li>
                  </ul>
                </>
              },
              {
                title: 'Transparent benefits for you.',
                content: <>
                  <ul className="list-disc ml-6 mt-2 mb-4">
                    <li><b>Guaranteed Appreciation</b><br/>Investing in villa plots sets the stage for future real estate success. As land becomes scarcer, your investment is poised for significant appreciation. Secure your future with a smart investment today.</li>
                    <li><b>Customer centricity</b><br/>Poolcity is very responsive to customer needs and feedback, investing heavily in post-sales service and relationship management. With no 'sell-it-and-forget-it' attitude, Every customer is seen as a brand ambassador.</li>
                    <li><b>Invest, Live and enjoy</b><br/>So don’t work for money; make it work for you.” The only thing on Earth not remanufactured is land. Let's invest so you can live and enjoy the future comfortably.</li>
                    <li><b>Innovative and sustainable project designs</b><br/>Poolcity has in-house design teams and invests heavily in innovative, space-saving, and comfort-oriented designs. We look towards sustainability measures, reduce environmental impact, and have certification to prove it.</li>
                  </ul>
                </>
              },
              {
                title: 'Features of Kasara',
                content: <>
                  <ul className="list-disc ml-6 mt-2 mb-4">
                    <li><b>Samruddhi Expressway Connectivity</b><br/>Rapid, modern expressway access that dramatically cuts travel time to Mumbai and Nashik — ideal for weekend travellers and commuters.</li>
                    <li><b>Gateway to Kasara Ghat (Scenic Mountain Pass)</b><br/>Positioned near the dramatic Kasara (Thal) Ghat — panoramic valley views, dramatic monsoon scenery and photographic backdrops.</li>
                    <li><b>Trekking & Adventure Hub</b><br/>Easy access to popular treks and forts like Harishchandragad, Kalsubai and Tringalwadi — perfect for buyers who value active, outdoor lifestyles.</li>
                    <li><b>Bhavali Dam & Lakeside Escapes</b><br/>Short drives to Bhavali Dam, Arthur Lake and other reservoirs for peaceful picnics, boating and nature walks.</li>
                    <li><b>Established Spiritual & Wellness Centers</b><br/>Close to Vipassana and meditation centers (internationally known retreats) — attractive for wellness-focused buyers.</li>
                    <li><b>Waterfalls & Monsoon Beauty</b><br/>Numerous nearby waterfalls and seasonal cascades create unforgettable monsoon scenery and cool microclimate — great for nature lovers.</li>
                    <li><b>Strong Rail & Road Links</b><br/>Kasara is on the Central Railway line and well connected by road — making quick site visits and weekend travel easy for Mumbai buyers.</li>
                    <li><b>Cooler Climate & Fresh Air</b><br/>Elevated terrain and vegetation provide noticeably cooler temperatures than the city — a genuine “escape” from heat and pollution.</li>
                    <li><b>Adventure & Leisure Activities Nearby</b><br/>Options for watersports, valley treks, camping, and day-trips (Camel Valley, Bhatsa river valley, local lakes) — good for rental/retreat potential.</li>
                    <li><b>Low-density, Private Living</b><br/>The region supports boutique, low-density villa projects — privacy and quiet are easy to promise without competing high-rise clutter.</li>
                    <li><b>Eco & Agri Experiences</b><br/>Proximity to rural landscapes, orchards and small farms — opportunity for village-style weekend experiences, farm visits and agritourism add-ons.</li>
                    <li><b>Improving Infrastructure & Future Upside</b><br/>Ongoing regional improvements (expressway, rail upgrades) point to better connectivity and growing demand for weekend homes and long-term appreciation.</li>
                  </ul>
                </>
              }
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                className="bg-[#181818] rounded-2xl shadow-lg border border-yellow-700 p-8 flex flex-col justify-between w-full md:flex-1 md:max-w-full"
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 1.1, delay: idx * 0.18, ease: 'easeInOut' }}
                whileHover={{ scale: 1.045, boxShadow: "0 8px 32px 0 #FFD70033" }}
              >
                <h3 className={
                  card.title === 'Features of Kasara'
                    ? "text-2xl font-bold mb-2 text-yellow-400"
                    : "text-2xl font-bold mb-4 text-yellow-400"
                }>{card.title}</h3>
                {card.content}
              </motion.div>
            ))}
          </div>
        )}
      </Container>
    </div>
    );
  } else if (id === "kasara" && data && data[0]) {
    // Custom content for Kasara (move the code here from previous if)
    const gallery = [
      {
        img: "/images/K-Bombay-villa.JPG",
        title: "Elegant Outdoor Living ",
        desc: "Spacious terraces and open-air lounges invite you to enjoy the outdoors in style, surrounded by greenery and fresh air."
      },
      {
        img: "/images/img5.jpeg",
        title: "Modern Villa Design",
        desc: "Contemporary architecture with expansive glass and natural stone, blending sophistication with comfort in every detail."
      },
      {
        img: "/images/K-Bombay-Villa2.JPG",
        title: "Infinity Pool Views",
        desc: "A stunning infinity pool overlooks the lush landscape, offering a serene escape and a perfect spot for relaxation or entertaining guests."
      },
      {
        img: "/images/r5.jpeg",
        title: "Grand Entrance",
        desc: "A dramatic entryway welcomes you home, setting the tone for luxury and exclusivity throughout the Kasara experience."
      },
    ];
    return (
      <div>
        <HeroSection
          page="Kasara"
          image={image}
          subheading="A modern villa enclave designed for sophistication, comfort, and scenic living."
        />
        <Container>
          <div className="relative top-[-100px] flex flex-col md:flex-row items-center justify-center gap-12 min-h-[480px]">
            {/* Text Section - slides in from left */}
            <div
              className="flex-1 max-w-xl text-left md:pr-8 pr-0 mb-10 md:mb-0"
              style={{ zIndex: 2 }}
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gradient bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 bg-clip-text text-transparent tracking-tight">
                Kasara
              </h2>
              <p className="text-lg md:text-xl text-yellow-200 mb-4 font-semibold">
                Modern villa living with panoramic views and refined comfort.
              </p>
              <hr className="border-yellow-500 mb-4 w-20" />
              <div className="text-base md:text-lg text-gray-100 leading-relaxed bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-yellow-900/20">
                Kasara is a contemporary development set amidst scenic surroundings.<br />
                Designed for those who appreciate modern architecture, open spaces, and a connection to nature.<br />
                Every villa is crafted for comfort, elegance, and timeless appeal.
              </div>
            </div>
            {/* Image Card - slides in from right */}
            <div
              key={data[0].id}
              className="flex-1 max-w-md w-full bg-[#232323] rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center relative group"
              style={{ minHeight: 380 }}
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <img
                src={data[0].image}
                alt={data[0].title}
                className="w-full h-[380px] object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105"
                style={{ display: 'block' }}
              />
              <div className="absolute inset-0 rounded-3xl pointer-events-none group-hover:bg-gradient-to-br group-hover:from-yellow-200/10 group-hover:to-yellow-400/10 transition duration-300" />
            </div>
          </div>
          {/* Kasara Feature Cards Section - now above gallery, below hero section */}
          <div className="my-0 grid grid-cols-1 md:grid-cols-2 gap-2">
            {[{
              title: 'Features of Kasara',
              content: <>
                <div className="bg-gray-900 rounded-xl p-8 border border-yellow-400 max-w-2xl mx-auto mb-8">
                  <ul className="space-y-4">
                    {[
                      { label: 'Samruddhi Expressway Connectivity', desc: 'Rapid, modern expressway access that dramatically cuts travel time to Mumbai and Nashik — ideal for weekend travellers and commuters.' },
                      { label: 'Gateway to Kasara Ghat (Scenic Mountain Pass)', desc: 'Positioned near the dramatic Kasara (Thal) Ghat — panoramic valley views, dramatic monsoon scenery and photographic backdrops.' },
                      { label: 'Trekking & Adventure Hub', desc: 'Easy access to popular treks and forts like Harishchandragad, Kalsubai and Tringalwadi — perfect for buyers who value active, outdoor lifestyles.' },
                      { label: 'Bhavali Dam & Lakeside Escapes', desc: 'Short drives to Bhavali Dam, Arthur Lake and other reservoirs for peaceful picnics, boating and nature walks.' },
                      { label: 'Established Spiritual & Wellness Centers', desc: 'Close to Vipassana and meditation centers (internationally known retreats) — attractive for wellness-focused buyers.' },
                      { label: 'Waterfalls & Monsoon Beauty', desc: 'Numerous nearby waterfalls and seasonal cascades create unforgettable monsoon scenery and cool microclimate — great for nature lovers.' },
                      { label: 'Strong Rail & Road Links', desc: 'Kasara is on the Central Railway line and well connected by road — making quick site visits and weekend travel easy for Mumbai buyers.' },
                      { label: 'Cooler Climate & Fresh Air', desc: 'Elevated terrain and vegetation provide noticeably cooler temperatures than the city — a genuine “escape” from heat and pollution.' },
                      { label: 'Adventure & Leisure Activities Nearby', desc: 'Options for watersports, valley treks, camping, and day-trips (Camel Valley, Bhatsa river valley, local lakes) — good for rental/retreat potential.' },
                      { label: 'Low-density, Private Living', desc: 'The region supports boutique, low-density villa projects — privacy and quiet are easy to promise without competing high-rise clutter.' },
                      { label: 'Eco & Agri Experiences', desc: 'Proximity to rural landscapes, orchards and small farms — opportunity for village-style weekend experiences, farm visits and agritourism add-ons.' },
                      { label: 'Improving Infrastructure & Future Upside', desc: 'Ongoing regional improvements (expressway, rail upgrades) point to better connectivity and growing demand for weekend homes and long-term appreciation.' },
                      { label: 'Vibrant Local Markets', desc: 'Experience the charm of Kasara’s bustling local markets, offering fresh produce, artisanal goods, and a taste of authentic regional culture right at your doorstep.' },
                    ].map((item, i) => (
                      <li key={item.label} className="flex items-start gap-4 bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition">
                        <span className="text-yellow-400 text-2xl">{kasaraFeatureIcons[i]}</span>
                        <div>
                          <span className="font-medium text-lg text-white">{item.label}</span><br />
                          <span className="text-sm text-gray-100">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            }, {
              title: 'Why choose Kasara?',
              content: <>
                <div className="bg-gray-900 rounded-xl p-8 border border-yellow-400 max-w-2xl mx-auto mb-8">
                  <ul className="space-y-4">
                    {[
                      { label: 'Surrounded by mountains', desc: 'Embrace tranquil living with our villas nestled amidst breathtaking mountains. Enjoy picturesque views, fresh air, and a serene environment, perfect for a peaceful and rejuvenating lifestyle away from the city\'s hustle and bustle.' },
                      { label: 'Easy documentation and Loan', desc: 'Purchasing villas from us is clear and straightforward. Our simple legal procedures and minimal paperwork are handled by our in-house expert, who also helps secure the best home loan rates, all from the comfort of your home' },
                      { label: 'Maintenance Free', desc: 'Our property management company offers housekeeping services, allowing you to fully enjoy your leisure time without the burden of chores. Our rental property is maintenance-free, ensuring a hassle-free living experience.' },
                      { label: 'Assured monthly Rentals', desc: 'Invest with confidence with our assured monthly rental program. Our villas offer a reliable source of income, making them an excellent investment choice. Enjoy luxurious living while your property generates consistent returns.' },
                      { label: 'Secured gated Community', desc: 'Live with peace of mind in our secured gated community. With 24/7 security and surveillance, our villas provide a safe environment for you and your family, allowing you to relax and enjoy life to the fullest.' },
                      { label: '35+ Amenities', desc: 'Our property features over 35 + amenities to enhance your lifestyle, including a swimming pool, outdoor jacuzzi, children\'s play areas, and community halls, ensuring your comfort and convenience. Enjoy a rich living experience with our facilities.' },
                      { label: 'Prime Location & Accessibility', desc: 'Strategically located for easy access to Mumbai and Nashik, our villas offer seamless connectivity for both weekend getaways and daily commutes.' },
                      { label: 'Personalized Villa Design', desc: 'Choose from a range of villa layouts and customize interiors to match your taste, ensuring your home is truly unique and tailored to your lifestyle.' },
                      { label: 'Eco-friendly Initiatives', desc: 'Our community incorporates sustainable practices, including rainwater harvesting, solar lighting, and green landscaping for a healthier environment.' },
                      { label: 'Active Community Life', desc: 'Enjoy a vibrant social atmosphere with regular events, wellness programs, and recreational activities, fostering a sense of belonging and engagement.' },
                      { label: 'Award-winning Service', desc: 'Experience the difference with our award-winning customer service team, dedicated to making your villa purchase and ownership seamless, enjoyable, and worry-free.' },
                    ].map((item, i) => (
                      <li key={item.label} className="flex items-center gap-4 bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition">
                        <span className="text-yellow-400 text-2xl">{kasaraWhyIcons[i]}</span>
                        <div>
                          <span className="font-medium text-lg text-white">{item.label}</span><br />
                          <span className="text-sm text-gray-100">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            }].map((card, idx) => (
              <motion.div
                key={card.title}
                className="bg-[#181818] rounded-2xl shadow-lg border border-yellow-700 p-8 flex flex-col justify-between"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.1, delay: idx * 0.18, ease: "easeInOut" }}
                whileHover={{ scale: 1.045, boxShadow: "0 8px 32px 0 #FFD70033" }}
              >
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">{card.title}</h3>
                {card.content}
              </motion.div>
            ))}
          </div>
          {/* Gallery Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
            {gallery.map((item, idx) => (
              <div
                key={item.img}
                className="relative bg-white/10 backdrop-blur-md border border-yellow-900/20 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row items-stretch group transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={String(100 + idx * 100)}
                data-aos-duration="1000"
              >
                <div className="relative md:w-2/3 w-full flex-shrink-0 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[320px] md:h-[420px] object-cover md:rounded-l-2xl rounded-t-2xl md:rounded-t-none transition-transform duration-500 group-hover:scale-110 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:bg-gradient-to-br group-hover:from-yellow-200/10 group-hover:to-yellow-400/20 transition duration-300" />
                  {/* Gold glow border on hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-400 group-hover:shadow-[0_0_32px_0_rgba(255,215,0,0.25)] transition-all duration-300 pointer-events-none" />
                </div>
                <div className="flex-1 flex flex-col justify-center p-6">
                  <h3 className="text-xl font-bold text-yellow-200 mb-2 group-hover:text-yellow-300 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-100 text-base leading-relaxed group-hover:text-white transition-colors duration-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  } else {
    // Default return for other ids
    return (
      <div>
        <HeroSection page={data && data[0]?.title ? data[0].title : "Project Details"} image={image} />
        <Container>
          <div className="py-20 text-center text-yellow-200 text-2xl font-semibold">
            {data && data[0]?.description ? data[0].description : "No details available for this project."}
          </div>
        </Container>
      </div>
    );
  }
}

export default Single;