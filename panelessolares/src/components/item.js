import { useEffect } from "react";
import { useState} from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import {Card} from 'react-bootstrap'
import {Button} from "react-bootstrap"
import { Link, useParams } from "react-router-dom";



function Item() {

  const [pokemon, setPokemon] = useState([])

  const { categoriaId } = useParams()
  console.log(categoriaId)

  const loadData = () => {

    if (categoriaId) {

      let url = "https://pokeapi.co/api/v2/pokemon/?limit";
        fetch(url)
          .then(resp => {
            console.log(resp.results)
            return resp.json() 
            })
            .then(resp => {
              console.log(resp.results)
              for (let i = 0; i < resp.results.length; i++){
                let url2 = resp.results[i].url
                fetch (url2)
                .then(results => {
                  return results.json()
                })
                .then(results => {
                  console.log(results)
                  setPokemon(prevArray => [...prevArray, results])
      
                })
              }
            })
    }else{

      let url = "https://pokeapi.co/api/v2/pokemon/?limit";
        fetch(url)
          .then(resp => {
            console.log(resp.results)
            return resp.json() 
            })
            .then(resp => {
              console.log(resp.results)
              for (let i = 0; i < resp.results.length; i++){
                let url2 = resp.results[i].url
                fetch (url2)
                .then(results => {
                  return results.json()
                })
                .then(results => {
                  setPokemon(prevArray => [...prevArray, results])
      
                })
              }
            })

    }
  }

  /*const loadData = () => {

    let url = "https://pokeapi.co/api/v2/pokemon/?limit";
    fetch(url)
      .then(resp => {
        console.log(resp.results)
         return resp.json() 
        })
        .then(resp => {
          console.log(resp.results)
          for (let i = 0; i < resp.results.length; i++){
            let url2 = resp.results[i].url
            fetch (url2)
            .then(results => {
              return results.json()
            })
            .then(results => {
              setPokemon(prevArray => [...prevArray, results])
  
            })
          }
        })
  }*/
  console.log(pokemon)
  useEffect(loadData, [categoriaId])

    return (
        <div >
        {pokemon.map((e) =>
          <Container>
              <Row className="justify-content-center">
                      <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={e.sprites.front_default} />
                      <Card.Body>
                        <Card.Title>{e.name}</Card.Title>
                        <Card.Text>
                          {e.types[0].type.name}
                        </Card.Text>
                        <Link to={`detalle/${e.id}`}>
                          <Button variant="primary">Detalle</Button>
                        </Link>
                      </Card.Body>
                    </Card>
              </Row>
          </Container>
        )}
        </div>
    )
    
  }
  export default Item
      