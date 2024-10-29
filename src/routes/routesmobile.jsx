import { BrowserRouter, Routes , Route } from "react-router-dom";
//import components
import { HomeMobile } from "../screens/mobile/home/homemobile";
import { ProjectMobile } from "../screens/mobile/projectmobile/projectmobile";
import { Study } from "../screens/mobile/studymobile/study";
import { Aboutmobile } from "../screens/mobile/about/aboutmobile";



export function RoutesMobile(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element= { <HomeMobile/> } ></Route>
            <Route path="/project" element= { <ProjectMobile/> } ></Route>
            <Route path="/study" element= { <Study/> } ></Route>
            <Route path="/about" element= { <Aboutmobile/> } ></Route>
           
           
        </Routes>
        </BrowserRouter>
    )
}
