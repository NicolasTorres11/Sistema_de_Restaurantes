import React, { useCallback, useState } from "react";
import { Form, Image, Button, Checkbox } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./AddEditCategories.scss";

export function AddEditCategories() {
  const [previewImage, setpreviewImage] = useState(null);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(newSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      console.log("Formulario Enviado");
      console.log(formValue);
    },
  });

  const onDrop = useCallback(async (acceptedFile) => {
    const file = acceptedFile[0];
    await formik.setFieldValue("image", file);
    setpreviewImage(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
    noKeyboard: true,
    multiple: false,
    onDrop,
  });
  return (
    <Form className="add-edit-category" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="title"
        placeholder="Nombre de la Categoria"
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.errors.title}
      />
      <Button
        type="button"
        fluid
        color={formik.errors.image && "red"}
        {...getRootProps()}
      >
        Cargar Imagen
      </Button>
      <input {...getInputProps()} />
      <Image src={previewImage} fluid />
      <div className="add-edit-category__active">
        <Checkbox
          toggle
          checked={formik.values.is_active}
          onChange={(_, data) =>
            formik.setFieldValue("is_active", data.checked)
          }
        />
        Activo
      </div>
      <Button type="submit" primary fluid content="Agregar" />
    </Form>
  );
}

function initialValues() {
  return {
    title: "",
    is_active: true,
    image: "",
  };
}

function newSchema() {
  return {
    title: Yup.string().required(true),
    is_active: Yup.bool().required(true),
    image: Yup.string().required(true),
  };
}