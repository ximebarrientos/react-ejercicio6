import { Form, Button } from "react-bootstrap";
import GrillaColores from "./GrillaColores";

const FormularioColor = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3 d-flex">
            <div className="border cuadrado">caja</div>
          <Form.Control type="text" placeholder="Ingrese un color ej: blue" />
          <Button variant="info" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <GrillaColores></GrillaColores>
    </>
  );
};

export default FormularioColor;
