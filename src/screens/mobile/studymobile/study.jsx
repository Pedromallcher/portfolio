import { NavbarMobile } from '../../../components/mobile/navbar/navbar'
import '../globalmobile.css'
import '../home/homestyle.css'
import './studystyle.css'


export const Study = () => {
    return (
        <div className='content-mobile'>
            <div className='content-study-mobile'>
            <NavbarMobile/>
            <div className='title-study'>
                <h1>Study</h1>
            </div>

            <div className='box-study-rolet'>
                <div className='content-box-study'>
                    <h3>React Web</h3>
                    <div className='boxs-study'>
                    <div className='box1study'></div>
                    <div className='box2study'></div>
                    <div className='box3study'></div>
                    <div className='box3study'></div>
                    </div>
                   

                </div>

            </div>

            <div className='box-study-rolet'>
                <div className='content-box-study'>
                    <h3>React Native</h3>
                    <div className='boxs-study'>
                    <div className='box1study'></div>
                    <div className='box2study'></div>
                    <div className='box3study'></div>
                    <div className='box3study'></div>
                    </div>
                   

                </div>

            </div>


            <div className='box-study-rolet'>
                <div className='content-box-study'>
                    <h3 className='h3study'>JavaScript</h3>
                    <div className='boxs-study'>
                    <div className='box1study'></div>
                    <div className='box2study'></div>
                    <div className='box3study'></div>
                    <div className='box3study'></div>
                    </div>
                   

                </div>

            </div>
            
            







            </div>
        </div>

    )
}