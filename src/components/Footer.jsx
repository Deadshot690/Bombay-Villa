import { Link } from "react-router-dom";
import { footerIcons, headerData } from "../data/data";

import Button from "./Button";
import Container from "./Container";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="bg-secondary text-white py-[50px]">
        <Container>
          <div className="border-t border-[#b9bbbd] grid grid-cols-1 md:grid-cols-5 gap-2 py-[40px] items-start">
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

            <div className="py-[10px] flex flex-col items-start justify-start">
              <div className="font-bold text-base mb-1">Phone Number</div>
              <div className="text-gray text-sm mb-3"><a href="tel:+919730877806" className="hover:text-primary">+91 9730877806</a></div>
            </div>

            <div className="py-[10px]">
              <h2 className="text-xl uppercase font-bold mb-[20px]">Who we are?</h2>
              <p className="text-gray text-sm">
                Bombay Villa Advisory specializes in developing exclusive private bungalows and villas in Shahpur, Kasara, and Igatpuri. We are dedicated to delivering refined living experiences, focusing on privacy, comfort, and timeless value for our clients.
              </p>
            </div>

            <div className="py-[10px] flex flex-col items-start justify-start">
              <div className="font-bold text-base mb-1">E-mail</div>
              <div className="text-gray text-sm mb-3"><a href="mailto:bombayvilla8@gmail.com" className="hover:text-primary">bombayvilla8@gmail.com</a></div>
            </div>

            <div className="py-[10px] flex flex-col items-start justify-start">
              <div className="font-bold text-base mb-1">Address</div>
              <div className="text-gray text-sm mb-3">kailash commercial complex, lal Bahadur Shastri Road, Surya Nagar, Nr:- Everest Company, Vikhroli West Maharashtra 400083</div>
              <h2 className="text-xl uppercase font-bold mb-[20px] mt-4">Follow Us</h2>
              <div className="flex items-center gap-[20px] mb-[10px]">
                <a
                  href="https://www.instagram.com/bombay_villa_advisory?igsh=ZHAxajYzM2cweDJr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg className="text-2xl hover:text-primary" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.388 3.678 1.37c-.98.98-1.24 2.092-1.298 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.613.058 1.281.318 2.393 1.298 3.373.98.98 2.092 1.24 3.373 1.298C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.318 3.373-1.298.98-.98 1.24-2.092 1.298-3.373.058-1.281.07-1.69.07-7.613 0-5.923-.012-6.332-.07-7.613-.058-1.281-.318-2.393-1.298-3.373-.98-.98-2.092-1.24-3.373-1.298C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
                </a>
                <a
                  href="https://wa.me/919730877806"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <svg className="text-2xl hover:text-primary" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.501-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.455 4.436-9.89 9.892-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.896 6.991c-.003 5.455-4.438 9.89-9.893 9.89m8.413-18.304A11.815 11.815 0 0 0 12.05 0C5.495 0 .06 5.435.058 12.086c0 2.13.557 4.21 1.615 6.033L0 24l6.063-1.591a11.876 11.876 0 0 0 5.966 1.523h.005c6.554 0 11.89-5.435 11.893-12.086a11.82 11.82 0 0 0-3.48-8.651"/></svg>
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
