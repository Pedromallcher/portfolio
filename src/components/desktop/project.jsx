import './componentsdesktop.css'
import imgPerfil from '../../assets/svg-removebg-preview.png'
import { PiCoffeeFill } from "react-icons/pi";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { FaBookSkull } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";


export const ProjectDesktop = () => {
    return (
        <div className="content-project-component">
              <div className='box-perfil'>
                <div className='img-perfil'> <img src={imgPerfil} alt="" /> <h3>@pedromallcher</h3></div>
                <div className='option-menubox'>
                    <a href=""><PiCoffeeFill className='icon-option'/>Home</a>
                    <a href="">< PiProjectorScreenChartFill className='icon-option'/>Projetos</a>
                    <a href="">< FaBookSkull className='icon-option'/>Case Study</a>
                    <a href=""><  FaAddressCard className='icon-option'/>About me</a>
                    
                    

                </div>

               


            </div>
            <div className='box-content-principal'>

            <div className='file1-box-content-principal'>
                <div className='bloco1-boc-content-principal'></div>
                <div className='bloco2-boc-content-principal'></div>
                <div className='bloco3-boc-content-principal'></div>
               
            </div>

            <div className='file2-box-content-principal'>
                <div className='bloco4-boc-content-principal'></div>
                <div className='bloco5-boc-content-principal'></div>
               
               
            </div>

            



            </div>

            
        </div>



    )
}