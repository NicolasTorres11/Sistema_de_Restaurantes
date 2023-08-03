import React from "react";
import { Button, Form } from "semantic-ui-react";
import "./LoginForms.scss";

export function LoginForm() {
  return (
    <Form className="LoginFormAdmin">
      <Form.Input name="email" placeholder="Correo Electrónico" />
      <Form.Input
        name="password"
        type="password"
        placeholder="Ingrese su Contraseña"
      />
      <Button type="submit" content="Iniciar Sesion" primary fluid />
    </Form>
  );
}
