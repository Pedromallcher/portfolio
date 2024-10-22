import { BrowserRouter, Routes , Route } from "react-router-dom";
//import components
import {HomeDesktop} from "../screens/desktop/home/appDesktop"
import { ProjectDesktop} from '../components/desktop/projetosComponent/project'

export function AppRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element= { <HomeDesktop /> } ></Route>
            <Route path="/projetos" element= { <ProjectDesktop /> } ></Route>
        </Routes>
        </BrowserRouter>
    )
}
