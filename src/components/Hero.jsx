import { discount,robot } from '../assets'
import GetStarted from "./GetStarted"


const Hero = () => {
  return (
    <section id='home' className='flex md:flex-row mt-24 flex-col paddingY  '>
          <div className='flex-1 flexStart flex-col xl:px-0 sm:px-16 px-6'>
              <div className='bg-discount-gradient flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 '>
                  <img src={discount} alt="discount" className='w-[32px] h-[32px]'/>
                  <p className='paragraph ml-2'>
                    <span className='text-white'>20%</span> Discount For {" "}
                    <span className='text-white'>1 Mounth</span> Account
                  </p>
              </div> 
              <div className='flex flex-row justify-between items-center w-full'>
                     <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] ss:leading-[100px] leading-[75px] text-[52px]  text-white'>
                        The Next <br className='sm:block hidden'/> {" "}
                        <span className='text-gradient'>Generation</span> {" "}
                    </h1>
                    <div className='ss:flex hidden md:mr-4'>
                        <GetStarted/>
                    </div>
              </div>

              <h1 className='font-poppins whitespace-nowrap font-semibold ss:text-[68px] ss:leading-[100px] leading-[75px] text-[52px] w-full  text-white'>
                  Payment Method.
              </h1>
              <p className={`paragraph max-w-[470px] mt-5 mb-10`}>
                Our team of experts uses a methodology to identify the credit cards
                most likely to fit your needs. We examine annual percentage rates,
                annual fees.
              </p>

          </div>

          <div className='relative flex flex-1 flexCenter '>
               <img src={robot} alt="robot" className='h-[100%] relative w-[100%] z-[5]' />
               <div className='absolute z-[0] w-[70%] h-[70%] top-0 pink__gradient '/>
               <div className='absolute z-[1] w-[70%] h-[70%] bottom-40 rounded-full white__gradient'/>
               <div className='absolute z-[0] w-[50%] h-[50%] bottom-20 right-[100px] blue__gradient'/>
          </div>

          <div className={`ss:hidden flexCenter`}>
              <GetStarted/>
          </div>
    </section>
  )
}

export default Hero
