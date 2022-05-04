import React from 'react'
import location from '../../assets/location.svg'
import aero from '../../assets/aero.svg'
import user from '../../assets/user.svg'
import dropdown from '../../assets/dropdown.svg'
import checkin from '../../assets/checkin.svg'

const BookTrip = () => {
  return (
      <section>
        <div className='container p-2 md:p-0 md:relative'>

            <div className='bookshadow md:w-[1200px] md:absolute bg-white rounded-[16px] md:z-40 md:h-[140px] md:mt-[-75px] md:left-[50%] md:translate-x-[-50%] md:space-x-[91px] md:flex-row flex flex-col p-7  items-center justify-center'>
                <div className='mb-4 md:mb-0'>
                    <div className='flex'>
                        <img className="mr-[20px]" src={location} alt="/" />
                         <p className='font-medium text-[#929191] text-[16px] tracking-[0.08em] leading-[24px] uppercase'>location</p>
                    </div>
                    <div className='flex'>
                        <p className="booktrip">Iceland</p>
                        <img className="ml-[8px]" src={dropdown} alt="/" />
                    </div>
                </div>

                <div className='mb-4 md:mb-0'>
                    <div className='flex'>
                        <img className="mr-[20px]" src={user} alt="/" />
                         <p className='font-medium text-[#929191] text-[16px] tracking-[0.08em] leading-[24px] uppercase'>Persons</p>
                    </div>
                    <div className='flex'>
                        <p className="booktrip">4 Persons</p>
                        <img className="ml-[8px]" src={dropdown} alt="/" />
                    </div>
                </div>

                <div className='mb-4 md:mb-0'>
                    <div className='flex'>
                        <img className="mr-[20px]" src={checkin} alt="/" />
                         <p className='font-medium text-[#929191] text-[16px] tracking-[0.08em] leading-[24px] uppercase'>check in</p>
                    </div>
                    <div className='flex'>
                        <p className="booktrip">12 January 2022</p>
                        <img className="ml-[8px]" src={dropdown} alt="/" />
                    </div>
                </div>

                <div className=''>
                    <div className='flex'>
                        <img className="mr-[20px]" src={checkin} alt="/" />
                         <p className='font-medium text-[#929191] text-[16px] tracking-[0.08em] leading-[24px] uppercase'>checkout</p>
                    </div>
                    <div className='flex'>
                        <p className="booktrip">18 January 2022</p>
                        <img className="ml-[8px]" src={dropdown} alt="/" />
                    </div>
                </div>
                <button className='btn flex md:my-[38px]'>Book Trip <img className='ml-[12px]' src={aero} alt="/" /> </button>
                </div>
            </div>
    </section>
    
  )
}

export default BookTrip