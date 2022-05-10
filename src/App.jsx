import NavBar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemCount from "./Components/ItemCount/ItemCount";

function App() {
  return (
    <>
    <NavBar />
    <ItemCount stock={5}/>
    <ItemListContainer/>
    </>
  );
}

export default App;
