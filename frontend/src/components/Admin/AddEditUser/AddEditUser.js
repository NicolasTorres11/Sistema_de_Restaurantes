import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useUser } from "../../../hooks";
import "./AddEditUser.scss";

export function AddEditUser(props) {
  const { onClose, onRefecth, user } = props;
  const { addUser, updateUser } = useUser();
  const formik = useFormik({
    initialValues: initialValues(user),
    validationSchema: Yup.object(user ? updateSchema() : newSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        if (user) await updateUser(user.id, formValue);
        else await addUser(formValue);
        onRefecth();
        onClose();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Form className="add-edit-admin" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="username"
        placeholder="Nombre de Usuario"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.errors.username}
      />
      <Form.Input
        name="email"
        placeholder="Correo Electrónicoooooooo"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Form.Input
        name="first_name"
        placeholder="Nombre"
        value={formik.values.first_name}
        onChange={formik.handleChange}
        error={formik.errors.first_name}
      />
      <Form.Input
        name="last_name"
        placeholder="Apellido"
        value={formik.values.last_name}
        onChange={formik.handleChange}
        error={formik.errors.last_name}
      />
      <Form.Input
        name="password"
        type="password"
        placeholder="Contraseña"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <div className="add-edit-admin__active">
        <Checkbox
          className="custom-checkbox"
          toggle
          checked={formik.values.is_active}
          onChange={(_, data) =>
            formik.setFieldValue("is_active", data.checked)
          }
        />
        Usuario Activo
      </div>
      <div className="add-edit-admin__staff">
        <Checkbox
          className="custom-checkbox"
          toggle
          checked={formik.values.is_staff}
          onChange={(_, data) => formik.setFieldValue("is_staff", data.checked)}
        />
        Usuario Administrador
      </div>

      <Button
        type="submit"
        primary
        fluid
        content={user ? "Editar" : "Registrar"}
      />
    </Form>
  );
}

function initialValues(data) {
  return {
    username: data?.username || "",
    email: data?.email || "",
    first_name: data?.first_name || "",
    last_name: data?.last_name || "",
    password: "",
    is_active: data?.is_active ? true : false,
    is_staff: data?.is_staff ? true : false,
  };
}

function newSchema() {
  return {
    username: Yup.string().required(true),
    email: Yup.string().email(true).required(true),
    first_name: Yup.string(),
    last_name: Yup.string(),
    password: Yup.string().required(true),
    is_active: Yup.bool().required(true),
    is_staff: Yup.bool().required(true),
  };
}

function updateSchema() {
  return {
    username: Yup.string().required(true),
    email: Yup.string().email(true).required(true),
    first_name: Yup.string(),
    last_name: Yup.string(),
    password: Yup.string(),
    is_active: Yup.bool().required(true),
    is_staff: Yup.bool().required(true),
  };
}