import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { ModalBasic } from "../../components/Common";
import {
  AddEditCategories,
  HeaderPage,
  TableCategory,
} from "../../components/Admin";
import { useCategory } from "../../hooks/useCategory";

export function CategoriesAdmin() {
  const [showModal, setshowModal] = useState(false);
  const [titleModal, settitleModal] = useState(null);
  const [contentModal, setcontentModal] = useState(null);
  const { loading, categories, getCategories } = useCategory();
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    getCategories();
  }, [refetch]);

  const openCloseModal = () => setshowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);

  const addCategory = () => {
    settitleModal("Agregar Categoria");
    setcontentModal(
      <AddEditCategories onClose={openCloseModal} onRefetch={onRefetch} />
    );
    openCloseModal();
  };
  return (
    <div>
      <HeaderPage
        title="Categorias"
        btnTitle="Agregar Categoria"
        icon="window restore outline"
        btnClick={addCategory}
      />
      {loading ? (
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ) : (
        <TableCategory categories={categories} />
      )}
      <ModalBasic
        show={showModal}
        onClose={openCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </div>
  );
}
