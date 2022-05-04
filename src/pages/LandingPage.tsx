import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"
import HeroIcons from "../components/HeroIcons/HeroIcons"
import IceCold from "../components/IceCold/IceCold"
import Nav from "../components/Nav/Nav"
import Passes from "../components/Passes/Passes"
import Region from "../components/Region/Region"
import Resort from "../components/Resort/Resort"
import heroImage from '../assets/heroImage.jpeg'


const LandingPage = () => {
  return (
    <>
  <div>
  <div className="h-[780px]  w-full bg-no-repeat bg-center bg-cover" style={{backgroundImage:`linear-gradient(180deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.580838) 32.24%, rgba(0, 0, 0, 0.486293) 62.09%, rgba(0, 0, 0, 0) 98.06%), url(${heroImage})`}}>
     <Nav />
     <Hero />
     
  </div>
 
    <HeroIcons />
    <IceCold />
  </div>
  <Region />
  <Resort/>
  <Passes />
      
     {/*  style={{backgroundImage:`linear-gradient(180deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.580838) 32.24%, rgba(0, 0, 0, 0.486293) 62.09%, rgba(0, 0, 0, 0) 98.06%), url(${heroImage})`}} */}
      
     <Footer/>
    </>
  )
}

export default LandingPage