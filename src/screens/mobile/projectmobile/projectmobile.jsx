import '../globalmobile.css'
import '../home/homestyle.css'
import './projectstyle.css'
import { NavbarMobile } from '../../../components/mobile/navbar/navbar'
import { FaExternalLinkAlt } from "react-icons/fa";
export const ProjectMobile = () => {
    return (

        <div className="content-mobile">
            <NavbarMobile/>

        <div className='projectmobile-content'>
        <div className='title-project'>
                <h1>Projetos</h1>
            </div>


            <div className='box-projects-mobile'>
                <div className='b1-projects'>

                    <div className='img-b'></div>
                    <div className='legend-projects'>
                        <p>React</p>
                        <p>Css</p>
                        <p>Js</p>

                    </div>

                    <div className='title-project-mobile'>
                        <h3>Project</h3>
                        <FaExternalLinkAlt className='icon-title-project'/>
                    </div>
                </div>

                <div className='b2-projects'>
                <div className='img-b'></div>
                <div className='legend-projects'>
                        <p>React</p>
                        <p>Css</p>
                        <p>Js</p>

                    </div>
                <div className='title-project-mobile'>
                        <h3>Project</h3>
                        <FaExternalLinkAlt className='icon-title-project'/>
                    </div>
                </div>

                <div className='b3-projects'>
                <div className='img-b'></div>
                <div className='legend-projects'>
                        <p>React</p>
                        <p>Css</p>
                        <p>Js</p>

                    </div>
                <div className='title-project-mobile'>
                        <h3>Project</h3>
                        <FaExternalLinkAlt className='icon-title-project'/>
                    </div>
                </div>


            </div>

        </div>
          
        </div>

    )
}