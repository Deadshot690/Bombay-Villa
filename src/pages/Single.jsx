import Ibv1 from "../Assets/I-Bomaby-Villa.JPG";
import Ibv2 from "../Assets/I-Bomaby-Villa1.JPG";
import Ibv3 from "../Assets/I-Bomaby-Villa2.JPG";
import Ibv4 from "../Assets/I-Bomaby-Villa3.JPG";
import Kbv1 from "../Assets/K-Bombay-villa.JPG";
import Kbv2 from "../Assets/K-Bombay-Villa1.JPG";
import Kbv3 from "../Assets/K-Bombay-Villa2.JPG";
import Kbv4 from "../Assets/K-Bombay-Villa3.JPG";

import { useParams } from "react-router-dom";
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

import Sbv1 from "../Assets/S-bombay-villa.JPG";
import Sbv2 from "../Assets/S-bombay-villa1.JPG";
import Sbv3 from "../Assets/S-Bombay-villa3.JPG";
import Sbv4 from "../Assets/S-Bombay-villa4.JPG";
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
      metaTitle = "Shahpur Villas | Bombay Villa Advisory";
      metaDescription = "Private bungalow living in Shahpur designed for space, privacy, and calm living.";
      break;
    case "kasara":
      data = [projectsData.find((p) => p.to === "/projects/kasara")];
      image = projectsData.find((p) => p.to === "/projects/kasara")?.image;
      break;
    case "igatpuri":
      data = [projectsData.find((p) => p.to === "/projects/igatpuri")];
      image = projectsData.find((p) => p.to === "/projects/igatpuri")?.image;
      break;
    case "villa":
      data = villaData;
      image = projectsData.find((p) => p.to === "/projects/shahpur")?.image;
      break;
    case "apartment":
      data = apartmentsData;
      image = "../Assets/Apartment.jpg";
      break;
    case "hotelApartment":
      data = hotelApartmentsData;
      image = "../Assets/hotel-apartment.jpg";
      break;
    case "commercial":
      data = commercialData;
      image = "../Assets/commercial-1.jpg";
      break;
    case "administrative":
      data = administrativeData;
      image = "../Assets/administrative.jpg";
      break;
    case "medical":
      data = medicalData;
      image = "../Assets/commercial-1.jpg";
      break;
    case "pharmacies":
      data = pharmaciesData;
      image = "../Assets/woman-working-pharmacy-wearing-coat.jpg";
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

  // Custom content for Igatpuri Villas
  if (id === "igatpuri" && data && data[0]) {
    const gallery = [
      {
        img: Ibv1,
        title: "Mountain View Retreat",
        desc: "Wake up to breathtaking mountain vistas and crisp air, with every villa designed to maximize the natural beauty of Igatpuri."
      },
      {
        img: Ibv2,
        title: "Lush Courtyards",
        desc: "Private courtyards filled with greenery offer a peaceful escape and a perfect setting for morning coffee or evening gatherings."
      },
      {
        img: Ibv3,
        title: "Open-Plan Living",
        desc: "Spacious interiors flow seamlessly to the outdoors, creating a sense of freedom and connection to nature."
      },
      {
        img: Ibv4,
        title: "Tranquil Water Features",
        desc: "Elegant water features and landscaped gardens bring a sense of calm and timeless luxury to every villa."
      },
    ];
    return (
      <div>
        <HeroSection
          page="Igatpuri Villas"
          image={image}
          subheading="A hillside villa community designed for peace, views, and natural living."
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
                Igatpuri Villas
              </h2>
              <p className="text-lg md:text-xl text-yellow-200 mb-4 font-semibold">
                Hillside villa living with panoramic views and natural tranquility.
              </p>
              <hr className="border-yellow-500 mb-4 w-20" />
              <div className="text-base md:text-lg text-gray-100 leading-relaxed bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-yellow-900/20">
                Igatpuri Villas is a serene development nestled in the hills.<br />
                Designed for those who value peace, open skies, and a close connection to nature.<br />
                Each villa is crafted for relaxation, privacy, and timeless comfort.
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
                <div className="relative md:w-1/2 w-full flex-shrink-0 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[220px] md:h-full object-cover md:rounded-l-2xl rounded-t-2xl md:rounded-t-none transition-transform duration-500 group-hover:scale-110 group-hover:brightness-105"
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
  }

  // Custom content for Shahpur Villas
  if (id === "shahpur" && data && data[0]) {
    const gallery = [
      {
        img: Sbv1,
        title: "Poolside Serenity",
        desc: "A tranquil poolside retreat, perfect for unwinding in the privacy of your own villa. Lush landscaping and modern design create a seamless indoor-outdoor living experience."
      },
      {
        img: Sbv2,
        title: "Contemporary Facade",
        desc: "Striking architecture with clean lines and natural textures, Shahpur Villas blends timeless elegance with a sense of openness and light."
      },
      {
        img: Sbv3,
        title: "Sunlit Living Spaces",
        desc: "Expansive windows invite natural light, illuminating spacious interiors designed for comfort, calm, and effortless entertaining."
      },
      {
        img: Sbv4,
        title: "Private Green Escape",
        desc: "Each villa is surrounded by greenery, offering a peaceful sanctuary where you can reconnect with nature and enjoy true privacy."
      },
    ];
    return (
      <div>
        <HeroSection
          page="Shahpur Villas"
          image={image}
          subheading="A refined private bungalow development designed for calm, space, and long-term living."
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
                Shahpur Villas
              </h2>
              <p className="text-lg md:text-xl text-yellow-200 mb-4 font-semibold">
                Private bungalow living surrounded by nature and open landscapes.
              </p>
              <hr className="border-yellow-500 mb-4 w-20" />
              <div className="text-base md:text-lg text-gray-100 leading-relaxed bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-yellow-900/20">
                Shahpur Villas is a thoughtfully planned bungalow development set amidst greenery and open surroundings.<br />
                Designed for those seeking privacy and a slower pace of life, each villa balances modern architecture with a natural setting.<br />
                The focus is on comfort, space, and timeless living.
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
                <div className="relative md:w-1/2 w-full flex-shrink-0 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[220px] md:h-full object-cover md:rounded-l-2xl rounded-t-2xl md:rounded-t-none transition-transform duration-500 group-hover:scale-110 group-hover:brightness-105"
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
  }

  // Custom content for Kasara Villas
  if (id === "kasara" && data && data[0]) {
    const gallery = [
      {
        img: Kbv1,
        title: "Elegant Outdoor Living ",
        desc: "Spacious terraces and open-air lounges invite you to enjoy the outdoors in style, surrounded by greenery and fresh air."
      },
      {
        img: Kbv2,
        title: "Modern Villa Design",
        desc: "Contemporary architecture with expansive glass and natural stone, blending sophistication with comfort in every detail."
      },
      {
        img: Kbv3,
        title: "Infinity Pool Views",
        desc: "A stunning infinity pool overlooks the lush landscape, offering a serene escape and a perfect spot for relaxation or entertaining guests."
      },
      {
        img: Kbv4,
        title: "Grand Entrance",
        desc: "A dramatic entryway welcomes you home, setting the tone for luxury and exclusivity throughout the Kasara Villas experience."
      },
    ];
    return (
      <div>
        <HeroSection
          page="Kasara Villas"
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
                Kasara Villas
              </h2>
              <p className="text-lg md:text-xl text-yellow-200 mb-4 font-semibold">
                Modern villa living with panoramic views and refined comfort.
              </p>
              <hr className="border-yellow-500 mb-4 w-20" />
              <div className="text-base md:text-lg text-gray-100 leading-relaxed bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-yellow-900/20">
                Kasara Villas is a contemporary development set amidst scenic surroundings.<br />
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
                <div className="relative md:w-1/2 w-full flex-shrink-0 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[220px] md:h-full object-cover md:rounded-l-2xl rounded-t-2xl md:rounded-t-none transition-transform duration-500 group-hover:scale-110 group-hover:brightness-105"
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
  }
  // ...existing code...
}

export default Single;
