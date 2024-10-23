import './componentsdesktop.css'
import { Link } from 'react-router-dom'
import imgPerfil from '../../../assets/svg-removebg-preview.png'
import placeholder from '../../../assets/placeholder.png'
import { FaExternalLinkAlt } from "react-icons/fa";
import { PiCoffeeFill } from "react-icons/pi";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { FaBookSkull } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";



export const ProjectDesktop = (props) => {
    return (
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
            <div className='blocos-component'>
                <div className='inf-top-blocos'>
                    <h1>Projetos</h1>
                    <h1>2023--2025</h1>
                    </div>
            <div className='fila1-blocos'>
                <div className='fila1-bloco1'>
                    <div className='img-bloco1-projetos'>
                        <img src={ placeholder} alt="" />
                    </div>
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
                <div className='fila1-bloco2'>
                <div className='img-bloco1-projetos'>
                        <img src={ placeholder} alt="" />
                    </div>
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
                <div className='fila1-bloco3'>
                <div className='img-bloco1-projetos'>
                        <img src={ placeholder} alt="" />
                    </div>
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
            <div className='fila2-blocos'>
            <div className='fila2-bloco1'>
                <div className='content-img-box-fila2'></div>
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
            <div className='fila2-bloco2'>
            <div className='content-img-box-fila2'></div>
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