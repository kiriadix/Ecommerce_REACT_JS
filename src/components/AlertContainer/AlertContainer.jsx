import Alert from 'react-bootstrap/Alert';

const AlertContainer = ({show , setShow}) => {

  const cerrar = {
    show:false, 
    variant:"", 
    text1:"", 
    text2:""
  };

  return (
    <>
      <Alert show={show.show} variant={show.variant} onClose={() => setShow(cerrar) } dismissible>
        <Alert.Heading>{show.text1}</Alert.Heading>
        <p>{show.text2}</p>
      </Alert>
    </>
  )
}

export default AlertContainer