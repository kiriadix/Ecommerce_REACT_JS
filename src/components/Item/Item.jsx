import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Item = ({id,title,description,price,picture}) => {
  return (
    <>
        <div>
            <img className="img_product" src={picture} alt={title} />
            <h1>{title}</h1>
            <p>{description}</p>
            <h3>{price}</h3>
        </div>

    </>
  )
}

export default Item
