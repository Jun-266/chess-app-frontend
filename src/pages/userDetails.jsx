import React, { useEffect, useState } from "react";
import { getUserById, getUserByUsername } from "../services/userService";
import { UserIcon, EnvelopeIcon, IdentificationIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';
import { jwtDecode } from 'jwt-decode';

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tokenData = localStorage.getItem('token');
    const decodedData = jwtDecode(tokenData);
    console.log("userDetailsData",decodedData)
    const idUser = decodedData.sub;
    getUserByUsername(idUser)
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Errors al cargar los datos del usuario.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    );
  }
if (!user) {
    return (
      <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
        <span className="block sm:inline">No se encontró información del usuario.</span>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center px-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-green-500 mb-6 text-center">Detalles del Usuario</h1>
        <div className="space-y-4">
          <UserInfoItem icon={<IdentificationIcon className="h-5 w-5" />} label="ID" value={user.id} />
          <UserInfoItem icon={<UserIcon className="h-5 w-5" />} label="Nombre de usuario" value={user.username} />
          <UserInfoItem icon={<EnvelopeIcon className="h-5 w-5" />} label="Email" value={user.email} />
          <UserInfoItem icon={<UserIcon className="h-5 w-5" />} label="Nombre" value={user.name} />
          <UserInfoItem icon={<UserIcon className="h-5 w-5" />} label="Apellido" value={user.lastname} />
          <UserInfoItem icon={<ShieldCheckIcon className="h-5 w-5" />} label="Roles" value={user.roles} />
        </div>
      </div>
    </div>
  );
};

const UserInfoItem = ({ icon, label, value }) => (
  <div className="flex items-center space-x-2 text-white">
    <div className="text-green-500">{icon}</div>
    <span className="font-semibold">{label}:</span>
    <span className="text-gray-300">{value}</span>
  </div>
);

export default UserDetails;