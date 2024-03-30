const ShoeCard = ({imgUrl , changeBigShoeImage, bigShoeImg}) => {

  const handleClick = ( ) =>{
    if(bigShoeImg !== imgUrl.bigShoe){
      changeBigShoeImage(imgUrl.bigShoe)
    }
  
  }
  return (
    <div className= {` border-2 rounded-xl ${bigShoeImg === imgUrl.bigShoe ? 'border-coral-red' : 'border-transparent' } cursor-pointer max-sm:flex-1`} onClick={handleClick}>
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-32 sm:h-32 rounded-xl max-sm:p-4 ">
        <img src={imgUrl.thumbnail} alt="shoeCollection" width={100} height={76} className="object-contain"/>
      </div>
    </div>
  )
}

export default ShoeCard
