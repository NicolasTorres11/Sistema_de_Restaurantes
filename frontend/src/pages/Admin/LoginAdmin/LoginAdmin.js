import React from "react";
import { LoginForm } from "../../../components/Admin";
import "./LoginAdmin.scss";

export function LoginAdmin() {
  return (
    <div className="LoginAdmin">
      <div className="LoginAdmin__content">
        <h1>Ingresar al Panel de Control</h1>
        <LoginForm />
      </div>
    </div>
  );
}
