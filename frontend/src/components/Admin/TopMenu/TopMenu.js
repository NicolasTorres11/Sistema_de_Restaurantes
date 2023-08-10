import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import { useAuth } from "../../../hooks";
import "./TopMenu.scss";

export function TopMenu() {
  const { auth, logout } = useAuth();

  const renderName = () => {
    if (auth.me?.first_name) {
      return `${auth.me.first_name}`;
    }
    return auth.me?.email;
  };
  return (
    <Menu fixed="top" className="top-menu-admin">
      <Menu.Item className="top-menu-admin__logo">
        <p>SR Admin</p>
      </Menu.Item>

      <Menu.Menu className="top-menu-admin__navbar" position="right">
        <Menu.Item className="top-menu-admin__navbar__name">
          Bienvenido, {renderName()}
        </Menu.Item>
        <Menu.Item className="top-menu-admin__navbar__logout" onClick={logout}>
          <Icon name="sign out" />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
