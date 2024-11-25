import { Users, Monitor, Clock } from 'lucide-react'
import GameCard from '../components/GameCard'
import { jwtDecode } from 'jwt-decode'
import React, {useState} from "react"
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';

export default function Options() {
  const nav = useNavigate();
  const [token, setToken] = useState("")
  const [isAuth, setAuth] = useState(true)
  const [userName, setUserName] = useState("")
  const [roles, setRoles] = useState([])
  const [isAdmin,setIsAdmin] = useState(false)
  const gameTypes = [
    {
      mode: "Play Online",
      description: "Play with players around the world ",
      icon: Users
    },
    {
      mode: "Profile",
      description: "See my profile",
      icon: Monitor
    },
    {
      mode: "Play Offline",
      description: "Create a game and invite a friend to play",
      icon: Clock
    }
  ]


  useEffect(() => {

    const url = window.location.href;

    extractTokenFromURL(url);
    let isAuth = false;
    console.log({token});

    const tokenStorage = localStorage.getItem('token');
    // console.log("\nTOKEN STORAGE: ",tokenStorage);

    if (tokenStorage) {
      const decodedData = jwtDecode(tokenStorage);
      // const now = Date.now();
      // const notExpired = decodedData.exp * 1000 > now;
      // console.log("\n DecodeData : ",decodedData);
      const newUserName = decodedData.sub;
      setUserName(newUserName);
      const newRoles = decodedData.roles;
      setRoles(newRoles);
      setIsAdmin(userIsAdmin(newRoles));
    }
  }, []);


  const extractTokenFromURL = (url) =>{
    // Suponiendo que esta es la URL completa

    const urlObj = new URL(url);
    const newToken = urlObj.searchParams.get('token');
    setToken(newToken);
    // console.log("Token extraído:", token);
    localStorage.setItem('token',newToken);

  }
  const handleHolaMundoCLick = () => {
    // console.log("Redirect to test page");
    nav('/test');
  };
  const redirectToAppManagement = (url) => {
    window.location.href = "http://localhost:8081/"+url;
  };
  const handleNavigate = (url) =>{
    nav(url);
  }
  const userIsAdmin = (listOfRoles) =>{
    for (const role of listOfRoles) { // Cambiado a for...of
      if (role === "Administrator") {

        return true;
      }
    }
    return false;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-12">

        <h1 className="text-4xl text-green-400 text-center mb-12">
          Welcome {userName} {isAdmin}
        </h1>

        <h2 className="text-4xl font-bold text-white text-center mb-2">
          Play Chess Online
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Join millions of players from around the world
        </p>

        
        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <button
            className="flex-1 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-4 px-8 rounded-lg border border-blue-700 shadow-lg hover:shadow-blue-900/20 transition-all duration-200 transform hover:-translate-y-1"
            onClick={() => handleNavigate("/onlineGame")}>
            Online Game
          </button>
          
          {
            !isAdmin && <button className="flex-1 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-4 px-8 rounded-lg border border-blue-700 shadow-lg hover:shadow-blue-900/20 transition-all duration-200 transform hover:-translate-y-1"
            onClick={() => handleNavigate("/profile")}>{
              <p>Profile</p>
            }</button>
          }
          {
            isAdmin && <button className="flex-1 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-4 px-8 rounded-lg border border-blue-700 shadow-lg hover:shadow-blue-900/20 transition-all duration-200 transform hover:-translate-y-1"
            onClick={() => redirectToAppManagement("/home")}>{
              <p>List of Users</p>
            }</button>
          }

          <button
            className="flex-1 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-4 px-8 rounded-lg border border-blue-700 shadow-lg hover:shadow-blue-900/20 transition-all duration-200 transform hover:-translate-y-1"
            onClick={() => handleNavigate("/custom-game")}>Custom Game
          </button>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {gameTypes.map((game) => (
            <GameCard key={game.mode} {...game} />
          ))}
        </div> */}
        {/* <button onClick={handleHolaMundoCLick}>test1</button> */}
      </div>
    </div>
  )
}

