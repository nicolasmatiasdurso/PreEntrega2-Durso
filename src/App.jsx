import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carrito from "./components/Carrito";

function App() {

  const greeting = "bienvenidos a mi tienda de coderhouse" ;

  return (
    <div>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={greeting}/>} />
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/carrito" element={<Carrito />}/>
          </Routes>
          
        </BrowserRouter>
    </div>
  );
}

export default App;