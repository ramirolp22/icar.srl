import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

function ItemDetailContainer(){

    const { detalleId} = useParams ()
    console.log ( detalleId)

    useEffect(() => {
        
    })
    return (
        <div>

        </div>
    )
}

export default ItemDetailContainer