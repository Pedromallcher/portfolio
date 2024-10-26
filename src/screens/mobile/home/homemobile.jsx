import '../globalmobile.css'
import './homestyle.css'
import { NavbarMobile } from '../../../components/mobile/navbar/navbar'

//imports
import perfilhomemobile from '../../../assets/svg-removebg-preview.png'
import { MdOutlinePlace } from "react-icons/md";
import { TbSchool } from "react-icons/tb";

export const HomeMobile = () => {
    return (
        <div className="content-mobile">
            <NavbarMobile/>
            <div className='homemobile-content'>
               
                <div className='box-perfil-mobile'>
                    <div className='img-perfil-mobile'>
                        <img src={perfilhomemobile} alt="" />
                        <h3>@pedromallcher</h3>
                    </div>

                </div>
                <div className='description-me'>
                    <div className='top-tittle'>
                        <div className='title-top-home'>
                            <h3>Olá,me chamo Pedro</h3>
                        </div>
                        <div className='information-top-home'>
                            <p><MdOutlinePlace className='icon-space'/>Santarém</p>
                            <p><TbSchool className='icon-space'/>universidade</p>

                        </div>
                    </div>
                    <div className='txt-description-me'>
                        <p>Sou graduado em Redes de Computadores e atualmente 
                                    curso Engenharia de Software. Tenho experiência 
                                    diversificada no setor de tecnologia, atuando 
                                    em diferentes áreas, desde o desenvolvimento de 
                                    software até o gerenciamento de infraestruturas de TI.
                                     Ao longo da minha carreira, já trabalhei em diversas 
                                     frentes tecnológicas, adquirindo uma visão ampla e integrada dos 
                                    desafios e soluções no mundo da tecnologia.</p>

                    </div>


                    
                </div>







            </div>

        </div>


    )
}