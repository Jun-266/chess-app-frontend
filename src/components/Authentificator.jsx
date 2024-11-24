import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Authentificator( ){
    const [token, setToken] = useState(localStorage.getItem("token"));
    const nav = useNavigate();

    const validateToken = () => {
        if (!token) {
            console.log("No token found, redirecting to register");
            nav("/register");
        }
    }


    useEffect(() => {
        validateToken();
    }, [token])

    return(
        <div>
            <h1>
                Authenticator
            </h1>
            <div style={{display:'flex', flexDirection:'row'}}>
                <button onClick={() => nav('/')}>Inicio</button>
                <button onClick={() =>nav('/register')}>Registro</button>
                {/* <button onClick={() =>nav(/chat/${token ? "user" : ""})}>Chat</button> */}
            </div>
            {token && <Outlet />}
        </div>
    )
}