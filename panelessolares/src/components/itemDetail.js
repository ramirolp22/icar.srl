import { useParams } from "react-router-dom"

const ItemDetail = ({pokemon}) => {
    const { detalleId} = useParams ()
    console.log ( detalleId)
    return (
        <div>

        </div>
    )
}

export default ItemDetail