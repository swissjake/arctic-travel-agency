
const Hero = () => {
  return (
    <section >
         <div className="container md:pl-[61px] p-[20px] md:pr-[57px]">
           {/* <img src={heroImage} alt="" /> */}
           <div className="pt-[160px] text-center md:text-left md:pt-[200px] text-white ">
           <h1 className="md:w-[46.6rem] md:whitespace-nowrap text-[32px] md:text-[56px] capitalize font-bold tracking-{-0.03em}">Plan the perfect winter trip</h1>
           <p className="md:w-[33rem] text-[14px] md:text-[22px] font-normal tracking-[-0.01em] mt-[20px]">Easily plan your ideal ski trip from home with the help of professionals</p>
           <button className="btn">Book Now</button>
           </div>
        </div>
    </section>
    
  )
}

export default Hero

//background: linear-gradient(180deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.580838) 32.24%, rgba(0, 0, 0, 0.486293) 62.09%, rgba(0, 0, 0, 0) 98.06%);
