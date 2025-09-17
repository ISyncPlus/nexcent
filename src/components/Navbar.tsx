import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";
import logo from "/Logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="pr-10 py-4 md:pr-20 md:py-6 fixed top-0 w-screen z-50 bg-transparent">
      <section className="flex justify-between items-center">
        <figure className="flex items-center backdrop-blur-xs rounded-lg p-1">
          <img
            src={logo}
            alt="logo"
            className="w-[90%]"
          />
          <p className="font-extrabold text-2xl">Nexcent</p>
        </figure>

        <div className="hidden lg:flex items-center justify-between gap-7 backdrop-blur-xs p-4 rounded-full overflow-hidden">
          <p>Home</p>
          <p>Service</p>
          <p>Feature</p>
          <p>Product</p>
          <p>Testimonial</p>
          <p>FAQ</p>
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <Button variant="secondary" className="backdrop-blur-xs">
            Login
          </Button>
          <Button variant="primary">Sign up</Button>
        </div>

        <div className="lg:hidden backdrop-blur-xs rounded-lg p-1">
          <button onClick={() => setIsOpen(!isOpen)} className="transition-transform duration-300">
            {isOpen ? (
              <FaTimes size={24} className="transform rotate-180 transition-transform duration-300 hover:cursor-pointer hover:scale-95 transiton" />
            ) : (
              <FaBars size={24} className="transform rotate-0 transition-transform duration-300 hover:cursor-pointer hover:scale-95 transiton" />
            )}
          </button>
        </div>
      </section>

      <div
        className={`lg:hidden flex flex-col items-center gap-6 py-6 transition-all duration-500 ease-in-out origin-top ${
          isOpen ? "shadow-sm rounded-xl bg-[#F5F7FA] opacity-100 scale-y-100" : "opacity-0 scale-y-0 overflow-hidden"
        }`}
      >
        <p>Home</p>
        <p>Service</p>
        <p>Feature</p>
        <p>Product</p>
        <p>Testimonial</p>
        <p>FAQ</p>

        <div className="flex flex-col gap-3 w-3/4">
          <Button variant="secondary" className="w-full">
            Login
          </Button>
          <Button variant="primary" className="w-full">
            Sign up
          </Button>
        </div>
      </div>
    </nav>
  );
}
