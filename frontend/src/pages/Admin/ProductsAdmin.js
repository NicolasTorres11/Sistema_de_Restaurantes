import React, { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import {
  HeaderPage,
  TableProducts,
  AddEditProducts,
} from "../../components/Admin";
import { useProduct } from "../../hooks";
import { ModalBasic } from "../../components/Common";

export function ProductsAdmin() {
  const { loading, products, getProducts } = useProduct();
  const [showModal, setshowModal] = useState(false);
  const [titleModal, settitleModal] = useState(null);
  const [contentModal, setcontentModal] = useState(null);

  useEffect(() => getProducts(), []);

  const openCloseModal = () => setshowModal((prev) => !prev);

  const addProduct = () => {
    settitleModal("Agregar Producto");
    setcontentModal(<AddEditProducts onClose={openCloseModal} />);
    openCloseModal();
  };

  return (
    <div>
      <HeaderPage
        title="Productos"
        btnTitle="Agregar Producto"
        icon="product hunt"
        btnClick={addProduct}
      />
      {loading ? (
        <Loader active inline="centered">
          Cargando..
        </Loader>
      ) : (
        <TableProducts products={products} />
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
