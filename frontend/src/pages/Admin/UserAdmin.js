import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { useUser } from "../../hooks";
import { HeaderPage } from "../../components/Admin";
import { TableUsers } from "../../components/Admin/Users";
import { ModalBasic } from "../../components/Common";
import "./UsersAdmin.scss";

export function UserAdmin() {
  const [ShowModal, setShowModal] = useState(false);
  const [TitleModal, setTitleModal] = useState(null);
  const [ContentModal, setContentModal] = useState(null);
  const { loading, users, getUsers } = useUser();
  useEffect(() => {
    getUsers();
  }, []);

  const OpenCloseModal = () => setShowModal((prev) => !prev);

  return (
    <>
      <HeaderPage
        title="Usuarios"
        btnTitle="Agregar Usuario"
        btnClick={OpenCloseModal}
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

      <ModalBasic
        show={ShowModal}
        title="Agregar Usuario"
        children={<h1>Content...</h1>}
        onClose={OpenCloseModal}
      />
    </>
  );
}
