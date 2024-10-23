import './about.css'
import imgPerfil from '../../../assets/svg-removebg-preview.png'
import { Link } from 'react-router-dom'
import { FaExternalLinkAlt } from "react-icons/fa";
import { PiCoffeeFill } from "react-icons/pi";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { FaBookSkull } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";






export const About = () => {
    return (
        <div className="content-project-component">
        <div className='box-principal-component'>
        <div className='box-perfil-component'>
        <div className='img-perfil-component'> <img src={imgPerfil} alt="" /> <h3>@pedromallcher</h3></div>
        
            <div className='option-menubox-component'>
            <Link to="/"><PiCoffeeFill className='icon-option'/>Home</Link>
            <Link to="/projetos"><PiProjectorScreenChartFill className='icon-option'/><p className='option-projetos'>Projetos </p></Link>
            <Link to="/casestudy"><FaBookSkull className='icon-option' /><p  className='option-projetos'>Case Study</p></Link>
            <Link to="/about">< FaAddressCard className='icon-option'/><p className='option-projetos'>Sobre</p></Link>
            </div>
        </div>

        <div className='box-content-about'>
            
       
            
            

            

        </div>


      
        </div>

       
       

        


    </div>

    

    )
}