import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks";
import "./SideMenu.scss";

export function SideMenu(props) {
  const { children } = props;
  const { pathName } = useLocation();

  return (
    <div className="side-menu-admin">
      <MenuLeft pathName={pathName} />
      <div className="content">{children}</div>
    </div>
  );
}

function MenuLeft(props) {
  const { pathName } = props;

  const { auth } = useAuth();

  return (
    <Menu fixed="left" borderless className="side" vertical>
      <Menu.Item
        className="menu-item"
        as={Link}
        to={"/admin"}
        active={pathName === "/admin"}
      >
        <Icon name="home" /> Pedidos
      </Menu.Item>

      <Menu.Item
        className="menu-item"
        as={Link}
        to={"/admin/tables"}
        active={pathName === "/admin/tables"}
      >
        <Icon name="table" /> Mesas
      </Menu.Item>

      <Menu.Item
        className="menu-item"
        as={Link}
        to={"/admin/payments-history"}
        active={pathName === "/admin/payments-history"}
      >
        <Icon name="payment" /> Historial de Pagos
      </Menu.Item>

      <Menu.Item
        className="menu-item"
        as={Link}
        to={"/admin/categrories"}
        active={pathName === "/admin/categories"}
      >
        <Icon name="folder" /> Categorias
      </Menu.Item>

      <Menu.Item
        className="menu-item"
        as={Link}
        to={"/admin/products"}
        active={pathName === "/admin/products"}
      >
        <Icon name="cart" /> Productos
      </Menu.Item>

      {auth.me?.is_staff && (
        <Menu.Item
          className="menu-item"
          as={Link}
          to={"/admin/users"}
          active={pathName === "/admin/users"}
        >
          <Icon name="user circle" /> Usuarios
        </Menu.Item>
      )}
    </Menu>
  );
}
