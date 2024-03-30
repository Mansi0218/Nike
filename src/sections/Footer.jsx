import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"


const Footer = () => {
  return (
    <footer className="max-container">

      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">

        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={110} height={32} alt="" />
          </a>
          <p className="mt-6 text-[13px] leading-7 font-montserrat text-white-400 sm:max-w-sm">Get shoes ready for the new tern at your nearest Nike store. Find your perfect Size in the Store. Get rewards.</p>

          <div className="flex items-center gap-5 mt-8">
           
            {socialMedia.map((icon, index)=>(
              <div key={index} className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                 <img src={icon.src} alt={icon.alt} width={20} height={20}  />
              </div>
            ))}
          </div>
          
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {
          footerLinks.map((section, index)=>(
            <div key={index}>
              <h4 className="text-white font-montserrat text-xl leading-normal font-medium mb-6">{section.title}</h4>
              
                <ul>
                  {section.links.map((link)=>(
                  <li key={link.name} className="mt-3 text-white-400 font-montserrat text-[13px] leading-normal hover:text-slate-gray cursor-pointer">
                    <a  href={link.name}>{link.name}</a>
                  </li>
                ))}
                </ul>
              
            </div>
          )
          )
          }

        </div>
        
      </div>


      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="Copyright Sign" width={20} height={20} className="rounded-full m-0" />
          <p>Copyright. All Rights Reserved</p>
          
        </div>
        <p className=" font-montserrat cursor-pointer ">Terms & Conditions</p>
      </div>


    </footer>
  )
}

export default Footer
