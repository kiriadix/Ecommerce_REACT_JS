import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Item = ({id,title,description,price,picture}) => {
  return (
    <>
      <div>
          <img className="img_product" src={picture} alt={title} />
          <h1>{title}</h1>
          <p>{description}</p>
          <h3 className='price_color'>${price}</h3>
          <Link to={`/item/${id}`}>
            <Button variant="primary"> Ver detalle </Button>
          </Link>
      </div>
    </>
  )
}

export default Item
