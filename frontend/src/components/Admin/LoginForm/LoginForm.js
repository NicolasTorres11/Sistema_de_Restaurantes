import React from "react";
import { Button, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "./LoginForms.scss";
import { loginApi } from "../../../api/auth";
import { useAuth } from "../../../hooks";

export function LoginForm() {
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formValues) => {
      try {
        const response = await loginApi(formValues);
        const { access } = response;
        login(access);
      } catch (error) {
        toast.error(error.message);
      }
    },
  });
  return (
    <Form className="LoginFormAdmin" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="email"
        placeholder="Correo Electrónico"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Form.Input
        name="password"
        type="password"
        placeholder="Ingrese su Contraseña"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Button type="submit" content="Iniciar Sesion" primary fluid />
    </Form>
  );
}

function initialValues() {
  return {
    email: "",
    password: "",
  };
}

function validationSchema() {
  return {
    email: Yup.string().email("Ingrese un email valido").required(true),
    password: Yup.string().required(true),
  };
}
