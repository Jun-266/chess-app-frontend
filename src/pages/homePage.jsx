import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleCreateGame = () => {
    navigate('/create-game');
  };

  const handleJoinGame = () => {
    navigate('/join-game');
  };

  const handleViewProfile = () => {
    navigate('/profile');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>¡Bienvenido a la aplicación de Ajedrez!</h1>
      <p style={styles.subtitle}>Elige una opción para comenzar:</p>

      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleCreateGame}>
          Crear Partida
        </button>
        <button style={styles.button} onClick={handleJoinGame}>
          Unirse a Partida
        </button>
        <button style={styles.button} onClick={handleViewProfile}>
          Ver Perfil
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '20px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
  },
};

styles.button[':hover'] = {
  backgroundColor: '#45a049',
};

export default HomePage;
