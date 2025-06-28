import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemColor = () => {
  return (
    <Card className='mt-2'>
        <div className='cuadrado border-3'>hola</div>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Button variant="danger">Eliminar</Button>
      </Card.Body>
    </Card>
  );
};

export default ItemColor;
