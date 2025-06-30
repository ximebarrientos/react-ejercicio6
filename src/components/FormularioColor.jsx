import { Form, Button } from "react-bootstrap";
import GrillaColores from "./GrillaColores";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

const FormularioColor = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const coloresLocalStorage = JSON.parse(localStorage.getItem("colores")) || [];
  const [colores, setColores] = useState(coloresLocalStorage);

  useEffect(() => {
    localStorage.setItem("colores", JSON.stringify(colores));
  }, [colores]);

  const agregarColor = (dato) => {
    setColores([...colores, dato.color]);
    reset();
  };

  const borrarColor = (nombreColor) => {
    //filtrar el array de colores y generar uno nuevo para poder modificarlo y actualizar state
    const coloresFiltrados = colores.filter(
      (itemColor) => itemColor !== nombreColor
    );
    setColores(coloresFiltrados);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(agregarColor)}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            placeholder="Ingrese un color ej: blue"
            {...register("color", {
              required: "Es obligatorio que ingreses un color",
              minLength: {
                value: 3,
                message: "El color ingresado debe contener minimo 3 caracteres",
              },
              maxLength: {
                value: 25,
                message:
                  "El color ingresado debe tener como maximo 25 caracteres",
              },
            })}
          />
          <Button variant="info" type="submit">
            Enviar
          </Button>
        </Form.Group>
        <Form.Text className="text-danger">{errors.color?.message}</Form.Text>
      </Form>
      <GrillaColores
        colores={colores}
        borrarColor={borrarColor}
      ></GrillaColores>
    </>
  );
};

export default FormularioColor;
