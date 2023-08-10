import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { useUser } from "../../hooks";
import { HeaderPage, AddEditUser } from "../../components/Admin";
import { TableUsers } from "../../components/Admin/Users";
import { ModalBasic } from "../../components/Common";
import "./UsersAdmin.scss";

export function UserAdmin() {
  const [ShowModal, setShowModal] = useState(false);
  const [TitleModal, setTitleModal] = useState(null);
  const [ContentModal, setContentModal] = useState(null);
  const [refetch, setrefetch] = useState(false);
  const { loading, users, getUsers } = useUser();
  useEffect(() => {
    getUsers();
  }, [refetch]);

  const OpenCloseModal = () => setShowModal((prev) => !prev);
  const onRefecth = () => setrefetch((prev) => !prev);

  const addUser = () => {
    setTitleModal("Nuevo Usuario");
    setContentModal(
      <AddEditUser onClose={OpenCloseModal} onRefecth={onRefecth} />
    );
    OpenCloseModal();
  };

  const updateUSer = (data) => {
    setTitleModal("Editar Usuario");
    setContentModal(
      <AddEditUser onClose={OpenCloseModal} onRefecth={onRefecth} user={data} />
    );
    OpenCloseModal();
    console.log("Editar");
    console.log(data);
  };

  return (
    <>
      <HeaderPage
        title="Usuarios"
        btnTitle="Agregar Usuario"
        btnClick={addUser}
        /*
        btnTitleTwo="Desactivar Usuario"
        */
      />
      {loading ? (
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ) : (
        <TableUsers users={users} updateUSer={updateUSer} />
      )}

      <ModalBasic
        show={ShowModal}
        title={TitleModal}
        children={ContentModal}
        onClose={OpenCloseModal}
      />
    </>
  );
}
