import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemColor = ({nombreColor}) => {
  return (
    <Card className='mt-2'>
        <div className='cuadrado border-3'>aqui cuadrado color</div>
      <Card.Body>
        <Card.Title>{nombreColor}</Card.Title>
        <Button variant="danger">Eliminar</Button>
      </Card.Body>
    </Card>
  );
};

export default ItemColor;
