
import '../globalmobile.css'
import '../studymobile/studystyle.css'
import './aboutstyle.css'
import '../../../components/desktop/about/about.css'
import { NavbarMobile } from '../../../components/mobile/navbar/navbar'


export const Aboutmobile = () => {
    return (
        <div className='content-mobile'>
            <NavbarMobile/>
            <div className='about-content-mobile'>
            <div className='title-study'>
                <h1>Sobre</h1>
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
                            <div className='textbox-direita-space'>
                                <h3>Desenvolvedor Freelancer</h3>
                                <p>Textttttttttttttttttttttttt</p>
                            </div>
                            <div className='legend1-box-esquerda'>
                                    <h3>2022</h3>
                                    <p>blabalabaklbal</p>
                                    

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