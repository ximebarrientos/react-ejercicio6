import Row from 'react-bootstrap/Row';
import ItemColor from './ItemColor';

const GrillaColores = ({colores, borrarColor}) => {
  return (
    <section>
      <Row md={2} lg={3} className="row-gap-2 mt-4" >
        {colores.map((color,indice)=>(<ItemColor key={indice} nombreColor={color} borrarColor={borrarColor} ></ItemColor>))}
      </Row>
    </section>
  );
};

export default GrillaColores;
