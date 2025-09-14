import Button from './Button';
import logo from '/Logo.svg'
export default function Navbar() {
  return (
    <nav className="pr-10 py-4 md:pr-20 md:py-6 fixed top-0 w-screen z-99">
        <section className="flex justify-between items-center">
            <figure className=''>
                <img src={logo} alt="logo" className="w-[90%] backdrop-blur-xs rounded-lg p-1"/>
            </figure>

            <div className="flex items-center justify-between gap-7 backdrop-blur-sm p-4 rounded-full overflow-hidden">

                <p>Home</p>
                <p>Service</p>
                <p>Feature</p>
                <p>Product</p>
                <p>Testimonial</p>
                <p>FAQ</p>

            </div>

            <div className="flex items-center gap-5 backdrop-blur-sm">
                <Button variant='secondary'>Login</Button>
                <Button variant='primary'>Sign up</Button>
            </div>

        </section>
    </nav>
  );
}