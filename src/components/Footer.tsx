import logo from '/Logo.svg'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri";

export default function Footer() {
  const date: number = new Date().getFullYear();
  return (
    <footer className="bg-black/95 mt-20 py-15 px-5 md:px-10 text-white">
      <section className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-0">
        
        <div>
          <div className="flex items-center">
            <img
              src={logo}
              alt=""
              className="w-13 h-13 p-1 mr-1 rounded-full bg-white"
            />
            <p className="font-extrabold text-3xl">Nexcent</p>
          </div>

          <p className="w-[90%] md:w-[65%] py-7 leading-7 text-[#F5F7FA]">
            Copyright &copy; {date} Nexcent ltd. All rights reserved
          </p>

          <figure className="flex items-center gap-5">
            <FaInstagram className="w-6 h-6 md:w-10 md:h-10 p-1.5 bg-gray-500/40 rounded-full hover:scale-95 hover:cursor-pointer transition overflow-visible" />
            <FaXTwitter className="w-6 h-6 md:w-10 md:h-10 p-1.5 bg-gray-500/40 rounded-full hover:scale-95 hover:cursor-pointer transition overflow-visible" />
            <FaYoutube className="w-6 h-6 md:w-10 md:h-10 p-1.5 bg-gray-500/40 rounded-full hover:scale-95 hover:cursor-pointer transition overflow-visible" />
            <FaLinkedin className="w-6 h-6 md:w-10 md:h-10 p-2 bg-gray-500/40 rounded-full hover:scale-95 hover:cursor-pointer transition overflow-visible" />
          </figure>
        </div>


        <div className="flex gap-14">
          <article>
            <h2 className="mb-5 font-bold text-xl">Company</h2>
            <ul className="text-sm list-none space-y-2">
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Testimonials</li>
            </ul>
          </article>

          <article>
            <h2 className="mb-5 font-bold text-xl">Support</h2>
            <ul className="text-sm list-none space-y-2 text-[#F5F7FA]">
              <li>Help center</li>
              <li>Terms of service</li>
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Status</li>
            </ul>
          </article>
        </div>

      
        <article>
          <h2 className="mb-5 font-bold text-xl">Stay up to date</h2>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-slate-600 pl-4 pr-10 py-3 rounded-xl text-sm w-60"
            />
            <RiTelegram2Line className="-ml-7 w-4.5 h-4.5 z-50 hover:scale-90 hover:cursor-pointer transition" />
          </div>
        </article>
      </section>
    </footer>
  );
}
