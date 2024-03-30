import Button from "../Components/Button"
import ShoeCard from "../Components/ShoeCard"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import { shoes, statistics } from "../constants"
import { useState } from "react"


const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container  ">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x  pt-28  ">
        <p className=" text-md font-montserrat text-coral-red"> Our Summer Collections</p>
        <h1 className=" mt-2 font-palanquin text-[4.4rem] max-sm:text-[60px]  font-bold ">
          <span className=" xl:bg-white xl:whitespace-nowrap relative z-10 pr-10  ">The New Arrival</span> 
        <br />
          <span className="text-coral-red inline-block ">Nike</span> Shoes 
        </h1>
        <p className=" font-montserrat text-slate-gray text-sm leading-5 mt-2 mb-2 sm:max-w-sm ">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label="Shop Now" iconUrl={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-6 gap-8">
          {statistics.map((stat, index) =>(
            <div key={index} >
              <p className=" text-3xl font-palanquin font-bold">{stat.value}</p>
              <p className=" leading-2 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
           )) 
          } 
        </div>
      </div>
      
      <div className=" relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-36 bg-white bg-hero bg-cover bg-center ">
        <img src={bigShoeImg} alt=" Shoe Collection" width={360} height={250} className="object-contain relative z-10  " />
     

      <div className="flex sm:gap-6 gap-4 absolute -bottom-[10%] sm:left-[10%] max-sm:px-6">
        {shoes.map((image, index) =>(
          <div key={index}>
            <ShoeCard imgUrl={image}  changeBigShoeImage={(shoe)=>{setBigShoeImg(shoe)}} bigShoeImg={bigShoeImg} />
            
          </div>
        ))}
      </div>
     

 </div>
    </section>
    
  )
}

export default Hero
