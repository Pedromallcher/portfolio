import './styleHomeDesktop.css'
import '../../../components/desktop/projetosComponent/componentsdesktop.css'

import React from 'react';
import { Link } from 'react-router-dom';

//imports
import imgPerfil from '../../../assets/svg-removebg-preview.png'

//imports icons
import { PiCoffeeFill } from "react-icons/pi";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { FaBookSkull } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { MdOutlinePlace } from "react-icons/md";
import { TbSchool } from "react-icons/tb";
import ReactWeb from '../../../assets/web.png'
import ReactNative from '../../../assets/native.png'
import Css from '../../../assets/css-3.png'
import Html from '../../../assets/html.png'
import Js from '../../../assets/java-script.png'


export const HomeDesktop = () => {
    return (
        <div className="content-home-desktop">
            
        <div className='box-principal'>
            <div className='box-perfil'>
                <div className='img-perfil'> <img src={imgPerfil} alt="" /> <h3>@pedromallcher</h3></div>
                <div className='option-menubox'>
                <Link to="/"><PiCoffeeFill className='icon-option'/><p className='option-projetos'>Home</p></Link>
                <Link to="/projetos"><PiProjectorScreenChartFill className='icon-option'/><p className='option-projetos'>Projetos </p></Link>
                <Link to="/casestudy"><FaBookSkull className='icon-option'/><p className='option-projetos'>Case Study</p></Link>
                <Link to="/about">< FaAddressCard className='icon-option'/><p className='option-projetos'>Sobre</p></Link>
                   
                </div>
            </div>





            <div className='box-content-4'>
                <div className='bloco1'>
                    <div className='bloco1-1'>
                        <div className='bloco1-2'>
                            <div className='txt-bloco1-2'>
                            <h3>80+</h3>
                            <p>Projetos Concluidos</p>
                            </div>
                            
                        </div>
                        <div className='bloco1-3'>
                        <div className='txt-bloco1-2'>
                            <h3>3+<span> anos</span></h3>
                            <p>Experiencia em Desenvolvimento</p>
                            </div>
                        </div>
                    </div>
                    <div className='bloco2-1'>
                        <div className='bloco2-2'>
                        <div className='txt-bloco2-2'>
                            <h3>Skills</h3>
                            
                            <div className='icons-skills'>
                                <img src={ReactWeb}  />
                                <img src={ReactNative}  />
                                <img src={Css}  />
                                <img src={Html}  />
                                <img src={Js}  />

                            </div>
                           
                            </div>


                        </div>
                        <div className='bloco2-3'></div>
                       

                       
                    </div>

                    <div className='bloco3-1'>
                        <div className='bloco3-2'>
                            <div className='bloco3-2-content'>
                                <div className='bloco3-2-title'>
                                    <h3>Projetos Futuros</h3>
                                </div>

                                <div className='bloco3-2-p'>
                                    <p>Ver mais</p>
                                </div>

                                <div className='box-img-bloco3-2'>
                                   

                                </div>

                            </div>

                        </div>
                        <div className='bloco3-3'>Teste de rotas</div>
                       
                    </div>




                </div>

                <div className='bloco4-1'>
                    <div className='bloco4-2'>
                    <div className='me-box'>
                        <div className='me-top'>
                            <h3>Olá , me chamo Pedro</h3>
                            <div className='inf-local-me'>
                                <p>< MdOutlinePlace className='icon-inf-local-me'/>Santarém</p>
                                <p><TbSchool className='icon-inf-local-me'/>Unama</p>
                            </div>
                        </div>
                    </div>
                    <div className='txt-me-box'>
                                <h3>Sou graduado em Redes de Computadores e atualmente 
                                    curso Engenharia de Software. Tenho experiência 
                                    diversificada no setor de tecnologia, atuando 
                                    em diferentes áreas, desde o desenvolvimento de 
                                    software até o gerenciamento de infraestruturas de TI.
                                     Ao longo da minha carreira, já trabalhei em diversas 
                                     frentes tecnológicas, adquirindo uma visão ampla e integrada dos 
                                    desafios e soluções no mundo da tecnologia. 
                                </h3>

                            </div>


                    </div>
                    

                </div>
                
              
             


            </div>


        </div>
     
        

        </div>


    )
}