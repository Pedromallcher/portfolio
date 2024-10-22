
import './casestudy.css'
import { Link } from 'react-router-dom'
import imgPerfil from '../../../assets/svg-removebg-preview.png'
import ThumbIa from '../../../assets/thumbnailIA.png'
import { FaExternalLinkAlt } from "react-icons/fa";
import { PiCoffeeFill } from "react-icons/pi";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { FaBookSkull } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";

export const CaseStudy = () =>{
    return(

        <div className="content-project-component">
            <div className='box-principal-component'>
            <div className='box-perfil-component'>
            <div className='img-perfil-component'> <img src={imgPerfil} alt="" /> <h3>@pedromallcher</h3></div>
                <div className='option-menubox-component'>
                <Link to="/"><PiCoffeeFill className='icon-option'/>Home</Link>
                <Link to="/projetos"><PiProjectorScreenChartFill className='icon-option'/><p className='option-projetos'>Projetos </p></Link>
                <Link to="/casestudy"><FaBookSkull className='icon-option'/>Case Study</Link>
                <Link to="">< FaAddressCard className='icon-option'/>Sobre</Link>
                </div>
            </div>

          
            </div>

           

            


        </div>

        

    )
}