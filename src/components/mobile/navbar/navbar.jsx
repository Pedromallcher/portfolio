
import './stylenavbarmobile.css'
import { IoMdHome } from "react-icons/io";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { FaBookSkull } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";



export const NavbarMobile  = () => {
    return (

        <>
        <div className='content-navbar'>
           <nav className='box-nav'>
                <a href=""><IoMdHome className='icon'/>Home</a>
                <a  href=""><PiProjectorScreenChartFill className='icon'/>Projetos</a>
                <a href=""><FaBookSkull className='icon'/>Study</a>
                <a href=""><FaAddressCard className='icon'/>About</a>
              

           </nav>

        </div>
        
        
        </>
       


    )
}