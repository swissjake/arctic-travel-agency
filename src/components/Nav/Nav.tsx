import React, {useState} from 'react'
import aeroplane from "../../assets/aeroplane.svg";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Nav = () => {
  const [close, setClose]=useState(true)


  const navitems:string[] = ["About us", "Support", "Language"];
  return (
    <section className=''>
<div className='container  top-0 flex md:pl-[61px] justify-between p-[20px] md:pr-[57px]'>
  <div className="flex items-center">
  <img src={aeroplane} className="mr-[10px]" alt="aeroplane" />
  <h2 className='capitalize font-bold text-white mr-[56px]'>artic travels</h2>
 <ul className="inline hidden md:block">
   {navitems.map((item:string, index) => <li key={index} className="inline capitalize text-white mr-[40px]"><button>{item}</button></li>)}
 </ul>
  </div>

  <button className='hidden md:block text-[#3E86F5] h-[48px] rounded-[10px] w-[151px] bg-white'>
  Sign in
</button>
<button className='md:hidden block' onClick={()=>setClose(!close)}>
<AiOutlineMenu size={20} className='text-white'/>
</button>
</div>
<div style={{width:close?"0%":"100%",transition:"all .5s"}} className="fixed md:hidden block overflow-hidden  flex h-[100%] top-0 bg-black z-50">
<ul className="inline m-auto">
   {navitems.map((item:string) => <li className="leading-10 text-white"><button onClick={()=>setClose(true)} className="capitalize">{item}</button></li>)}
 </ul>
 <button className='hidden text-[#3E86F5] h-[48px] rounded-[10px] w-[151px] bg-white'>
  Sign in
</button>


<button onClick={()=>setClose(!close)} className="absolute top-[5%] right-[5%] border-white border-[4px] font-bold p-1 rounded-full"><AiOutlineClose size={20} className='fill-white'/></button>

</div>

    </section>
  )
}

export default Nav

// npm install @mui/icons-material
