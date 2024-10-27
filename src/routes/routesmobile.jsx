import { BrowserRouter, Routes , Route } from "react-router-dom";
//import components
import { HomeMobile } from "../screens/mobile/home/homemobile";
import { ProjectMobile } from "../screens/mobile/projectmobile/projectmobile";



export function RoutesMobile(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element= { <HomeMobile/> } ></Route>
            <Route path="/project" element= { <ProjectMobile/> } ></Route>
           
           
        </Routes>
        </BrowserRouter>
    )
}
