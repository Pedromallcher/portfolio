import { Link } from 'react-router-dom';
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
          <Link to="/"> <IoMdHome className='icon-nav'/>Home</Link>
          <Link to="/project"> <PiProjectorScreenChartFill className='icon-nav'/>Project</Link>
          <Link to="/study"> <FaBookSkull className='icon-nav'/>Study</Link>
          <Link to="/"> <FaAddressCard className='icon-nav'/>Sobre</Link>
          
              

           </nav>

        </div>
        
        
        </>
       


    )
}