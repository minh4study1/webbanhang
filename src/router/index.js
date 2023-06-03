import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "../page/login";
import React from "react";
import Signup from "../page/signup";
import Main from "../page/main";
function Router() {
    return(
    <BrowserRouter>
    <Routes>
        <Route path={"/"} element={<Login/>}/> 
        <Route path={"/signup"} element={<Signup/>}/>
        <Route path={"/main"} element={<Main/>}/>                
        </Routes>
        </BrowserRouter>
    )
}
export default Router;