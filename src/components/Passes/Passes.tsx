import React from 'react'
import passes from '../../assets/passesimg.jpg'

const Passes = () => {
  return (
      <section className='bg-center bg-cover bg-no-repeat' style={{backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${passes})`, backgroundPosition:"center 25%"}}>
            <div className='container h-[500px] md:h-[750px] md:pl-[61px]  md:pr-[57px]  text-white' >
                <div className=' text-center md:text-left'>
                <h1 className='md:w-[1017px] pt-[120px] md:pt-[200px] font-semibold text-[36px] md:text-[72px] leading-[54px] md:leading-[108px] tracking-[-0.02em]'>View Passes We’ve Made Available For You</h1>
                <button className='btn mt-[40px] md:mt-[71px]'>View Passes</button>
                </div>
            </div>
      </section>
    
  )
}

export default Passes