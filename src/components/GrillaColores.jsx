import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemColor from './ItemColor';

const GrillaColores = () => {
  return (
    <div>
      <Row md={2} lg={3} className="row-gap-2 mt-4">
            <ItemColor></ItemColor>
      </Row>
    </div>
  );
};

export default GrillaColores;
