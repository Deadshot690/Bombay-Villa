import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useRef } from "react";

function Button({ children }) {
  const btnRef = useRef();
  return (
    <button
      ref={btnRef}
      className="main-btn relative bg-transparent sm:py-[10px] sm:px-[30px] py-[7px] px-[20px] border-[2px] border-primary text-sm font-medium flex items-center gap-[5px] rounded-full focus:outline-none transition-all duration-200"
      style={{
        borderColor: "#FFD700",
        color: "#FFD700",
        background: "rgba(255,255,255,0.01)",
        transition: "background 0.25s cubic-bezier(.4,2,.3,1), color 0.25s cubic-bezier(.4,2,.3,1), transform 0.22s cubic-bezier(.4,2,.3,1)",
      }}
      onMouseOver={e => {
        e.currentTarget.style.background = '#FFD70022';
        e.currentTarget.style.color = '#222';
        e.currentTarget.style.borderColor = '#FFD700';
        e.currentTarget.style.transform = 'scale(1.04)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.01)';
        e.currentTarget.style.color = '#FFD700';
        e.currentTarget.style.borderColor = '#FFD700';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <span className="relative z-10 flex items-center gap-[5px]">
        {children}
        <MdOutlineArrowRightAlt className="text-xl ml-1" />
      </span>
    </button>
  );
}

export default Button;
