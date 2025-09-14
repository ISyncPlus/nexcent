import comm1 from '../img/comm 1.png'
import comm2 from '../img/comm 2.png'
import comm3 from '../img/comm 3.png'
import rafiki from '../img/rafiki.png'
import Button from './Button';
export default function Community() {
  return (
    <section>
        <h1 className="text-center text-4xl font-bold text-[#4D4D4D]">Manage your entire community in a single system</h1>
        <p className="text-center text-xl text-[#717171] pt-3">Who is Nexcent suitable for?</p>

        <figure className="flex items-center gap-10 mt-15">
            <div className='flex flex-col items-center'>
                <img src={comm1} alt="" className='w-[20%]'/>
                <h1 className='text-3xl text-[#4D4D4D] text-center font-bold py-5'>Membership Organisations</h1>
                <p className="text-[#717171] text-center">Our membership management software provides full automation of membership renewals and payments</p>
            </div>

            <div className='flex flex-col items-center'>
                <img src={comm2} alt="" className='w-[20%]'/>
                <h1 className='text-3xl text-[#4D4D4D] text-center font-bold w-1/2 py-5'>National Associations</h1>
                <p className="text-[#717171] text-center">Our membership management software provides full automation of membership renewals and payments</p>
            </div>

            <div className='flex flex-col items-center'>
                <img src={comm3} alt="" className='w-[20%]'/>
                <h1 className='text-3xl text-[#4D4D4D] text-center font-bold w-1/2 py-5'>Clubs And Groups</h1>
                <p className="text-[#717171] text-center">Our membership management software provides full automation of membership renewals and payments</p>
            </div>
        </figure>

        <figure className="flex items-center mt-40">
            <div className='w-[40%]'>
                <img src={rafiki} alt="" />
            </div>

            <article className="flex-1">
                <h1 className="text-[#4D4D4D] text-5xl font-bold">The unseen of spending three years at Pixelgrade</h1>

                <p className='py-10 text-[#717171]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>

                <Button variant='primary'>Learn More</Button>
            </article>
        </figure>

    </section>
  );
}