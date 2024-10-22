import { BrowserRouter, Routes , Route } from "react-router-dom";
//import components
import {HomeDesktop} from "../screens/desktop/home/appDesktop"
import { ProjectDesktop} from '../components/desktop/projetosComponent/project'
import { CaseStudy } from "../components/desktop/casestudy/caseStudy";

export function AppRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element= { <HomeDesktop /> } ></Route>
            <Route path="/projetos" element= { <ProjectDesktop /> } ></Route>
            <Route path="/casestudy" element= { <CaseStudy /> } ></Route>
        </Routes>
        </BrowserRouter>
    )
}
