
import React, { useEffect, useState } from "react";
import { getUserById } from "../services/userService"; // Importa tu función de Axios

const UserDetails = () => {
  const [user, setUser] = useState(null); // Estado para almacenar los datos del usuario
  const [error, setError] = useState(null); // Estado para manejar errores
  const [loading, setLoading] = useState(true); // Estado para indicar si los datos están cargando

  useEffect(() => {
    // Llama a la función para obtener al usuario
    getUserById()
      .then((data) => {
        setUser(data); // Actualiza el estado con los datos del usuario
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Error al cargar los datos del usuario.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando...</p>; // Muestra un mensaje mientras se cargan los datos

  if (error) return <p>Error: {error}</p>; // Muestra un mensaje si ocurre un error

  if (!user) return <p>No se encontró información del usuario.</p>; // Muestra esto si no hay usuario

  // Renderiza la información del usuario
  return (
    <div>
      <h1>Detalles del Usuario</h1>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Nombre de usuario:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Nombre:</strong> {user.name}</p>
      <p><strong>Apellido:</strong> {user.lastname}</p>
      <p><strong>Roles:</strong> {user.roles}</p>
    </div>
  );
};

export default UserDetails;