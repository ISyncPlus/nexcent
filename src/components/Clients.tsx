import c1 from '../img/client 1.png'
import c2 from '../img/client 2.png'
import c3 from '../img/client 3.png'
import c4 from '../img/client 4.png'
import c5 from '../img/client 5.png'

export default function Clients() {
  return (
    <section className="py-10 md:py-20">
      <h1 className="text-center text-4xl font-bold text-[#4D4D4D]">Our Clients</h1>
      <p className="text-center text-xl text-[#717171] pt-3">
        We have been working with some Fortune 500+ clients
      </p>

      <figure className="flex flex-wrap justify-center lg:justify-evenly gap-6 my-10">
        <img src={c1} alt="c1" className="w-15 h-15" />
        <img src={c2} alt="c2" className="w-15 h-12" />
        <img src={c3} alt="c3" className="w-15 h-15" />
        <img src={c4} alt="c4" className="w-15 h-15" />
        <img src={c5} alt="c5" className="w-15 h-15" />
      </figure>
    </section>
  );
}
