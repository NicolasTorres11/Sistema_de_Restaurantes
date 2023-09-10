import React from "react";
import { Form, Image, Button, Dropdown, Checkbox } from "semantic-ui-react";
import "./AddEditProducts.scss";

export function AddEditProducts() {
  return (
    <Form className="add-edit-product-form">
      <Form.Input name="title" placeholder="Nombre del Producto" />
      <Form.Input
        type="number"
        name="price"
        placeholder="Precio del Producto"
      />
      <Dropdown placeholder="Categoria" fluid selection search />
      <Button type="button" fluid>
        Subir Imagen
      </Button>
      <div className="add-edit-product-form__active">
        <Checkbox toggle />
        Estado del Producto
      </div>
      <Button type="submit" primary fluid content="Agregar Producto" />
    </Form>
  );
}
