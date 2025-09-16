import comm1 from '../img/comm 1.png'
import comm2 from '../img/comm 2.png'
import comm3 from '../img/comm 3.png'
import rafiki from '../img/rafiki.png'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Button from './Button';

export default function Community() {
  return (
    <section>
      <h1 className="text-center text-4xl font-bold text-[#4D4D4D]">
        Manage your entire community in a single system
      </h1>
      <p className="text-center text-xl text-[#717171] pt-3">
        Who is Nexcent suitable for?
      </p>

  
      <figure className="flex flex-col md:flex-row items-center justify-center gap-10 mt-15">
        <div className="flex flex-col items-center text-center max-w-sm">
          <img src={comm1} alt="" className="w-[30%] md:w-[20%]" />
          <h1 className="text-3xl text-[#4D4D4D] font-bold py-5">
            Membership Organisations
          </h1>
          <p className="text-[#717171]">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>

        <div className="flex flex-col items-center text-center max-w-sm">
          <img src={comm2} alt="" className="w-[30%] md:w-[20%]" />
          <h1 className="text-3xl text-[#4D4D4D] font-bold w-3/4 py-5">
            National Associations
          </h1>
          <p className="text-[#717171]">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>

        <div className="flex flex-col items-center text-center max-w-sm">
          <img src={comm3} alt="" className="w-[30%] md:w-[20%]" />
          <h1 className="text-3xl text-[#4D4D4D] font-bold w-3/4 py-5">
            Clubs And Groups
          </h1>
          <p className="text-[#717171]">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </figure>

      
      <figure className="flex flex-col md:flex-row items-center mt-40 gap-10">
        <div className="w-[70%] md:w-[40%]">
          <img src={rafiki} alt="" />
        </div>

        <article className="flex-1 text-center md:text-left">
          <h1 className="text-[#4D4D4D] text-4xl font-bold md:w-[80%]">
            Behind the scenes of three years at Pixelgrade
          </h1>

          <p className="py-10 text-[#717171]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>

          <Button variant="primary">Learn More</Button>
        </article>
      </figure>

      
      <h1 className="mx-auto text-center font-medium text-4xl md:text-5xl mt-35 mb-5 w-[90%] md:w-[60%] font-bitcount">
        Take the hassle out of membership management today.
      </h1>

      <div className="flex justify-center items-center">
        <Button variant="primary" className="lg:pr-12">
          Get a Demo
        </Button>

        <MdOutlineArrowRightAlt className="w-7 h-7 text-white -ml-9 z-50 hover:scale-95 hover:cursor-pointer" />
      </div>
    </section>
  );
}
