import { Link } from "react-router-dom";
import { footerIcons, headerData } from "../data/data";

import Button from "./Button";
import Container from "./Container";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="bg-secondary text-white py-[50px]">
        <Container>
          <div className="border-t border-[#b9bbbd] grid grid-cols-1 md:grid-cols-7 gap-x-10 gap-y-8 py-[40px] items-start">
            {/* 1. MENU */}
            <ul className="py-[10px]">
              <h2 className="text-xl uppercase font-bold mb-[20px]">Menu</h2>
              {headerData.map((el) => (
                <li
                  key={el.id}
                  className="relative text-gray text-sm mb-[10px] hover:text-primary transition-all hover:translate-x-[10px] ">
                  <Link to={el.to}>{el.title}</Link>
                </li>
              ))}
              <li
                className="relative text-gray text-sm mb-[10px] hover:text-primary transition-all hover:translate-x-[10px] ">
                <Link to="/gallery">Gallery</Link>
              </li>
            </ul>

            {/* 2. CONTACT US (WhatsApp only) */}
            <div className="py-[10px] flex flex-col items-start justify-start">
              <h2 className="text-xl uppercase font-bold mb-[20px]">Contact Us</h2>
              <div className="flex items-center gap-[20px] mb-[10px]">
                <a
                  href="https://wa.me/919730877806"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                >
                  <FaWhatsapp className="text-2xl hover:text-prmary transition-colors duration-200" />
                </a>
              </div>
            </div>

            {/* 3. PHONE NUMBER */}
            <div className="py-[10px] flex flex-col items-start justify-start">
              <div className="font-bold text-base mb-1">Phone Number</div>
              <div className="text-gray text-sm mb-3"><a href="tel:+919730877806" className="hover:text-primary">+91 9730877806</a></div>
            </div>

            

            {/* 5. E-mail */}
            <div className="py-[10px] flex flex-col items-start justify-start">
              <div className="font-bold text-base mb-1">E-mail</div>
              <div className="text-gray text-sm mb-3"><a href="mailto:bombayvilla8@gmail.com" className="hover:text-primary">bombayvilla8@gmail.com</a></div>
            </div>

            {/* 6. Address */}
            <div className="py-[10px] flex flex-col items-start justify-start">
              <div className="font-bold text-base mb-1">Address</div>
              <div className="text-gray text-sm mb-3">Kailash commercial complex, Lal Bahadur Shastri Road, Surya Nagar, Nr:- Everest Company, Vikhroli West Maharashtra 400083</div>
            </div>

            {/* 7. FOLLOW US */}
            <div className="py-[10px] flex flex-col items-start justify-start">
              <h2 className="text-xl uppercase font-bold mb-[20px]">Follow Us</h2>
              <div className="flex items-center gap-[20px] mb-[10px]">
                <a
                  href="https://www.instagram.com/bombay_villa_advisory?igsh=ZHAxajYzM2cweDJr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg className="text-2xl hover:text-primary" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.388 3.678 1.37c-.98.98-1.24 2.092-1.298 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.613.058 1.281.318 2.393 1.298 3.373.98.98 2.092 1.24 3.373 1.298C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.318 3.373-1.298.98-.98 1.24-2.092 1.298-3.373.058-1.281.07-1.69.07-7.613 0-5.923-.012-6.332-.07-7.613-.058-1.281-.318-2.393-1.298-3.373-.98-.98-2.092-1.24-3.373-1.298C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-lightGray text-gray py-[30px]">
        <Container>
          <p className="sm:text-base text-sm text-center w-full">
            © {currentYear} New Capital. All Rights Reserved.
          </p>
        </Container>
      </div>
    </>
  );
}

export default Footer;
