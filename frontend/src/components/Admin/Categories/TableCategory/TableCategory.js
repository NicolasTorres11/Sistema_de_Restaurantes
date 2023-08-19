import React from "react";
import { Table, Image, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";
import "./TableCategory.scss";

export function TableCategory(props) {
  const { categories, updateCategory, onDeleteCategory } = props;
  return (
    <Table className="table-categories-admin">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Imagen</Table.HeaderCell>
          <Table.HeaderCell>Categoria</Table.HeaderCell>
          <Table.HeaderCell>Estado</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {map(categories, (category, index) => (
          <Table.Row key={index}>
            <Table.Cell width={2}>
              <Image src={category.image} />
            </Table.Cell>
            <Table.Cell>{category.title}</Table.Cell>
            <Table.Cell className="status">
              {category.is_active ? (
                <Icon name="check" />
              ) : (
                <Icon name="delete" />
              )}
            </Table.Cell>
            <Actions
              categories={category}
              updateCategory={updateCategory}
              onDeleteCategory={onDeleteCategory}
            />
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

function Actions(props) {
  const { categories, updateCategory, onDeleteCategory } = props;
  return (
    <Table.Cell className="status" textAlign="right">
      <Button icon onClick={() => updateCategory(categories)}>
        <Icon name="edit" />
      </Button>
      <Button icon onClick={() => onDeleteCategory(categories)}>
        <Icon name="delete" />
      </Button>
    </Table.Cell>
  );
}