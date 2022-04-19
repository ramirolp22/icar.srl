
import './App.css';
import NavBar from './components/navBar';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import ItemDetailContainer from './components/itemDetailContainer';
import ItemListContainter from './components/itemListContainter';



function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainter/>}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainter/>}/>
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
            <Route path='/*' element={ <Navigate to= "/" replace />}/>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
