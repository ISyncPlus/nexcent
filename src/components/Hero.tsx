import heroImg from '../img/heroImg.png'
import Button from './Button';

export default function Hero() {
  return (
    <section className="pt-20 md:pt-40 flex items-center justify-between">
        <div className="w-[60%]">
            <h1 className="text-6xl font-bold text-shadow-lg">Lessons and insights <span className="text-[#4CAF4F]">from 8 years</span></h1>
            <p className='text-[#717171] py-10 text-shadow-md'>Where to grow your business as a photographer: site or social media?</p>

            <Button variant='primary' className='px-15'>Register</Button>
        </div>

        <figure className="flex-1">
            <img src={heroImg} alt="illustration" className="w-[80%]"/>
        </figure>
    </section>
  );
}