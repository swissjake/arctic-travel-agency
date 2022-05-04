import React from 'react'
import picture1 from "../../assets/picture1.png"
import picture2 from "../../assets/picture2.png"
import picture3 from "../../assets/picture3.png"
import picture4 from "../../assets/picture4.png"
const Resort = () => {
  return (
 <section>
   <div className="container p-[20px] pt-[179px] md:pl-[40px]">
<div className="md:flex gap-5 justify-between">

  <div className="flex-1">
  <p className="text-[3rem] md:w-[80%] w-full mb-[4.5rem] font-[600] tracking-[-0.02em]">The best resorts to chill and relax</p>
  <div className="w-full md:flex justify-end flex-wrap">
  <img src={picture1} className="mb-[32px] mx-auto" alt="" />
<img src={picture2} className="mb-[32px] mx-auto" alt="" />
  </div>

  </div>

<div className="flex-1">
<img src={picture3} className="mb-5 mb-[32px] md: mx-auto" alt="" />
<img src={picture4} className="mx-auto" alt="" />
</div>
  
  </div>
   </div>
 </section>
  )
}

export default Resort