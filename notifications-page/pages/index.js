import Image from 'next/image'
import MarkWebber from "../assets/images/avatar-mark-webber.webp";
import AngelaGray from "../assets/images/avatar-angela-gray.webp";
import JacobThompson from "../assets/images/avatar-jacob-thompson.webp";
import NathanPeterson from "../assets/images/avatar-nathan-peterson.webp";

const Home = () => {
      
  return (
    <main className=''>
      <section className='lg:mt-20 lg:w-[530px] lg:h-[450px] mx-auto bg-white border-none rounded-lg items-center sm:w-[400px] mt-2'>
          <div className="flex justify-between">
              <div className='flex justify-between items-center gap-3 m-7'>
                  <h3 className='font-jakarta text-very-dark-blue font-bold font-xl tracking-wider'>Notifications</h3>
                  <span className='font-jakarta text-sm bg-blue p-[0.5px] px-[0.6rem] font-semibold border-none rounded-md text-white'>
                      3
                  </span>
              </div>
              <div className='m-7 '>
                  <small className='font-jakarta text-very-dark-blue'>Mark all as read</small>
              </div>
          </div>
          <div className='flex mx-3 gap-3 p-3 bg-light-grayish-blue-100 border-none rounded-lg mb-3'> 
              <div className='relative overflow-hidden rounded-xl w-[40px] h-[40px]'>
                 <Image src={MarkWebber} layout="fill" objectFit='cover' />
              </div>    
              <div className='block gap-2'>
                <div className='flex gap-2 items-center flex-wrap'>
                  <h3 className='text-sm font-jakarta text-[12px] tracking-wide'>
                    <span className='font-semibold text-very-dark-blue'> {" "}
                    Mark Webber </span> {" "} reacted to your recent post {" "}
                    <span className='text-blue font-semibold'>My First tournament today!</span> {" "}
                  </h3>
                    <span className='w-[7px] h-[7px] border-none bg-red rounded-xl'></span>
              </div>
                  <small className='font-jakarta font-light'>1m ago</small>
              </div>
          </div>

          <div className='flex mx-3 gap-3 p-3 bg-light-grayish-blue-100 border-none rounded-lg mb-3'> 
              <div className='relative overflow-hidden rounded-xl w-[40px] h-[40px]'>
                 <Image src={AngelaGray} layout="fill" objectFit='cover' />
              </div>    
              <div className='block gap-2'>
                <div className='flex gap-2 items-center'>
                  <h3 className='text-sm font-jakarta text-[12px] tracking-wide'>
                    <span className='font-semibold text-very-dark-blue'> {" "}
                    Angela Gray </span> {" "} followed you {" "}
                  </h3>
                    <span className='w-[7px] h-[7px] border-none bg-red rounded-xl'></span>
              </div>
                  <small className='font-jakarta font-light'>5m ago</small>
              </div>
          </div>

          <div className='flex mx-3 gap-3 p-3 bg-light-grayish-blue-100 border-none rounded-lg mb-3'> 
              <div className='relative overflow-hidden rounded-xl w-[40px] h-[40px]'>
                 <Image src={JacobThompson} layout="fill" objectFit='cover' />
              </div>    
              <div className='block gap-2'>
                <div className='flex gap-2 items-center'>
                  <h3 className='text-sm font-jakarta text-[12px]'>
                    <span className='font-semibold text-very-dark-blue'> {" "}
                    James Thompson </span> {"  "} has joined your group {" "}
                    <span className='text-blue font-semibold'>Chess Club</span> {" "}
                  </h3>
                    <span className='w-[7px] h-[7px] border-none bg-red rounded-xl'></span>
              </div>
                  <small className='font-jakarta font-light'>1 day ago</small>
              </div>
          </div>

          <div className='flex  mx-3 gap-3 p-3 bg-light-grayish-blue-100 border-none rounded-lg mb-3'> 
              <div className='relative overflow-hidden rounded-xl w-[40px] h-[40px]'>
                 <Image src={NathanPeterson} layout="fill" objectFit='cover' />
              </div>    
              <div className='block gap-2'>
                <div className='flex gap-2 items-center'>
                  <h3 className='text-sm font-jakarta text-[12px]'>
                    <span className='font-semibold text-very-dark-blue'> {" "}
                    Nathan Peterson </span> reacted to your recent post {" "}
                    <span className='text-blue font-semibold'>5-end game strategies to increase your win rate</span> {" "}
                  </h3>
              </div>
                  <small className='font-jakarta font-light'>2 weeks ago</small>
              </div>
          </div>
          
      </section>
    </main>
  )
}

export default Home;
