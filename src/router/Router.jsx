import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
// import Chat from "../components/Chat";
import Authentificator from "../components/Authentificator";
// import RegisterPage from "../pages/RegisterPage";
import Home from '../pages/Home'
import UserDetails from '../pages/holaMundo2'
import Header from '../components/header'
import HomePage from "@/pages/homePage";
import Options from "../pages/Options";

const router = createRoutesFromElements([

    <Route path="/" element={<Home />}>
        <Route path="*" element={<div>Not found</div>}/>

    </Route>,
    <Route path="/test" element={<UserDetails/>}/>,
    <Route path="/options" element={<Options/>}/>
    

    // <Route path="/" element={<Header/>}>
    //     <Route path="/home" element={<Home />}>
    //         {/* <Route path="/register" element={<RegisterPage />} />
    //         <Route path="chat/:user" element={<Chat />} /> */}
        
    //         <Route path="*" element={<div>Not found</div>}/>

    //     </Route>
    // </Route>

    
    

    // <Route path="/" element={<Authentificator />}>
    //     <Route path="/register" element={<RegisterPage />} />
    //     <Route path="chat/:user" element={<Chat />} />
    //     <Route path="*" element={<div>Not found</div>}/>
    // </Route>
])

export const routes = createBrowserRouter(router);