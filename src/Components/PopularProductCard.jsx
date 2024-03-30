import {star} from '../assets/icons'
const PopularProductCard = ({imgURL, name, price}) => {
    
  return (
    <div className=" flex flex-1 flex-col w-full max-sm:w-full ">
      <img src={imgURL} alt={name}  className="w-[250px] h-[250px] " />
      <div className="mt-2 flex justify-start gap-2.6 ">
        <img src={star} alt="rating" width={20} height={20} />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>(4.5)</p>
      </div>
      <h3 className='mt-1 text-xl leading-normal font-semibold font-palanquin'>{name}</h3>
      <p className='mt-1 font-semibold font-montserrat text-coral-red text-xl leading-normal'>{price}</p>
    </div>
  )
}
 
export default PopularProductCard
