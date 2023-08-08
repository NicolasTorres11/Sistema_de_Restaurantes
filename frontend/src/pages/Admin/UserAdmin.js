import React, { useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { useUser } from "../../hooks";
import { HeaderPage } from "../../components/Admin";
import { TableUsers } from "../../components/Admin/Users";
import "./UsersAdmin.scss";

export function UserAdmin() {
  const { loading, users, getUsers } = useUser();
  console.log(users);
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <HeaderPage
        title="Usuarios"
        btnTitle="Agregar Usuario"
        /*
        btnTitleTwo="Desactivar Usuario"
        */
      />
      {loading ? (
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ) : (
        <TableUsers users={users} />
      )}
    </>
  );
}
