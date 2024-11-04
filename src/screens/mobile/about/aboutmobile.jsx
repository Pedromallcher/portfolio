import '../globalmobile.css'
import '../studymobile/studystyle.css'
import './aboutstyle.css'
import '../../../components/desktop/about/about.css'
import { NavbarMobile } from '../../../components/mobile/navbar/navbar'

export const Aboutmobile = () => {
    return (
        <div className='mobile-content'>
            <NavbarMobile />
            <div className='about-section'>
                <div className='about-title'>
                    <h1>Sobre</h1>
                </div>

                <div className='timeline-section'>

                    {/* Primeiro evento */}
                    <div className='event-box'>
                        <h3>2020-2021</h3>
                        <h4>Extrafarma</h4>
                        <p>Trabalhei na área de atendimento ao cliente e suporte farmacêutico.</p>
                    </div>

                    {/* Linha de conexão para o próximo evento */}
                    <div className="connecting-line"></div>

                    {/* Segundo evento */}
                    <div className='event-box'>
                        <h3>2022</h3>
                        <h4>Desenvolvedor Freelancer</h4>
                        <p>Desenvolvi projetos para clientes focados em aplicações web.</p>
                    </div>

                    <div className="connecting-line"></div>

                    {/* Terceiro evento */}
                    <div className='event-box'>
                        <h3>2021</h3>
                        <h4>Alphabet</h4>
                        <p>Trabalhei em projetos de inovação e pesquisa.</p>
                    </div>

                    <div className="connecting-line"></div>

                    {/* Quarto evento */}
                    <div className='event-box'>
                        <h3>2023</h3>
                        <h4>Startup XYZ</h4>
                        <p>Colaborei em desenvolvimento de produtos digitais inovadores.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
