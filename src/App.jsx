import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Index from "./Components/pages/Index"
import PagesProductos from "./Components/pages/PagesProductos";
import SingleProducts from './Components/pages/SingleProducts';
// import ItemCount from "./Components/ItemCount/ItemCount";
// import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/productos" element={<PagesProductos/>} />  
        <Route path="/producto/:id" element={<SingleProducts/>}/>
      </Routes>


    </Router>
   
    </>
  );
}

export default App;
