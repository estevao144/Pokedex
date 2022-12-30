import "./App.css";
import Pokedex from "./components/Pokedex";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/"  element={ Pokedex } />
    </Routes>
  );
}

export default App;
