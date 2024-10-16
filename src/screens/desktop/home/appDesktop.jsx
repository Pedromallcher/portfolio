import './styleHomeDesktop.css'

//imports
import imgPerfil from '../../../assets/svg-removebg-preview.png'

//imports icons
import { PiCoffeeFill } from "react-icons/pi";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { FaBookSkull } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";

export const HomeDesktop = () => {
    return (
        <div className="content-home-desktop">
            
        <div className='box-principal'>
            <div className='box-perfil'>
                <div className='img-perfil'> <img src={imgPerfil} alt="" /> <h3>@pedromallcher</h3></div>
                <div className='option-menubox'>
                    <a href=""><PiCoffeeFill className='icon-option'/>Home</a>
                    <a href="">< PiProjectorScreenChartFill className='icon-option'/>Projetos</a>
                    <a href="">< FaBookSkull className='icon-option'/>Case Study</a>
                    <a href=""><  FaAddressCard className='icon-option'/>About me</a>
                    
                    

                </div>


            </div>





            <div className='box-content-4'>
                <div className='bloco1'>
                    <div className='bloco1-1'>
                        <div className='bloco1-2'>bloco2</div>
                        <div className='bloco1-3'>bloco3</div>
                    </div>
                    <div className='bloco2-1'>
                        <div className='bloco2-2'>bloco4</div>
                        <div className='bloco2-3'>bloco5</div>

                       
                    </div>

                    <div className='bloco3-1'>
                        <div className='bloco3-2'>bloco6</div>
                       
                    </div>




                </div>

                <div className='bloco4-1'>
                    <div className='bloco4-2'><h1></h1></div>
                    <div className='bloco4-3'><h1></h1></div>

                </div>
                
              
             


            </div>


        </div>
     
        

        </div>


    )
}