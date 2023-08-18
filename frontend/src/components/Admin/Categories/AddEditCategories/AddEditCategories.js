import React, { useCallback, useState } from "react";
import { Form, Image, Button, Checkbox } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useCategory } from "../../../../hooks/useCategory";
import "./AddEditCategories.scss";

export function AddEditCategories(props) {
  const { onClose, onRefetch, categories } = props;
  const [previewImage, setpreviewImage] = useState(categories?.image);
  const { createCategories, updateCategories } = useCategory();

  const formik = useFormik({
    initialValues: initialValues(categories),
    validationSchema: Yup.object(categories ? updateSchema() : newSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        if (categories) updateCategories(categories.id, formValue);
        else await createCategories(formValue);
        onRefetch();
        onClose();
      } catch (error) {
        console.error(error);
      }
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
        {previewImage ? "Actualizar Imagen" : "Agregar Imagen"}
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
      <Button
        type="submit"
        primary
        fluid
        content={categories ? "Actualizar Categoria" : "Agregar Categoria"}
      />
    </Form>
  );
}

function initialValues(data) {
  return {
    title: data?.title || "",
    image: "",
    is_active: data?.is_active ? true : false,
  };
}

function newSchema() {
  return {
    title: Yup.string().required(true),
    image: Yup.string().required(true),
    is_active: Yup.bool().required(true),
  };
}

function updateSchema() {
  return {
    title: Yup.string().required(true),
    image: Yup.string(),
    is_active: Yup.bool(),
  };
}