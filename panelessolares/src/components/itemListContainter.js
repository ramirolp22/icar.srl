import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { getFetch } from '../helpers/getFetch'
import { useEffect } from 'react'
import ItemList from './itemList'
import { useParams } from 'react-router-dom'


function ItemListContainter({ div }) {
  const [productos, setProductos] = useState([])
  const [loading, setLoadign] = useState(true)



  useEffect(() => {
    getFetch
    .then((respuesta) => {
      console.log(respuesta)
      return respuesta
    })
    .then((resp) => setProductos(resp))
    .catch(err => console.log(err))
    .finally(() => setLoadign(false))
  }, [])

  return (
    loading ? <h1>CARGANDO...</h1>
     :
    <div>
      <ItemList/>
      {productos.map((prod) => <li key={prod.id}>{prod.nombre}</li>)}
    </div>
  )
}
export default ItemListContainter
