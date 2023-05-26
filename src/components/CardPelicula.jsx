import React from 'react';
import { Card } from 'react-bootstrap';

function CardPelicula({ pelicula }) {
  const generoMayusc = pelicula.genero.charAt(0).toUpperCase() + pelicula.genero.slice(1);

  return (
    <Card className='mb-5'>
      <Card.Body className='bg-card text-white'>
        <Card.Title className='text-center bg-success fs-2'>{pelicula.nombre}</Card.Title>
        <hr />
        <Card.Text>{pelicula.descripcion}</Card.Text>
        <hr />
        <Card.Text className='fw-bold bg-info text-white w-25 text-center'>{generoMayusc}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardPelicula;