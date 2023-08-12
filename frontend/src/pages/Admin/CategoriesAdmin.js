import React, { useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { HeaderPage } from "../../components/Admin";
import { useCategory } from "../../hooks/useCategory";

export function CategoriesAdmin() {
  const { loading, categories, getCategories } = useCategory();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <HeaderPage
        title="Categorias"
        btnTitle="Agregar Categoria"
        icon="window restore outline"
      />
      {loading ? (
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ) : (
        <h2>Tabla de Categorias</h2>
      )}
    </div>
  );
}
