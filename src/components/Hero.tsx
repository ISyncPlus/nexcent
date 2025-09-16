import heroImg from '../img/heroImg.png'
import Button from './Button';

export default function Hero() {
  return (
    <section className="pt-20 md:pt-40 flex flex-col-reverse md:flex-row items-center justify-between text-center md:text-left">
      <div className="w-full md:w-[60%]">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-shadow-lg">
          Lessons and insights <span className="text-[#4CAF4F]">from 8 years</span>
        </h1>
        <p className="text-[#717171] py-6 md:py-10 text-shadow-md text-sm sm:text-base">
          Where to grow your business as a photographer: site or social media?
        </p>

        <Button variant="primary" className="px-10 md:px-15">
          Register
        </Button>
      </div>

      <figure className="w-full md:flex-1 flex justify-center mb-8 md:mb-0">
        <img src={heroImg} alt="illustration" className="w-[70%] sm:w-[60%] md:w-[80%]" />
      </figure>
    </section>
  );
}
