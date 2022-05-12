import NavBar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemCount from "./Components/ItemCount/ItemCount";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
    <NavBar />
    <ItemCount stock={5}/>
    <ItemListContainer/>
    <ItemDetailContainer/>
    </>
  );
}

export default App;
