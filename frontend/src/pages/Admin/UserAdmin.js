import React, { useEffect } from "react";
import { useUser } from "../../hooks";
import { HeaderPage } from "../../components/Admin";
import "./UsersAdmin.scss";

export function UserAdmin() {
  const { loading, users, getUsers } = useUser();
  console.log(users);
  useEffect(() => getUsers(), []);

  return (
    <div className="users-admin">
      <HeaderPage
        title="Usuarios"
        btnTitle="Agregar Usuario"
        btnTitleTwo="Desactivar Usuario"
      />
      <h1>CONTROL DE USUARIOS</h1>
    </div>
  );
}
