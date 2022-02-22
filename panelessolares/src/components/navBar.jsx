import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import '../estilos.css'

function NavBar(){
    return(
        <div>
           <nav>
               <ul className="nav">
                   <li><a href="">Inicio</a></li>
                   <li><a href="">Informacion</a></li>
                   <li><a href="">Productos</a>
                       <ul>
                           <li><a href=""></a>Paneles Solares</li>
                           <li><a href=""></a>Transformadores</li>
                       </ul>
                   </li>
                   <li><a href="">Contacto</a></li>
               </ul>
           </nav>
        </div>
    )
}

export default NavBar