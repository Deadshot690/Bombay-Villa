import AboutUs from "../components/AboutUs";
import ClientTestimonials from "../components/ClientTestimonials";
import WhoWeAre from "../components/about/WhoWeAre";
import HeroSection from "../components/heroSection/HeroSection";

const aboutHeroImg = "/images/heroSection.jpg";

function About() {
  return (
    <div>
      <HeroSection page={"About"} image={aboutHeroImg} />
      <WhoWeAre />
      <ClientTestimonials />
      <AboutUs />
    </div>
  );
}

export default About;
