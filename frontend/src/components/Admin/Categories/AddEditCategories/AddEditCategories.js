import React, { useCallback, useState } from "react";
import { Form, Image, Button, Checkbox } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import "./AddEditCategories.scss";

export function AddEditCategories() {
  const [previewImage, setpreviewImage] = useState(null);

  const onDrop = useCallback((acceptedFile) => {
    const file = acceptedFile[0];
    setpreviewImage(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpg, image/png",
    noKeyboard: true,
    multiple: false,
    onDrop,
  });
  return (
    <Form className="add-edit-category">
      <Form.Input name="title" placeholder="Nombre de la Categoria" />
      <Button type="button" fluid {...getRootProps()}>
        Cargar Imagen
      </Button>
      <input {...getInputProps()} />
      <Image src={previewImage} fluid />

      <Button type="submit" primary fluid content="Agregar" />
    </Form>
  );
}
