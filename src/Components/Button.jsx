

const Button = ({label, iconUrl, backgroundColor, borderColor, textColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-4 py-2 border font-montserrat text-sm leading-none rounded-full ${fullWidth && 'w-full'}  
     ${backgroundColor? `${backgroundColor} ${borderColor} ${textColor}` : "bg-coral-red border-coral-red text-white"}
      `}>
      {label}
      {iconUrl && <img src={iconUrl} alt="arrow right icon" className="ml-2 rounded-full w-4 h-4 " />}
    </button>
    
  )
}

export default Button
