import React from 'react'
import map from '../../assets/map.svg'
import arrow from '../../assets/Arrow.svg'

const IceCold = () => {
  return (
      <section className='bg-[#F8F9FC]'>
         <div className='container h-[693px] p-[20px] pt-[179px] md:pl-[40px]'>
             <div className='h-[492px] relative  bg-[rgba(62, 134, 245, .2)]' style={{backgroundImage:`url(${map})`}}>
                <h1 className='w-full md:w-[791px] leading-[54px] tracking-[-0.02em] text-[black] font-semibold left-[50%] translate-x-[-50%] absolute top-[-60px] h-[108px] text-[30px] md:text-[40px] text-center'>Creating the best <span className='text-[#3E86F5]'>ice-cold!</span> experience you would never forget.</h1>

                 <p className='w-full md:w-[697px] md:h-[72px] absolute left-[50%] translate-x-[-50%] text-[rgba(0, 0, 0, 0.5)] text-[18px] md:text-[24px] mt-[120px] md:mt-[60px] text-center leading-[36px] font-normal'>Would you explore nature paradise in the world, find the best destination in the world with us.</p>
                <div className=''>
                    <h1 className='w-full md:w-[454px] md:h-[50px] md:whitespace-nowrap absolute mb-[75px] md:mb-[150px] bottom-0 left-[50%] translate-x-[-50%] font-semibold text-[#000000] text-[40px] text-center leading-[60px] tracking-[-0.02em]'>View Regions available</h1>
                    <img className='absolute bottom-0 left-[50%] translate-x-[-50%] mb-[36px] md:mb-[73px]' src={arrow} alt="/" />
                </div>
             </div>
            
        </div>
      </section>
   
  )
}

export default IceCold