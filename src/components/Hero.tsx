import heroImg from '../img/heroImg.png'

export default function Hero() {
  return (
    <section className="px-5 py-4 md:px-10 md:py-6 flex items-center justify-between">
        <div className="w-[60%]">
            <h1 className="text-7xl font-bold text-shadow-lg">Lessons and insights <span className="text-[#4CAF4F]">from 8 years</span></h1>
        </div>

        <figure className="flex-1">
            <img src={heroImg} alt="illustration" className="w-[90%]"/>
        </figure>
    </section>
  );
}