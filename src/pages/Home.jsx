import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
// import {Header} from '../components/header';

function Home(){

    const nav = useNavigate();
    const redirigirALogin = () => {
        console.log("!!STEP 1, Estra a Redirigir (Front)")
        window.location.href = "http://localhost:8081/login";  // Dirección a la vista   gestionada por Spring Boot
    };

    const redirigirARegister = () => {
        console.log("!!STEP 2, Estra a Redirigir (Front)")
        window.location.href = "http://localhost:8081/users/add-user";  // Dirección a la vista   gestionada por Spring Boot
    };
    const handleHolaMundoCLick = () => {
        console.log("Redirect to holaMundo page");
        nav('/test');
    };

    const handleHolaMundoCLick2 = () => {
      console.log("Redirect to holaMundo page2");
      nav('/options');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Bienvenido a Chess</h1>
            <p style={styles.subtitle}>The best Chess APP</p>
            <div style={styles.buttonContainer}>

            <button style={styles.button} onClick={redirigirALogin}>Log In</button>
            <button style={styles.button} onClick={redirigirARegister}>Register</button>

            <button style={styles.button} onClick={handleHolaMundoCLick}>home</button>

            <button style={styles.button} onClick={handleHolaMundoCLick2}>home</button>

            {/* <button style={styles.button} onClick={handleHolaMundoCLick}>holaMundo</button> */}
            </div>
            {<Outlet />}
        </div>
    );
};

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f8ff',
      fontFamily: 'Arial, sans-serif',
    },
    title: {  
      fontSize: '2.5rem',
      color: '#333',
      marginBottom: '0.5rem',
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#666',
      marginBottom: '2rem',
    },
    buttonContainer: {
      display: 'flex',
      gap: '1rem',
    },
    button: {
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      backgroundColor: '#4CAF50',
      color: '#fff',
      transition: 'background-color 0.3s',
    },
};

export default Home;