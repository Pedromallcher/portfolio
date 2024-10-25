import '../globalmobile.css'
import './homestyle.css'
import { NavbarMobile } from '../../../components/mobile/navbar/navbar'

//imports
import perfilhomemobile from '../../../assets/svg-removebg-preview.png'

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
            </div>

        </div>


    )
}