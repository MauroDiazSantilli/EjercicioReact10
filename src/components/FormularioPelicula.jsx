import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

function FormularioPelicula({ agregarPelicula }) {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [genero, setGenero] = useState('');
  const [nombreError, setNombreError] = useState('');
  const [generoError, setGeneroError] = useState('');
  const [descripcionError, setDescripcionError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === '') {
      setNombreError('El nombre es obligatorio');
      return;
    }

    if (genero === '') {
      setGeneroError('Debe seleccionar un genero');
      return;
    }

    if (descripcion.length < 5 || descripcion.length > 700) {
      setDescripcionError('La descripcion debe tener entre 5 y 700 caracteres');
      return;
    }

    const nuevaPelicula = {
      nombre,
      descripcion,
      genero,
    };

    agregarPelicula(nuevaPelicula);
    setNombre('');
    setDescripcion('');
    setGenero('');
    setNombreError('');
    setGeneroError('');
    setDescripcionError('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='my-2'>
        <Form.Label>Nombre: </Form.Label>
        <Form.Control
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          isInvalid={nombreError !== ''}
          
        />
        {nombreError && <Form.Control.Feedback type="invalid">{nombreError}</Form.Control.Feedback>}
      </Form.Group>
      <Form.Group className='my-2'>
        <Form.Label>Descripción: </Form.Label>
        <Form.Control
          as="textarea"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          isInvalid={descripcionError !== ''}
          
        />
        {descripcionError && <Form.Control.Feedback type="invalid">{descripcionError}</Form.Control.Feedback>}
      </Form.Group>
      <Form.Group className='my-2'>
        <Form.Label>Género:</Form.Label>
        <Form.Control
          as="select"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
          isInvalid={generoError !== ''}
        >
          <option value="" disabled hidden>
            Seleccione el genero de su pelicula
          </option>
          <option value="comedia">Comedia</option>
          <option value="drama">Drama</option>
          <option value="infantil">Infantil</option>
        </Form.Control>
        {generoError && <Form.Control.Feedback type="invalid">{generoError}</Form.Control.Feedback>}
      </Form.Group>
      <Button className='my-2' type="submit">Crear</Button>
    </Form>
  )
}

export default FormularioPelicula