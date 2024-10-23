
import './casestudy.css'
import { Link } from 'react-router-dom'
import imgPerfil from '../../../assets/svg-removebg-preview.png'

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
                <Link to="/casestudy"><FaBookSkull className='icon-option'/><p className='option-projetos'>Case Study</p></Link>
                <Link to="/about">< FaAddressCard className='icon-option'/><p className='option-projetos'>Sobre</p></Link>
                </div>
            </div>

            <div className='box-content-study'>
            <div className='inf-top-blocos'>
                    <h1>Guia Prograçao</h1>
                    
                    </div>
                
                <div className='fila1-box-study'>
                    
                    <div className='box1-fila1-study'>
                        <div className='img-box1-fila1-study'></div>
                        <div className='legend-blocos-blocos'>
                        <h3>proje</h3>
                        <h3>proje</h3>
                        <h3>proje</h3>
                    </div>
                    <div className='title-blocos-rodape'>
                        <h2>Title</h2>
                        <FaExternalLinkAlt/>
                    </div>
                        

                    </div>
                    <div className='box2-fila1-study'>

                    <div className='img-box1-fila1-study'></div>
                        <div className='legend-blocos-blocos'>
                        <h3>proje</h3>
                        <h3>proje</h3>
                        <h3>proje</h3>
                    </div>
                    <div className='title-blocos-rodape'>
                        <h2>Title</h2>
                        <FaExternalLinkAlt/>
                    </div>
                    </div>
                    <div className='box2-fila1-study'>
                    <div className='img-box1-fila1-study'></div>
                        <div className='legend-blocos-blocos'>
                        <h3>proje</h3>
                        <h3>proje</h3>
                        <h3>proje</h3>
                    </div>
                    <div className='title-blocos-rodape'>
                        <h2>Title</h2>
                        <FaExternalLinkAlt/>
                    </div>
                        
                    </div>

                </div>

                <div className='fila2-box-study'>
                <div className='box3-fila2-study'>
                    <div className='img-box-fila2-study'> </div>
                    <div className='legend-blocos-blocos'>
                        <h3>proje</h3>
                        <h3>proje</h3>
                        <h3>proje</h3>
                    </div>
                    <div className='title-blocos-rodape'>
                        <h2>Title</h2>
                        <FaExternalLinkAlt/>
                    </div>


                    </div>

                </div>

                

            </div>


          
            </div>

           
           

            


        </div>

        

    )
}