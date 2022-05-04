import React from 'react'
import region1 from '../../assets/region1.png'
import region2 from '../../assets/region2.png'
import region3 from '../../assets/region3.png'


const Region = () => {
  return (
      <section>
             <div className=''>
                 <div className='flex '>
             <div className='flex-1'>
             <img className="w-full" src={region1} alt="/"/>
             </div>
                
               <div className="flex-1"> 
               <img className="w-full" src={region2} alt="/" />
                 
               </div>
             
             <div className="flex-1"> 
                <img className='w-full'  src={region3} alt="/" />
            </div>
               
           
                 
            </div>
            </div>
      </section>
   
  )
}

export default Region