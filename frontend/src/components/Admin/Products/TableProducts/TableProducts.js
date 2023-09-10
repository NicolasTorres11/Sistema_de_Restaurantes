import React from "react";
import { Table, Image, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";
import "./TableProducts.scss";

export function TableProducts(props) {
  const { products } = props;
  console.log(products);
  return (
    <Table className="table-product-admin">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Imagen</Table.HeaderCell>
          <Table.HeaderCell>Producto</Table.HeaderCell>
          <Table.HeaderCell>Precio</Table.HeaderCell>
          <Table.HeaderCell>Categoria</Table.HeaderCell>
          <Table.HeaderCell>Activo</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {map(products, (product, index) => (
          <Table.Row ket={index}>
            <Table.Cell width={2}>
              <Image src={product.image} />
            </Table.Cell>
            <Table.Cell>{product.title}</Table.Cell>
            <Table.Cell>$ {product.price}</Table.Cell>
            <Table.Cell>{product.category_data.title}</Table.Cell>
            <Table.Cell className="status">
              {product.is_active ? (
                <Icon name="check" />
              ) : (
                <Icon name="delete" />
              )}
            </Table.Cell>
            <Actions product={product} />
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

function Actions(props) {
  const { product } = props;
  return (
    <Table.Cell textAlign="right" className="status">
      <Button icon onClick={() => console.log("Editar...")}>
        <Icon name="edit" />
      </Button>
      <Button icon onClick={() => console.log("Eliminar..")}>
        <Icon name="delete" />
      </Button>
    </Table.Cell>
  );
}
