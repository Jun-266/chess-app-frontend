import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
// import Chat from "../components/Chat";
import Authentificator from "../components/Authentificator";
// import RegisterPage from "../pages/RegisterPage";
import Home from '../pages/Home'
import UserDetails from '../pages/userDetails'
import Header from '../components/header'
import HomePage from "@/pages/homePage";
import Options from "../pages/Options";
import App from '../App';

const router = createRoutesFromElements([


    <Route path="/" element={<Home />}>
        <Route path="*" element={<div>Not found</div>}/>

    </Route>,
    <Route path="/options" element={<Options/>}/>,
    <Route path="/header" element={<Header />}>
    </Route>,
    <Route path="/profile" element={<UserDetails/>}/>,
    <Route path="/custom-game" element={<App/>}/>,
])

export const routes = createBrowserRouter(router);