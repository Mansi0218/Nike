import {headerLogo} from '../assets/images';
import {hamburger, DarkModeIcon} from '../assets/icons'
import { navLinks } from '../constants';



const Nav = () => {

  return (
    <header className='padding-x py-8 absolute z-10 w-full '>
      <nav className=' flex justify-between items-center max-container'>
        <a href="/">
            <img src={headerLogo} alt="logo" width={100} height={21} />
        </a>
        <ul className=' flex-1 flex justify-center  items-center gap-16 max-lg:hidden  '>
          {navLinks.map((item) => (
           <li key={item.label}>
            <a href={item.href}
            className='font-montserrat leading-normal text-lg text-slate-gray  hover:font-semibold  '>{item.label}</a>
            
           </li>
          ))}
        </ul>

       

        <div className='hidden max-lg:block p-2 cursor-pointer bg-white border border-fuchsia-200 hover:bg-slate-300 rounded-full ' >
          <img src={hamburger} alt="Hamburger" width={25} height={25}  />
          
        </div>
      </nav>
    </header>
  )
}

export default Nav;
