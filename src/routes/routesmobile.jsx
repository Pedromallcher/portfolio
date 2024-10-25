import { BrowserRouter, Routes , Route } from "react-router-dom";
//import components
import { HomeMobile } from "../screens/mobile/homeMobile";



export function RoutesMobile(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element= { <HomeMobile/> } ></Route>
           
           
        </Routes>
        </BrowserRouter>
    )
}
