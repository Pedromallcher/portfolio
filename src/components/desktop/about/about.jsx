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
                    <div className='img-perfil-component'> 
                        <img src={imgPerfil} alt="Perfil" />
                        <h3>@pedromallcher</h3>
                    </div>
                
                    <div className='option-menubox-component'>
                        <Link to="/"><PiCoffeeFill className='icon-option'/><p className='option-projetos'>Home</p></Link>
                        <Link to="/projetos"><PiProjectorScreenChartFill className='icon-option'/><p className='option-projetos'>Projetos </p></Link>
                        <Link to="/casestudy"><FaBookSkull className='icon-option' /><p className='option-projetos'>Case Study</p></Link>
                        <Link to="/about">< FaAddressCard className='icon-option'/><p className='option-projetos'>Sobre</p></Link>
                    </div>
                </div>

                <div className='box-content-about'>
                    <div className='timeline'>

                        {/* Pontos (bolinhas) independentes na timeline */}
                    

                        <div className='container-direita'>
                            <div className='textbox-direita'>
                                <div className='legend1-box-direita'>
                                    <h3>2020-2021</h3>
                                    <span>Extrafarma</span>

                                </div>
                            </div>
                            <div className='textbox'>
                                <h3>Jovem Aprendiz</h3>
                                <p>Trabalei como....asdaddadasdasdasd</p>
                                
                            </div>
                            
                        </div>

                        <div className="point point-2"></div>

                        <div className='container-esquerda'>
                            <div className='textbox'>
                                <h3>Desenvolvedor Freelancer</h3>
                                <p>Textttttttttttttttttttttttt</p>
                            </div>
                            <div className='legend1-box-esquerda'>
                                    <h3>2022</h3>
                                    

                                </div>
                        </div>

                        <div className="point point-3"></div>

                        <div className='container-direita-space'>
                        <div className='legend1-box-direita'>
                                    <h3>2020-2021</h3>
                                    <span>Extrafarma</span>

                                </div>
                            <div className='textbox-direita-space'>
                                <h3>Alphabet dirieta</h3>
                                <p>Textttttttttttttttttttttttt</p>
                            </div>
                        </div>

                        <div className="point point-4"></div>

                        <div className='container-esquerda-space'>
                            <div className='textbox-esquerda-space'>
                                <h3>Alphabet Incs</h3>
                                <p>Textttttttttttttttttttttttt</p>
                            </div>

                            <div className='legend1-box-esquerda'>
                                    <h3>2020-2021</h3>
                                    <span>Extrafarma</span>

                                </div>
                           
                           
                        </div>
                        <div className="point point-5"></div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
