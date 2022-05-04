import React from 'react'
import nike from '../../assets/nike.svg'
import applepay from '../../assets/applepay.svg'
import silverstar from '../../assets/silverstar.svg'
import intra from '../../assets/intra.svg'
import mastercard from '../../assets/mastercard.svg'
import BookTrip from '../BookTrip/BookTrip'



const HeroIcons = () => {

  return (
    <section className='bg-[#F8F9FC]'>
         <BookTrip />
        <div className='container md:h-[243px]'>
            <div className='flex flex-wrap md:flex-nowrap items-center justify-center px-3 pb-[45px]  md:px-[222px] pt-[200px] md:pt-[149px] space-y-6 md:space-y-0'>
                    <div className='md:mr-[120px] mr-[40px]'>
                        <img className='w-[96px] h-[50px]' src={nike} alt="nike" />
                    </div>
                    <div className='md:mr-[126px] mr-[40px]'>
                        <img className='w-[96px] h-[56px]' src={applepay} alt="applepay" />
                    </div>
                    <div className='md:mr-[128px] mr-[40px]'>
                        <img className='w-[126px] h-[57px]' src={silverstar} alt="silver" />
                    </div>
                    <div className='md:mr-[130px] mr-[40px]'>
                        <img className='w-[108px] h-[46px]' src={intra} alt="intra" />
                    </div>
                    <div className=''>
                        <img className='w-[64px] h-[64px]' src={mastercard} alt="mastercard" />
                    </div>
            </div>
           
        </div>
    </section>
    )
}

export default HeroIcons