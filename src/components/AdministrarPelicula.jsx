import React, { useState, useEffect } from 'react';
import '../App.css';
import FormularioPelicula from './FormularioPelicula'
import CardPelicula from './CardPelicula'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

function AdministrarPelicula() {
  const [peliculas, setPeliculas] = useState([])

  useEffect(() => {
    const storagePelicula = JSON.parse(localStorage.getItem('peliculas'))
    if (storagePelicula) {
      setPeliculas(storagePelicula)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('peliculas', JSON.stringify(peliculas))
  }, [peliculas]);

  const agregarPelicula = (nuevaPelicula) => {
    setPeliculas([...peliculas, nuevaPelicula])
  };

  return (
    <>
      <Container className='border rounded mt-4 p-5 bg-admin'>
        <h1 className='text-center my-4'>Administrador de peliculas<FontAwesomeIcon icon={faFilm} flip className='ms-2' /></h1>
        <hr />
        <Row>
          <Col>
            <FormularioPelicula agregarPelicula={agregarPelicula} />
          </Col>
        </Row>
      </Container>
      <Container className='my-5'>
        <h2 className='text-white mb-5'>Peliculas agregadas:</h2>
        <Row>
          {peliculas.map((pelicula, indice) => (
            <Col sm={6} md={6} lg={6} key={indice}>
              <CardPelicula pelicula={pelicula} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default AdministrarPelicula;