
const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex-1 sm:w-{300px] sm:min-w-[300px] w-full rounded-[20px] shadow-3xl px-8 py-14  ">
     <div className="w-10 h-10 flex justify-center items-center bg-coral-red rounded-full">
         <img src={imgURL} alt={label} width={24} height={24} /> </div> 
         <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
         <p className="mt-3 break-words font-montserrat leading-normal text-slate-gray">{subtext}</p>
    </div>
  )
}

export default ServiceCard
