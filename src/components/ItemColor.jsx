import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemColor = ({nombreColor,borrarColor}) => {
  return (
    <Card className='mt-2 pt-2 align-items-center'>
        <Card.Text className='cuadrado border' style={{backgroundColor:nombreColor}}></Card.Text>
      <Card.Body>
        <Card.Title>{nombreColor}</Card.Title>
        <Button variant="danger" onClick={()=>borrarColor(nombreColor)}>Eliminar</Button>
      </Card.Body>
    </Card>
  );
};

export default ItemColor;
