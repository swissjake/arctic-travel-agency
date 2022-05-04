import React from 'react'
import aeroplane from "../../assets/aeroplane.svg"
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"
import twitter from "../../assets/twitter.svg"


const social=[facebook,twitter,instagram]
const company=["about","careers","mobile"]
const contact=["faq","careers","affiliates"]
const more=["airlines","airfees","lowfare tips"]





const Footer = () => {
  return (
      <footer className=''>
         <div className="container p-[20px] md:pl-[61px] md:pr-[57px]">
            <div className="">

<div className="mb-5">
  <img src={aeroplane} className="mb-" alt="aeroplane" />
  <p className="capitalize text-2xl font-bold">artic travels</p>
  <p className="capitalize mt-[16px] mb-[34px]">Book your trip in minutes, get full
control for much longer.</p>
<div className="flex mt-5">

  {social.map((item,index)=> (<img src={item} className="mx-2 " alt="icons" />))}
</div>
</div>

<div className='mb-5'>
  <h2 className="text-[#3E86F5] uppercase">company</h2>
  <ul>
    {company.map((item,index)=>(
      <li className="capitalize leading-10">{item}</li>
    ))}
  </ul>
</div>

<div className='mb-5'>
  <h2 className="text-[#3E86F5] uppercase">contact</h2>
  <ul>
    {contact.map((item,index)=>(
      <li className="capitalize leading-10">{item}</li>
    ))}
  </ul>
</div>

<div className='mb-5'>
  <h2 className="text-[#3E86F5] uppercase">more</h2>
  <ul>
    {more.map((item,index)=>(
      <li className="capitalize leading-10">{item}</li>
    ))}
  </ul>
</div>
      

              </div>
         </div>
      </footer>
   
  )
}

export default Footer