import React from "react";
import { Table, Image, Button, Icon, Tab } from "semantic-ui-react";
import { map } from "lodash";
import "./TableCategory.scss";

export function TableCategory(props) {
  const { categories } = props;
  return (
    <Table className="table-categories-admin">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Imagen</Table.HeaderCell>
          <Table.HeaderCell>Categoria</Table.HeaderCell>
          <Table.HeaderCell>Estdo</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {map(categories, (category, index) => (
          <Table.Row key={index}>
            <Table.Cell width={2}>
              <Image src={category.image} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
