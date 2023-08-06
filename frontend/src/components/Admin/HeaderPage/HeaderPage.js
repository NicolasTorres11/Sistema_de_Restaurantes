import React from "react";
import { Button, Icon } from "semantic-ui-react";
import "./HeaderPage.scss";

export function HeaderPage(props) {
  const { title, btnTitle, btnClick, btnTitleTwo, btnClickTwo } = props;

  return (
    <div className="header-page-admin">
      <h2>{title}</h2>
      <div>
        {btnTitle && (
          <Button color="linkedin" onClick={btnClick}>
            <Icon name="user" /> {btnTitle}
          </Button>
        )}
        {btnTitleTwo && (
          <Button negative onClick={btnClickTwo}>
            <Icon name="user delete" /> {btnTitleTwo}
          </Button>
        )}
      </div>
    </div>
  );
}
