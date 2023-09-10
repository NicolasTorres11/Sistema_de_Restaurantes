import React, { useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { HeaderPage, TableProducts } from "../../components/Admin";
import { useProduct } from "../../hooks";

export function ProductsAdmin() {
  const { loading, products, getProducts } = useProduct();
  useEffect(() => getProducts(), []);

  return (
    <div>
      <HeaderPage
        title="Productos"
        btnTitle="Agregar Producto"
        icon="product hunt"
      />
      {loading ? (
        <Loader active inline="centered">
          Cargando..
        </Loader>
      ) : (
        <TableProducts products={products} />
      )}
    </div>
  );
}
