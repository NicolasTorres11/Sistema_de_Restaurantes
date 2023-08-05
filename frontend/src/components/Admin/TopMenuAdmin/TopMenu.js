import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import "./TopMenu.scss";

export function TopMenu() {
  return (
    <Menu fixed="top" className="top-menu-admin">
      <Menu.Item className="top-menu-admin__logo">
        <p>SR Admin</p>
      </Menu.Item>
      
      <Menu.Item position="right">
        <Menu.Item>Bienvenido, User...</Menu.Item>
        <Menu.Item>
          <Icon name="sign-out" />
        </Menu.Item>
      </Menu.Item>
    </Menu>
  );
}
