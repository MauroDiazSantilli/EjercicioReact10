import React, {useState, useEffect} from "react"
import "./App.css"
import FormularioPelicula from "./FormularioPelicula"
import CardPelicula from "./CardPelicula"
import {Container, Row, Col} from "react-bootstrap"

function AdministrarPelicula(){
    const [pelicula, setPelicula] = useState([])

    useEffect (() => {
        const peliculaStorage = JSON.parse(localStorage.getItem("pelicula"))

        if (peliculaStorage){
            setPelicula(peliculaStorage)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("pelicula", JSON.stringify(pelicula))
    }, [pelicula])

    const agregarPelicula = (nuevaPelicula) => {
        setPelicula([...pelicula, nuevaPelicula])
    }

    return (
        <Container>
        <h1>Administrador de peliculas</h1>
        <Row>
           <Col>
           <FormularioPelicula agregarPelicula={agregarPelicula}/>
           </Col> 
        </Row>
        <h2>Peliculas agregadas: </h2>
        <Row>
            {pelicula.map((pelicula, indice) => (
               <Col key={indice}>
                <CardPelicula pelicula={pelicula}/>
               </Col> 
            ))}
        </Row>
        </Container>
    )
}

export default AdministrarPelicula